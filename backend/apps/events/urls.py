from django.urls import path
from . import views
urlpatterns =  [
    path('', views.EventListView.as_view()),
    path('<int:pk>/', views.EventDetailView.as_view()),
    path('register/', views.EventRegistrationCreateView.as_view()),
    path('<int:event_id>/registrations/', views.EventRegistrationListView.as_view()),

]
