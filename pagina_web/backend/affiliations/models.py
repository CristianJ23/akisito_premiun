from django.db import models

class Affiliation(models.Model):
    ESTABLISHMENT_TYPES = [
        ('RESTAURANTE', 'Restaurante'),
        ('CAFETERIA', 'Cafetería'),
        ('BAR', 'Bar'),
        ('OTRO', 'Otro'),
    ]

    establishment_name = models.CharField(max_length=255)
    owner_name = models.CharField(max_length=255)
    establishment_type = models.CharField(max_length=20, choices=ESTABLISHMENT_TYPES)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    reason = models.TextField()
    terms_accepted = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.establishment_name

class Business(models.Model):
    BUSINESS_TYPES = [
        ('RESTAURANTE', 'Restaurante'),
        ('CAFETERIA', 'Cafetería'),
        ('BAR', 'Bar'),
        ('HUECA', 'Hueca Tradicional'),
        ('OTRO', 'Otro'),
    ]

    name = models.CharField(max_length=255)
    business_type = models.CharField(max_length=20, choices=BUSINESS_TYPES, default='RESTAURANTE')
    description = models.TextField()
    address = models.CharField(max_length=255)
    phone = models.CharField(max_length=20, blank=True)
    image_url = models.URLField(blank=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
