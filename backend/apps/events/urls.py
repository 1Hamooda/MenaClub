from django.urls import path
from . import views
urlpatterns =  [
    path('', views.EventListView.as_view()),
    path('<int:pk>/', views.EventDetailView.as_view()),
    path('register/', views.EventRegistrationCreateView.as_view()),
    path('<int:event_id>/registrations/', views.EventRegistrationListView.as_view()),
     path('create/', views.EventCreateView.as_view()),
    path('<int:pk>/edit/', views.EventUpdateDeleteView.as_view()),
    path('registrations/<int:pk>/update/', views.EventRegistrationUpdateView.as_view()),
]
