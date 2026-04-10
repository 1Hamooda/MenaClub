from django.urls import path
from . import views

urlpatterns = [
    path('match/', views.match_jobs, name='match-jobs'),
    path('', views.get_jobs, name='get-jobs'),
]
