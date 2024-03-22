from django.db import models
from django.contrib.auth import get_user_model


user_model = get_user_model()

class Contact(models.Model):
    user = models.ForeignKey(user_model, on_delete =models.CASCADE)
    contact_name = models.CharField(max_length=50, unique = True)
    country_code = models.IntegerField()
    contact_number = models.CharField(max_length=10,unique = True)
   
class DeletedContacts(models.Model):
    user = models.ForeignKey(user_model, on_delete =models.CASCADE)
    contact_name = models.CharField(max_length=50, unique = True)
    contact_number = models.CharField(max_length=10,unique = True)
    
class Fav_contacts(models.Model):
    user = models.ForeignKey(user_model, on_delete =models.CASCADE)
    fav_Contacts = models.ForeignKey(Contact, on_delete =models.CASCADE)
    
class Feature_Flag(models.Model):
    user = models.OneToOneField(user_model, on_delete =models.CASCADE, unique =True)
    Number_Feature_Flag = models.BooleanField()