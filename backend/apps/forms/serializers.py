from rest_framework import serializers
from .models import VisitorForm

class VisitorFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = VisitorForm
        fields = '__all__'
        