from rest_framework import generics
from .models import VisitorForm
from .serializers import VisitorFormSerializer

class VisitorFormCreateView(generics.CreateAPIView):
    queryset = VisitorForm.objects.all()
    serializer_class = VisitorFormSerializer