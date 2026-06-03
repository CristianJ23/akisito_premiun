from django.contrib import admin
from .models import Affiliation, Business

@admin.register(Affiliation)
class AffiliationAdmin(admin.ModelAdmin):
    list_display = ('establishment_name', 'owner_name', 'establishment_type', 'created_at')
    search_fields = ('establishment_name', 'owner_name', 'email')
    list_filter = ('establishment_type', 'created_at')

@admin.register(Business)
class BusinessAdmin(admin.ModelAdmin):
    list_display = ('name', 'address', 'phone', 'is_active', 'created_at')
    search_fields = ('name', 'address')
    list_filter = ('is_active', 'created_at')
    list_editable = ('is_active',)
