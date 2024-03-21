# Generated by Django 5.0.3 on 2024-03-21 14:08

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Login', '0006_deletedcontacts'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='contact',
            name='Number_Feature_Flag',
            field=models.BooleanField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='contact',
            name='country_code',
            field=models.IntegerField(default=21, max_length=3),
            preserve_default=False,
        ),
        migrations.CreateModel(
            name='Favourates',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fav_Contacts', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Login.contact')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]