# Generated by Django 5.0.3 on 2024-03-21 14:28

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Login', '0011_alter_feature_flag_user'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Setting',
            new_name='Fav_contacts',
        ),
    ]