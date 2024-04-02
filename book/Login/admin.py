from django.contrib import admin
from .models import Contact , DeletedContacts ,Fav_contacts,Feature_Flag

class Contact_admin(admin.ModelAdmin):
    list_display = ("id","user","contact_name","contact_number","country_code" )
admin.site.register(Contact,Contact_admin)

class Deleted(admin.ModelAdmin):
    list_display =  ("id","user","contact_name","contact_number","country_code")
admin.site.register(DeletedContacts,Deleted)

class Fav_Contact(admin.ModelAdmin):
    list_display = ("id","user", "fav_Contacts")
admin.site.register(Fav_contacts, Fav_Contact)

class Features (admin.ModelAdmin):
    list_display = ("id","user","Number_Feature_Flag", "Dark_mode_feature")
admin.site.register(Feature_Flag,Features)