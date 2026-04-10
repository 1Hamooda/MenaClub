from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def upload_cv(request):
    return Response({'message': 'CV upload endpoint - coming soon'})

@api_view(['GET'])
def get_cv(request):
    return Response({'message': 'Get CV endpoint - coming soon'})
