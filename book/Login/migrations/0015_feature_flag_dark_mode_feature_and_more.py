# Generated by Django 5.0.3 on 2024-04-02 05:54

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Login', '0014_alter_feature_flag_number_feature_flag'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='feature_flag',
            name='Dark_mode_feature',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='deletedcontacts',
            name='contact_name',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='deletedcontacts',
            name='contact_number',
            field=models.CharField(max_length=10),
        ),
        migrations.AlterUniqueTogether(
            name='deletedcontacts',
            unique_together={('user', 'contact_number')},
        ),
    ]