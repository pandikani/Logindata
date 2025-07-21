# accounts/views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import LoginDataSerializer

@api_view(['POST'])
def login_view(request):
    serializer = LoginDataSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Login data saved!"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

