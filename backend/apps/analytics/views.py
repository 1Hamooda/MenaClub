from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def get_analytics(request):
    return Response({'message': 'Analytics endpoint - coming soon'})
