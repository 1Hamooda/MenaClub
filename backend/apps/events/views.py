from rest_framework import generics
from .models import Event, EventRegistration
from .serializers import EventSerializer, EventRegistrationSerializer

class EventListView(generics.ListAPIView):
    queryset = Event.objects.all().order_by('-date')
    serializer_class = EventSerializer

class EventDetailView(generics.RetrieveAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class EventRegistrationCreateView(generics.CreateAPIView):
    queryset = EventRegistration.objects.all()
    serializer_class = EventRegistrationSerializer

class EventRegistrationListView(generics.ListAPIView):
    serializer_class = EventRegistrationSerializer

    def get_queryset(self):
        event_id = self.kwargs['event_id']
        return EventRegistration.objects.filter(event_id=event_id)