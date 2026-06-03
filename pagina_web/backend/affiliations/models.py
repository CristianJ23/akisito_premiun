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
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.establishment_name

class Business(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    address = models.CharField(max_length=255)
    phone = models.CharField(max_length=20, blank=True)
    image_url = models.URLField(blank=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
