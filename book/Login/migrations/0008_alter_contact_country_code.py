# Generated by Django 5.0.3 on 2024-03-22 05:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Login', '0007_alter_contact_country_code'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='country_code',
            field=models.IntegerField(null=True),
        ),
    ]