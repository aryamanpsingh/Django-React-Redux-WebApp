from rest_framework import routers
from .api import OrderViewSet

router = routers.DefaultRouter()
router.register('api/orders', OrderViewSet, 'orders')

urlpatterns = router.urls