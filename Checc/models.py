from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Order(models.Model):
    username = models.CharField(max_length=15)
    message = models.CharField(max_length=100, default="--Empty--")
    quantity = models.CharField(max_length=10)
    owner = models.ForeignKey(
        User, related_name="order", on_delete=models.CASCADE, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)
