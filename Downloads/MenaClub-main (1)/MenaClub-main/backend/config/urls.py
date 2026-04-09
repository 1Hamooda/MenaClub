from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/announcements/', include('apps.announcements.urls')),
    path('api/events/', include('apps.events.urls')),
    path('api/forms/', include('apps.forms.urls')),
    path('api/users/', include('apps.users.urls')),
]