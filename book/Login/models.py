from django.db import models
from django.contrib.auth import get_user_model
from django.db.models.signals import post_save
from django.dispatch import receiver



user_model = get_user_model()

class Contact(models.Model):
    user = models.ForeignKey(user_model, on_delete =models.CASCADE)
    contact_name = models.CharField(max_length=50)
    country_code = models.CharField(max_length = 10)
    contact_number = models.CharField(max_length=10)
    
    class Meta:
        unique_together = ('user', 'contact_number')
   
class DeletedContacts(models.Model):
    id = models.AutoField(primary_key = True )
    user = models.ForeignKey(user_model, on_delete =models.CASCADE)
    contact_name = models.CharField(max_length=50, unique = True)
    contact_number = models.CharField(max_length=10,unique = True)
    country_code = models.CharField(max_length = 10)
    
class Fav_contacts(models.Model):
    id = models.AutoField(primary_key = True )
    user = models.ForeignKey(user_model, on_delete =models.CASCADE)
    fav_Contacts = models.ForeignKey(Contact, on_delete =models.CASCADE)
    
class Feature_Flag(models.Model):
    id = models.AutoField(primary_key = True )
    user = models.OneToOneField(user_model, on_delete =models.CASCADE, unique =True)
    Number_Feature_Flag = models.BooleanField(default=True)
    
    
    
@receiver(post_save, sender=user_model)
def create_feature_flag(sender, instance, created, **kwargs):
    if created:
        Feature_Flag.objects.create(user=instance)

post_save.connect(create_feature_flag, sender=user_model)