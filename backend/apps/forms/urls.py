from django.urls import path
from . import views
urlpatterns = [
    path('submit/', views.VisitorFormCreateView.as_view()),
]
