from rest_framework import serializers
from .models import *

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ["email", "description", "name"]
        

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["email", "fname", "lname", "password", "gender", "cv"]
        
class JobUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobUser
        fields = ["companyJob", "user", "status"]

class UserSkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserSkill
        fields = ["user", "name"]
        