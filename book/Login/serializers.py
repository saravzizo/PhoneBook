from rest_framework import serializers  
from django.contrib.auth import get_user_model
from .models import Contact , Fav_contacts , DeletedContacts , Feature_Flag


User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username','password']
        
        
class contactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'
        
        
class contactNumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'
        
        
class FavSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fav_contacts
        fields = '__all__'
        
        
class DeletedSerializer(serializers.ModelSerializer):
    class Meta:
        model = DeletedContacts
        fields = '__all__'
        
        
        
             
class FeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feature_Flag
        fields = '__all__'
        
        
class FeaturePatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feature_Flag
        fields = ['id', 'Number_Feature_Flag']