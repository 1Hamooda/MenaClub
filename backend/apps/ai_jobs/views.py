from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def match_jobs(request):
    return Response({'message': 'Job matching endpoint - coming soon'})

@api_view(['GET'])
def get_jobs(request):
    return Response({'message': 'Get jobs endpoint - coming soon'})
