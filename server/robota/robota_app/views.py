from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import *
from .serializers import *

class CompanyApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.IsAuthenticated]

    # 1. List all
    def get(self, request, *args, **kwargs):
        '''
        List all the companies
        '''
        companies = Company.objects.all().values_list()
        return Response(companies, status=status.HTTP_200_OK)

    # 2. Create
    def post(self, request, *args, **kwargs):
        '''
        Create a Company
        '''
        data = {
            'email': request.data.get('email'), 
            'description': request.data.get('description'), 
            'name': request.data.get('name')
        }
        serializer = CompanySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# GENERAL USER API
class UserApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.IsAuthenticated]

    # 1. List all
    def get(self, request, *args, **kwargs):
        '''
        List all the users
        '''
        users = User.objects.all().values_list()
        return Response(users, status=status.HTTP_200_OK)

#USER SIGNUP API
class SignUpApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, *args, **kwargs):
        # check if the user exists
        check_user_email = User.objects.filter(email=request.data.get('email'))
        if check_user_email:
            return Response({"error": "Email already exists"}, status=status.HTTP_400_BAD_REQUEST)

        ''' Create a User '''
        data = {
            'email': request.data.get('email'), 
            'fname': request.data.get('fname'), 
            'lname': request.data.get('lname'),
            'password': request.data.get('password'),
            'gender': request.data.get('gender'),
            'cv': request.data.get('cv'),
        }

        serializer = UserSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#USER LOGIN API
class LoginApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, *args, **kwargs):
        # check if the user exists
        check_user_email = User.objects.filter(email=request.data.get('email'))
        if check_user_email:
            user = check_user_email.values()[0]
            # check for password
            if user["password"] == request.data.get('password'):
                return Response(user, status=status.HTTP_201_CREATED)

        return Response({"error": "Invalid email or password"}, status=status.HTTP_400_BAD_REQUEST)

class JobApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.IsAuthenticated]
    pass

