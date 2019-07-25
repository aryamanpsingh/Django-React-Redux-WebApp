from rest_framework import routers, generics
from django.urls import include, path
from .views import RegisterAPI
from .views import LoginAPI
from .views import UserAPI
from users.serializers import UserSerializer
from users.serializers import LoginUserSerializer
from django.contrib.auth.models import User
from knox import views as knox_views

urlpatterns = [
    path('api/auth', include('knox.urls')),
    path('api/auth/register', RegisterAPI.as_view()),
    path('api/auth/login', LoginAPI.as_view()),
    path('api/auth/user', UserAPI.as_view()),
    path('api/auth/logout', knox_views.LogoutView.as_view(), name='knox-logout')
]
