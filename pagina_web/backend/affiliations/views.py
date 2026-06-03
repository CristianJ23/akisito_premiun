from rest_framework import viewsets
from .models import Affiliation, Business
from .serializers import AffiliationSerializer, BusinessSerializer

class AffiliationViewSet(viewsets.ModelViewSet):
    queryset = Affiliation.objects.all()
    serializer_class = AffiliationSerializer

class BusinessViewSet(viewsets.ModelViewSet):
    queryset = Business.objects.filter(is_active=True)
    serializer_class = BusinessSerializer
