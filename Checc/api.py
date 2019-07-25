from Checc.models import Order
from rest_framework import viewsets, permissions
from .serializers import OrderSerializer

# Lead Viewset


class OrderViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = OrderSerializer

    def get_queryset(self):
        return self.request.user.order.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
