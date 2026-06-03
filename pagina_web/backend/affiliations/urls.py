from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AffiliationViewSet, BusinessViewSet

router = DefaultRouter()
router.register(r'affiliations', AffiliationViewSet)
router.register(r'businesses', BusinessViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
