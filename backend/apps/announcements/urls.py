from django.urls import path
from . import views
urlpatterns = [ path('', views.AnnouncementListView.as_view()),
                path('create/', views.AnnouncementCreateView.as_view()),
    path('<int:pk>/edit/', views.AnnouncementUpdateDeleteView.as_view()),]
