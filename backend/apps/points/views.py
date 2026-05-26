from rest_framework             import status
from rest_framework.decorators  import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response    import Response

from apps.users.models          import User
from apps.users.permissions     import IsAdmin
from .models                    import PointTransaction, EventShare
from .serializers               import PointTransactionSerializer, AwardPointsSerializer
from .services                  import get_points_summary, award_points


# ── Helpers ────────────────────────────────────────────────────────

LEVEL_THRESHOLDS = [
    (3000, "Diamond"),
    (2000, "Platinum"),
    (1000, "Gold"),
    (500,  "Silver"),
    (0,    "Bronze"),
]

def get_level(points: int) -> str:
    for threshold, label in LEVEL_THRESHOLDS:
        if points >= threshold:
            return label
    return "Bronze"

def get_next_milestone(points: int) -> int:
    thresholds_asc = sorted(t for t, _ in LEVEL_THRESHOLDS)
    for t in thresholds_asc:
        if points < t:
            return t
    return thresholds_asc[-1]

def build_leaderboard(limit: int = 50):
    from django.db.models import Sum, Count
    users = (
        User.objects
        .filter(is_active=True)
        .exclude(role="admin")
        .annotate(
            total_points    = Sum("point_transactions__points"),
            events_attended = Count("checkins", distinct=True),
        )
        .order_by("-total_points")[:limit]
    )
    results = []
    for i, u in enumerate(users):
        pts = u.total_points or 0
        results.append({
            "rank":            i + 1,
            "user_id":         u.id,
            "name":            u.full_name,
            "email":           u.email,
            "total_points":    pts,
            "level":           get_level(pts),
            "events_attended": u.events_attended or 0,
        })
    return results


# ── User endpoints ─────────────────────────────────────────────────

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def my_points(request):
    """GET /api/points/ — logged-in user's points summary + history."""
    summary      = get_points_summary(request.user)
    transactions = PointTransaction.objects.filter(user=request.user)
    serializer   = PointTransactionSerializer(transactions, many=True)
    return Response({
        "total":     summary["total"],
        "breakdown": summary["breakdown"],
        "history":   serializer.data,
    })


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def leaderboard(request):
    """GET /api/points/leaderboard/"""
    limit   = min(int(request.query_params.get("limit", 50)), 100)
    results = build_leaderboard(limit=limit)
    return Response({"leaderboard": results})


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def my_rank(request):
    """GET /api/points/my-rank/"""
    full       = build_leaderboard(limit=1000)
    user_entry = next((e for e in full if e["user_id"] == request.user.id), None)
    pts  = user_entry["total_points"] if user_entry else 0
    rank = user_entry["rank"]         if user_entry else len(full) + 1
    return Response({
        "rank":            rank,
        "total_points":    pts,
        "level":           get_level(pts),
        "next_milestone":  get_next_milestone(pts),
        "points_to_next":  max(get_next_milestone(pts) - pts, 0),
        "events_attended": request.user.checkins.count(),
        "total_users":     len(full),
    })


# ── Share token endpoints ──────────────────────────────────────────

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def generate_share_token(request):
    """
    POST /api/points/share/generate/
    Body: { event_id }
    Returns (or creates) a unique share token for the current user + event.
    The frontend uses this token to build a shareable URL.
    """
    import secrets
    from apps.events.models import Event

    event_id = request.data.get("event_id")
    if not event_id:
        return Response({"error": "event_id is required."}, status=status.HTTP_400_BAD_REQUEST)

    try:
        event = Event.objects.get(id=event_id)
    except Event.DoesNotExist:
        return Response({"error": "Event not found."}, status=status.HTTP_404_NOT_FOUND)

    share, created = EventShare.objects.get_or_create(
        event     = event,
        shared_by = request.user,
        defaults  = {"token": secrets.token_hex(16)},
    )

    return Response({
        "token":    share.token,
        "rewarded": share.rewarded,
        "share_url": f"/events/{event.id}?ref={share.token}",
    })


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def redeem_share_token(request):
    """
    POST /api/points/share/redeem/
    Body: { token }
    Called when a new user registers or applies to an event via a share link.
    Awards +75 pts to the sharer (once per link).
    Cannot redeem your own token.
    """
    from django.utils import timezone

    token = request.data.get("token", "").strip()
    if not token:
        return Response({"error": "Token is required."}, status=status.HTTP_400_BAD_REQUEST)

    try:
        share = EventShare.objects.select_related("shared_by", "event").get(token=token)
    except EventShare.DoesNotExist:
        return Response({"error": "Invalid share token."}, status=status.HTTP_404_NOT_FOUND)

    # Can't redeem your own share
    if share.shared_by == request.user:
        return Response({"error": "You cannot redeem your own share link."}, status=status.HTTP_400_BAD_REQUEST)

    # Already rewarded
    if share.rewarded:
        return Response({"message": "This share link has already been rewarded.", "already_rewarded": True})

    # Award points to sharer
    award_points(
        user   = share.shared_by,
        points = 75,
        reason = "event_share",
        note   = f"Someone joined via your share link for: {share.event.title}",
        event  = share.event,
    )
    share.rewarded    = True
    share.rewarded_at = timezone.now()
    share.save()

    return Response({
        "message": f"Share rewarded! {share.shared_by.full_name} earned 75 points.",
        "event":   share.event.title,
    })


# ── Admin endpoints ────────────────────────────────────────────────

@api_view(["GET"])
@permission_classes([IsAdmin])
def admin_user_points(request, user_id):
    """GET /api/points/admin/users/<user_id>/"""
    try:
        user = User.objects.get(id=user_id)
    except User.DoesNotExist:
        return Response({"error": "User not found."}, status=status.HTTP_404_NOT_FOUND)

    summary      = get_points_summary(user)
    transactions = PointTransaction.objects.filter(user=user)
    serializer   = PointTransactionSerializer(transactions, many=True)
    return Response({
        "user":      f"{user.full_name} ({user.email})",
        "total":     summary["total"],
        "breakdown": summary["breakdown"],
        "history":   serializer.data,
    })


@api_view(["POST"])
@permission_classes([IsAdmin])
def admin_award_points(request):
    """POST /api/points/admin/award/ — admin awards or deducts points."""
    serializer = AwardPointsSerializer(data=request.data)
    if not serializer.is_valid():
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    try:
        user = User.objects.get(id=serializer.validated_data["user_id"])
    except User.DoesNotExist:
        return Response({"error": "User not found."}, status=status.HTTP_404_NOT_FOUND)

    transaction = award_points(
        user   = user,
        points = serializer.validated_data["points"],
        reason = serializer.validated_data["reason"],
        note   = serializer.validated_data.get("note", ""),
    )
    action = "awarded" if transaction.points >= 0 else "deducted"
    return Response({
        "message":     f"{abs(transaction.points)} points {action} for {user.full_name}.",
        "transaction": PointTransactionSerializer(transaction).data,
        "new_total":   get_points_summary(user)["total"],
    }, status=status.HTTP_201_CREATED)


@api_view(["GET"])
@permission_classes([IsAdmin])
def admin_all_transactions(request):
    """
    GET /api/points/admin/transactions/
    All transactions across all users — filterable by user or reason.
    Query params: ?user_id=<id> &reason=<reason>
    """
    qs = PointTransaction.objects.select_related("user", "event").order_by("-created_at")

    user_id = request.query_params.get("user_id")
    reason  = request.query_params.get("reason")
    if user_id:
        qs = qs.filter(user_id=user_id)
    if reason:
        qs = qs.filter(reason=reason)

    data = []
    for t in qs[:200]:   # cap at 200 for performance
        data.append({
            "id":          t.id,
            "user_id":     t.user_id,
            "user_name":   t.user.full_name,
            "user_email":  t.user.email,
            "points":      t.points,
            "reason":      t.reason,
            "reason_label": dict(PointTransaction.REASON_CHOICES).get(t.reason, t.reason),
            "note":        t.note,
            "event_title": t.event.title if t.event else None,
            "created_at":  t.created_at,
        })
    return Response({"count": qs.count(), "results": data})


@api_view(["GET"])
@permission_classes([IsAdmin])
def admin_points_leaderboard(request):
    """GET /api/points/admin/leaderboard/ — kept for admin dashboard compatibility."""
    limit   = min(int(request.query_params.get("limit", 10)), 100)
    results = build_leaderboard(limit=limit)
    return Response({"leaderboard": results})