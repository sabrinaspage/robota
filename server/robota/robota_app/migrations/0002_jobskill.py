# Generated by Django 4.0.6 on 2022-07-09 03:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('robota_app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='JobSkill',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField(blank=True, null=True)),
                ('companyJob', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='robota_app.companyjob')),
            ],
        ),
    ]