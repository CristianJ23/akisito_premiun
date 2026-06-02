from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AffiliationViewSet

router = DefaultRouter()
router.register(r'affiliations', AffiliationViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
