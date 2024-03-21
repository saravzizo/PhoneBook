from django.db import models
from django.contrib.auth import get_user_model


user_model = get_user_model()

class Contact(models.Model):
    user = models.ForeignKey(user_model, on_delete =models.CASCADE)
    contact_name = models.CharField(max_length=50, unique = True)
    contact_number = models.CharField(max_length=10,unique = True)
    
    
class DeletedContacts(models.Model):
    user = models.ForeignKey(user_model, on_delete =models.CASCADE)
    contact_name = models.CharField(max_length=50, unique = True)
    contact_number = models.CharField(max_length=10,unique = True)