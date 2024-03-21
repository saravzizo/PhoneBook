from django.contrib import admin
from .models import Contact , DeletedContacts

class Contact_admin(admin.ModelAdmin):
    list_display = ("user","contact_name","contact_number")
admin.site.register(Contact,Contact_admin)

class Deleted(admin.ModelAdmin):
    list_display =  ("user","contact_name","contact_number")
admin.site.register(DeletedContacts,Contact_admin)