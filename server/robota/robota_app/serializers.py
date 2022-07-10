from rest_framework import serializers
from .models import *

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ["email", "description", "name"]
        
class CompanyJobSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyJob
        fields = ["company", "description", "name"]

class JobSkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobSkill
        fields = ["companyJob", "name"]


