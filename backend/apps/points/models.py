from django.db import models
from django.conf import settings


class PointTransaction(models.Model):
    REASON_CHOICES = [
        # ── Automatic ─────────────────────────────────────────────
        ("account_created",   "Account Created"),      # +50  on register
        ("event_attendance",  "Event Attendance"),      # +100 member check-in
        ("volunteer_checkin", "Volunteer Check-in"),    # +150 volunteer check-in
        ("event_share",       "Event Share"),           # +75  share link used
        # ── Manual / legacy ───────────────────────────────────────
        ("task_completed",    "Task Completed"),
        ("cv_uploaded",       "CV Uploaded"),
        ("referral",          "Referral"),
        ("bonus",             "Bonus"),
        ("deduction",         "Deduction"),
    ]

    user       = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="point_transactions")
    points     = models.IntegerField()
    reason     = models.CharField(max_length=30, choices=REASON_CHOICES)
    note       = models.CharField(max_length=255, blank=True)
    event      = models.ForeignKey("events.Event", on_delete=models.SET_NULL, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        app_label = "points"
        db_table  = "point_transactions"
        ordering  = ["-created_at"]

    def __str__(self):
        return f"{self.user} {'+' if self.points >= 0 else ''}{self.points} ({self.reason})"


class EventShare(models.Model):
    """
    Unique share token per user per event.
    Sharer earns +75 pts when someone registers or attends via their link.
    Rewarded only once per share link.
    """
    token       = models.CharField(max_length=32, unique=True)
    event       = models.ForeignKey("events.Event", on_delete=models.CASCADE, related_name="shares")
    shared_by   = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="event_shares")
    created_at  = models.DateTimeField(auto_now_add=True)
    rewarded    = models.BooleanField(default=False)
    rewarded_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        app_label       = "points"
        db_table        = "event_shares"
        unique_together = ("event", "shared_by")

    def __str__(self):
        return f"{self.shared_by} → {self.event} ({'rewarded' if self.rewarded else 'pending'})"