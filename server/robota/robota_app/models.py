from django.db import models
from storages.backends.gcloud import GoogleCloudStorage
from dotenv import load_dotenv
import os
from pathlib import Path

load_dotenv()
env_path = Path('.')/'.env'
load_dotenv(dotenv_path=env_path)
storage = GoogleCloudStorage()

#User model
class User(models.Model):
    fname = models.TextField(blank=True, null=True)
    lname = models.TextField(blank=True, null=True)
    cv = models.TextField(blank=True, null=True)
    email = models.EmailField()
    gender = models.TextField(blank=True, null=True)
    password = models.TextField(blank=True, null=True)

    def __str__(self):
        return '{} - {}'.format(self.fname, self.lname)

class Company(models.Model):
    email = models.EmailField()
    description = models.TextField(blank=True, null=True)
    name = models.TextField(blank=True, null=True)
    password = models.TextField(blank=True, null=True)
    
    def __str__(self):
        return self.name


class CompanyJob(models.Model):
    company = models.ForeignKey(
    'Company',
    on_delete=models.CASCADE,
    )
    description = models.TextField(blank=True, null=True)
    name = models.TextField(blank=True, null=True)
    location = models.TextField(blank=True, null=True)

    def __str__(self):
        return '{} - {}'.format(self.company, self.name)


class JobSkill(models.Model):
    companyJob = models.ForeignKey(
    'CompanyJob',
    on_delete=models.CASCADE,
    )
    name = models.TextField(blank=True, null=True)
    
    def __str__(self):
        return '{} - {}'.format(self.companyJob, self.name)

# job user
class JobUser(models.Model):
    companyJob = models.ForeignKey(
    'CompanyJob',
    on_delete=models.CASCADE,
    )
    user = models.ForeignKey(
    'User',
    on_delete=models.CASCADE,
    )
    status = models.PositiveIntegerField()

    def __str__(self):
        return '{} - {}'.format(self.companyJob, self.user)

# Skills related to the user
class UserSkill(models.Model):
    user = models.ForeignKey(
    'User',
    on_delete=models.CASCADE,
    )
    name = models.TextField(blank=True, null=True)
    
    def __str__(self):
        return '{} - {}'.format(self.user, self.name)

# class that allows us to save a file to google storage.
class Upload:
    @staticmethod
    def upload_file(file, filename):
        try:
            target_path = os.getenv('GS_PATH_NAME') + filename
            path = storage.save(target_path, file)
            return storage.url(path)
        except Exception as e:
            print("Failed to upload!")
