# Generated by Django 4.0.6 on 2022-07-14 15:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('robota_app', '0005_company_password'),
    ]

    operations = [
        migrations.AddField(
            model_name='companyjob',
            name='location',
            field=models.TextField(blank=True, null=True),
        ),
    ]
