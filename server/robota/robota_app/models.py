from django.db import models

#User model
class User(models.Model):
    fname = models.TextField(blank=True, null=True)
    lname = models.TextField(blank=True, null=True)
    cv = models.TextField(blank=True, null=True)
    email = models.EmailField()
    gender = models.PositiveIntegerField()
    password = models.TextField(blank=True, null=True)

    def __str__(self):
        return '{} - {}'.format(self.fname, self.lname)

class Company(models.Model):
    email = models.EmailField()
    description = models.TextField(blank=True, null=True)
    name = models.TextField(blank=True, null=True)
    
    def __str__(self):
        return self.name


class CompanyJob(models.Model):
    company = models.ForeignKey(
    'Company',
    on_delete=models.CASCADE,
    )
    description = models.TextField(blank=True, null=True)
    name = models.TextField(blank=True, null=True)

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



