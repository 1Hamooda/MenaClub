from rest_framework import generics
from .models import Announcement
from .serializers import AnnouncementSerializer

class AnnouncementListView(generics.ListAPIView):
    queryset = Announcement.objects.all().order_by('-created_at')
    serializer_class = AnnouncementSerializer