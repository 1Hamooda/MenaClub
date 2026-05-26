from django.urls import path
from . import views

urlpatterns = [
    # ── Any authenticated user ─────────────────────────
    path("",                           views.my_points,              name="points-my"),
    path("leaderboard/",               views.leaderboard,            name="points-leaderboard"),
    path("my-rank/",                   views.my_rank,                name="points-my-rank"),

    # ── Share tokens ───────────────────────────────────
    path("share/generate/",            views.generate_share_token,   name="points-share-generate"),
    path("share/redeem/",              views.redeem_share_token,     name="points-share-redeem"),

    # ── Admin ──────────────────────────────────────────
    path("admin/award/",               views.admin_award_points,     name="points-admin-award"),
    path("admin/transactions/",        views.admin_all_transactions, name="points-admin-transactions"),
    path("admin/leaderboard/",         views.admin_points_leaderboard, name="points-admin-leaderboard"),
    path("admin/users/<int:user_id>/", views.admin_user_points,      name="points-admin-user"),
]