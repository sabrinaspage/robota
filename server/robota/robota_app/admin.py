from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(User)
admin.site.register(Company)
admin.site.register(CompanyJob)
admin.site.register(JobSkill)
admin.site.register(JobUser)
admin.site.register(UserSkill)

