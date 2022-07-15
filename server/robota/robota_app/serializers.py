from rest_framework import serializers
from .models import *

class CompanySerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()

    class Meta:
        model = Company
        fields = ["id" ,"email", "description", "name", "password"]
        
class CompanyJobSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()

    class Meta:
        model = CompanyJob
        fields = ["id" ,"company", "description", "name", "location"]

class JobSkillSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()

    class Meta:
        model = JobSkill
        fields = ["id", "companyJob", "name"]

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id" , "email", "fname", "lname", "password", "gender", "cv"]
        
class JobUserSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()

    class Meta:
        model = JobUser
        fields = ["id" , "companyJob", "user", "status"]

class UserSkillSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()

    class Meta:
        model = UserSkill
        fields = ["id", "user", "name"]
        