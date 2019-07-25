from django.shortcuts import render
from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer
from .serializers import LoginUserSerializer
from .serializers import RegisterUserSerializer
from django.contrib.auth.models import User
from knox.models import AuthToken
from rest_framework.permissions import AllowAny, IsAuthenticated
from knox.auth import TokenAuthentication
from knox.views import LoginView as KnoxLoginView
from rest_framework import serializers


# Create your views here.


class RegisterAPI(generics.GenericAPIView):
    """
    Creates the user.
    """

    serializer_class = RegisterUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


class LoginAPI(generics.GenericAPIView):
    """
    Login
    """

    serializer_class = LoginUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


'''
class LoginView(generics.GenericAPIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = LoginUserSerializer
    authentication_classes = []

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)
        })
'''


class UserAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
