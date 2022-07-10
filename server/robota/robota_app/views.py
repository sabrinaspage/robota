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
        POST example
        {
            "email": "excompany@google.com",
            "description": "Tech",
            "name": "Google"
        }
        '''
        # check if company exists through email
        email = request.data.get('email')
        if not Company.objects.filter(email = email).exists():
            data = {
                'email': email, 
                'description': request.data.get('description'), 
                'name': request.data.get('name')
            }
            serializer = CompanySerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            # invalid serializer
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response({'error' : 'Company already exists'}, status=status.HTTP_400_BAD_REQUEST)

class CompanyJobApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.IsAuthenticated]

    # 1. List all
    def get(self, request, *args, **kwargs):
        '''
        List all the Job skills
        '''
        companyJobs = CompanyJob.objects.all().values_list()
        return Response(companyJobs, status=status.HTTP_200_OK)

    # 2. Create
    def post(self, request, *args, **kwargs):
        '''
        Create a Company Job
        POST example
        {
            "email": "excompany@google.com",
            "description" : "Responsible for maintaining the website.",
            "name": "Software Engineer"
        }
        '''
        # check if company exists
        email = request.data.get('email')
        company = Company.objects.filter(email = email)
        if company.exists():
            data = {
                "company": company[0].id,
                "description": request.data.get('description'),
                "name": request.data.get('name')
            }
            serializer = CompanyJobSerializer(data=data)
            # duplicate job allowed here
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
                # invalid serializer
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response({'error' : 'Company does not exist'}, status=status.HTTP_400_BAD_REQUEST)


class JobSkillApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.IsAuthenticated]

    # 1. List all
    def get(self, request, *args, **kwargs):
        '''
        List all the Job skills
        '''
        jobskills = JobSkill.objects.all().values_list()
        return Response(jobskills, status=status.HTTP_200_OK)

    # 2. Create
    def post(self, request, *args, **kwargs):
        '''
        Create a Job skill
        POST example
        {
            "email": "excompany@google.com",
            "jobDescription" : "Responsible for maintaining the website.",
            "jobName" : "Software Engineer",
            "name": "Python"
        }
        '''
        # check if company exists
        email = request.data.get('email')
        company = Company.objects.filter(email = email)
        if company.exists():
            jobDescription = request.data.get('jobDescription')
            jobName = request.data.get('jobName')
            # check if job exists
            companyJob = CompanyJob.objects.filter(company = company[0], description = jobDescription, name = jobName)
            if companyJob.exists():
                data = {
                    "companyJob": companyJob[0].id,
                    "name": request.data.get('name')
                }
                serializer = JobSkillSerializer(data=data)
                if serializer.is_valid():
                    # check duplicate 
                    if not JobSkill.objects.filter(companyJob = companyJob[0].id, name = request.data.get('name')).exists():
                        serializer.save()
                        return Response(serializer.data, status=status.HTTP_201_CREATED)
                    return Response({'error' : 'Job skill already exists'}, status=status.HTTP_400_BAD_REQUEST)
                # invalid serializer
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            return Response({'error' : 'Company job does not exists'}, status=status.HTTP_400_BAD_REQUEST)
        return Response({'error' : 'Company does not exist'}, status=status.HTTP_400_BAD_REQUEST)