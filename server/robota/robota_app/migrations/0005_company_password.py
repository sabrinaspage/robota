# Generated by Django 4.0.2 on 2022-07-11 04:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('robota_app', '0004_userskill'),
    ]

    operations = [
        migrations.AddField(
            model_name='company',
            name='password',
            field=models.TextField(blank=True, null=True),
        ),
    ]
