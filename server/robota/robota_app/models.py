from django.db import models

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



