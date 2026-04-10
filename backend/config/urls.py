from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/users/', include('apps.users.urls')),
    path('api/cv/', include('apps.cv.urls')),
    path('api/jobs/', include('apps.ai_jobs.urls')),
    path('api/analytics/', include('apps.analytics.urls')),
    path('api/events/', include('apps.events.urls')),
    path('api/attendance/', include('apps.attendance.urls')),
    path('api/notifications/', include('apps.notifications.urls')),
    path('api/announcements/', include('apps.announcements.urls')),
    path('api/certificates/', include('apps.certificates.urls')),
    path('api/points/', include('apps.points.urls')),
    path('api/forms/', include('apps.forms.urls')),
]
