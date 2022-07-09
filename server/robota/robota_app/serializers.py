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
        
