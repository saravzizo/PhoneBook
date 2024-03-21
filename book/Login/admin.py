from django.contrib import admin
from .models import Contact , DeletedContacts ,Fav_contacts,Feature_Flag

class Contact_admin(admin.ModelAdmin):
    list_display = ("user","contact_name","contact_number")
admin.site.register(Contact,Contact_admin)

class Deleted(admin.ModelAdmin):
    list_display =  ("user","contact_name","contact_number")
admin.site.register(DeletedContacts,Contact_admin)

class Fav_Contact(admin.ModelAdmin):
    list_display = ("user", "fav_Contacts")
admin.site.register(Fav_contacts, Fav_Contact)

class Features (admin.ModelAdmin):
    list_display = ("user","Number_Feature_Flag")
admin.site.register(Feature_Flag,Features)