from rest_framework import serializers  
from django.contrib.auth import get_user_model
from .models import Contact


User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username','password']
        
        
class contactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['user','contact_name', 'contact_number']
        
        
class contactNumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['user','contact_name', 'contact_number']