# Generated by Django 5.0.3 on 2024-03-22 08:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Login', '0013_alter_contact_unique_together'),
    ]

    operations = [
        migrations.AlterField(
            model_name='feature_flag',
            name='Number_Feature_Flag',
            field=models.BooleanField(default=True),
        ),
    ]
