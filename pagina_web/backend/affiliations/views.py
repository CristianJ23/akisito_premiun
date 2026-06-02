from rest_framework import viewsets
from .models import Affiliation
from .serializers import AffiliationSerializer

class AffiliationViewSet(viewsets.ModelViewSet):
    queryset = Affiliation.objects.all()
    serializer_class = AffiliationSerializer
