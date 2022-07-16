from hashlib import new
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from django.forms.models import model_to_dict
from .models import *
from .serializers import *
from rest_framework.parsers import MultiPartParser


class CompanyApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.AllowAny]

    # List all companies
    def get(self, request, *args, **kwargs):
        '''
        List all the companies
        '''
        companies = Company.objects.all().values()
        return Response(companies, status=status.HTTP_200_OK)

class CompanySignUpApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.AllowAny]

    # Create a company
    def post(self, request, *args, **kwargs):
        '''
        Create a Company
        POST example
        {
            "email": "excompany33@google.com",
            "description": "Tech",
            "name": "Google",
            "password": "dfafd"
        }
        '''
        # check if company exists through email
        email = request.data.get('email')
        if not Company.objects.filter(email = email).exists():
            data = {
                'email': email, 
                'description': request.data.get('description'), 
                'name': request.data.get('name'),
                'password': request.data.get('password')
            }
            serializer = CompanySerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            # invalid serializer
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response({'error' : 'Company already exists'}, status=status.HTTP_400_BAD_REQUEST)


class CompanyLoginApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        '''
        Log in a Company
        POST example
        {
            "email": "excompany33@google.com",
            "password": "dfafd"
        }
        '''
        # check if the company exists
        check_company_email = Company.objects.filter(email=request.data.get('email'))
        if check_company_email:
            company = check_company_email.values()[0]
            # check for password
            if company["password"] == request.data.get('password'):
                return Response(company, status=status.HTTP_201_CREATED)
        return Response({"error": "Invalid email or password"}, status=status.HTTP_400_BAD_REQUEST)


class CompanyJobApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.AllowAny]

    # Get jobs posted by company id 
    def post(self, request, *args, **kwargs):
        '''
        POST example
        {
            "company": 1
        }
        '''
        company = Company.objects.filter(id=request.data.get('company'))
        if company.exists():
            companyJobs = company[0].companyjob_set.all().values()
            res = []
            for companyJob in companyJobs:
                jobskills = []
                companyJobObj = CompanyJob.objects.get(id = companyJob['id'])
                for jobskill in companyJobObj.jobskill_set.all().values():
                    jobskills.append(jobskill['name'])
                companyJob['skills'] = ', '.join(jobskills)
                res.append(companyJob)
            return Response(res, status=status.HTTP_200_OK)
        return Response({'error': 'Company does not exist'}, status=status.HTTP_200_OK)

class AddCompanyJobApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.AllowAny]

    # Create a company job
    def post(self, request, *args, **kwargs):
        '''
        Create a Company Job
        POST example
        {
            "company": 1,
            "description" : "Responsible for maintaining the website.",
            "name": "Software Engineer",
            "location": Austin, Texas
        }
        '''
        # check if company exists
        data = {
            "company": request.data.get('company'),
            "description": request.data.get('description'),
            "name": request.data.get('name'),
            "location": request.data.get('location')
        }
        serializer = CompanyJobSerializer(data=data)
        # duplicate job allowed here
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        # invalid serializer
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class RemoveCompanyJobApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.AllowAny]

    # Remove a company job
    def post(self, request, *args, **kwargs):
        '''
        Remove a Company Job
        POST example
        {
            "companyJob_id" : 1
        }
        '''
        CompanyJob.objects.filter(id=request.data.get('companyJob_id')).delete()
        return Response({"result": "Company removed a job"}, status=status.HTTP_201_CREATED)


class CompanyJobUserApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.AllowAny]

    # List all the users that users applied to companyJob under company
    def post(self, request, *args, **kwargs):
        '''
        POST example
        {
            "companyJob_id" : 1
        }
        '''
        companyJob = CompanyJob.objects.get(id = request.data.get('companyJob_id'))
        jobUsers = companyJob.jobuser_set.all().values()
        jobUserInfos = []
        for jobUser in jobUsers:
            jobUserInfo = User.objects.filter(id = jobUser['user_id']).values()[0]
            # add status to job user information
            jobUserInfo['status'] = jobUser['status']
            jobUserInfos.append(jobUserInfo)
        return Response(jobUserInfos, status=status.HTTP_200_OK)


class CompanyJobStatusUpdateApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.AllowAny]

    # List all the users that users applied to companyJob under company
    def post(self, request, *args, **kwargs):
        '''
        POST example
        {
            "jobuser": 1,
            "status": 1
        }
        '''
        try:
            jobUser = JobUser.objects.get(id = request.data.get('jobuser'))
            jobUser.status = request.data.get('status')
            jobUser.save(update_fields=["status"])
            return Response(JobUserSerializer(jobUser).data, status=status.HTTP_200_OK) 
        except:
            return Response({"error": "Job user does not exist"}, status=status.HTTP_400_BAD_REQUEST)


# GENERAL USER API
class UserApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.AllowAny]

    # 1. List all
    def get(self, request, *args, **kwargs):
        '''
        List all the users
        '''
        users = User.objects.all().values()
        return Response(users, status=status.HTTP_200_OK)

# USER UPLOAD CV
class UploadView(APIView):
    parser_classes = (MultiPartParser,)

    def post(self, request, *args, **kwargs):
            file = request.FILES['file']
            public_uri = Upload.upload_file(file, file.name)
            return Response({"public_uri": "{}".format(public_uri)}, status=status.HTTP_201_CREATED)

# USER SIGNUP API
class SignUpApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.AllowAny]

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

# USER LOGIN API
class LoginApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        # check if the user exists
        check_user_email = User.objects.filter(email=request.data.get('email'))
        if check_user_email:
            user = check_user_email.values()[0]
            # check for password
            if user["password"] == request.data.get('password'):
                return Response(user, status=status.HTTP_201_CREATED)

        return Response({"error": "Invalid email or password"}, status=status.HTTP_400_BAD_REQUEST)

# JOB APPLY
class ApplyJobApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.AllowAny]
    def post(self, request, *args, **kwargs):
        check_apply = JobUser.objects.filter(companyJob=request.data.get('companyJob'), user=request.data.get('user'))

        # if not applied
        if not check_apply:
            data = {
                'companyJob': request.data.get('companyJob'), 
                'user': request.data.get('user'),
                'status': 0
            }

            serializer = JobUserSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response({"result": "User already applied"}, status=status.HTTP_201_CREATED)

# JOB UNAPPLY
class UnapplyJobApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.AllowAny]
    def post(self, request, *args, **kwargs):
        JobUser.objects.filter(companyJob=request.data.get('companyJob'), user=request.data.get('user')).delete()
        return Response({"result": "User unapplied"}, status=status.HTTP_201_CREATED)

# ADD SKILL
class AddSkillApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.AllowAny]
    def post(self, request, *args, **kwargs):
        data = {
            'user': request.data.get('user'),
            'name': request.data.get('name'), 
        }

        serializer = UserSkillSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({"result": "User added skill"}, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# REMOVE SKILL
class RemoveSkillApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.AllowAny]
    def post(self, request, *args, **kwargs):
        UserSkill.objects.filter(id=request.data.get('skill_id')).delete()
        return Response({"result": "User removed skill"}, status=status.HTTP_201_CREATED)

# ADD SKILL LIST TO USER
class AddUserSkillListApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.AllowAny]

    # Create list of JOB skills
    def post(self, request, *args, **kwargs):
        '''
        POST example
        {
            "user": 1,
            "skill_list": ["java", "python", "C++"]
        }
        '''
        # delete all existing job skills
        UserSkill.objects.filter(user = request.data.get('user')).delete()

        skill_list = request.data.get('skill_list')

        for skill_name in skill_list:
            data = {
                "user": request.data.get('user'),
                "name": skill_name
            }
            serializer = UserSkillSerializer(data=data)
            if serializer.is_valid():
                # check duplicate 
                if not UserSkill.objects.filter(user = request.data.get('user'), name = skill_name).exists():
                    serializer.save()
                else:
                    return Response({"error": "{0} already added".format(skill_name)}, status=status.HTTP_400_BAD_REQUEST)
            else:
                # invalid serializer
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response({"result": "Skills are added successfully"}, status=status.HTTP_201_CREATED)        

# GET USER SKILL LIST
class UserSkillApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.AllowAny]
    def post(self, request, *args, **kwargs):
        user_skill_list = UserSkill.objects.filter(user=request.data.get('user')).values()
        return Response(user_skill_list, status=status.HTTP_201_CREATED)

class JobSkillApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.AllowAny]

    # List all Job skills for a CompanyJob
    def post(self, request, *args, **kwargs):
        '''
        POST example
        {
            "companyJob" : 1
        }
        '''
        companyJob = CompanyJob.objects.get(id = request.data.get('companyJob'))
        jobSkills = companyJob.jobskill_set.all().values()
        return Response(jobSkills, status=status.HTTP_200_OK)

# ADD AVAILABLE COMPANY JOB SKILL 
class AddJobSkillApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.AllowAny]

    # Create a Job skill
    def post(self, request, *args, **kwargs):
        '''
        Create a Job skill
        POST example
        {
            "companyJob": 1,
            "name": "Python"
        }
        '''
        data = {
            "companyJob": request.data.get('companyJob'),
            "name": request.data.get('name')
        }
        serializer = JobSkillSerializer(data=data)
        if serializer.is_valid():
            # check duplicate 
            if not JobSkill.objects.filter(companyJob = request.data.get('companyJob'), name = request.data.get('name')).exists():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response({'error' : 'Job skill already exists'}, status=status.HTTP_400_BAD_REQUEST)
        # invalid serializer
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RemoveJobSkillApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.AllowAny]

    # Remove a company job
    def post(self, request, *args, **kwargs):
        '''
        Remove a Company Job
        POST example
        {
            "jobSkill_id" : 1
        }
        '''
        JobSkill.objects.filter(id=request.data.get('jobSkill_id')).delete()
        return Response({"result": "A skill has been removed from job"}, status=status.HTTP_201_CREATED)

# ADD SKILL LIST TO JOB
class AddJobSkillListApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.AllowAny]

    # Create list of JOB skills
    def post(self, request, *args, **kwargs):
        '''
        Create a Job skill
        POST example
        {
            "companyJob": 1,
            "skill_list": ["java", "python", "C++"]
        }
        '''
        # delete all existing job skills
        JobSkill.objects.filter(companyJob = request.data.get('companyJob')).delete()

        skill_list = request.data.get('skill_list')

        for skill_name in skill_list:
            data = {
                "companyJob": request.data.get('companyJob'),
                "name": skill_name
            }
            serializer = JobSkillSerializer(data=data)
            if serializer.is_valid():
                # check duplicate 
                if not JobSkill.objects.filter(companyJob = request.data.get('companyJob'), name = skill_name).exists():
                    serializer.save()
                else:
                    return Response({"error": "{0} already added".format(skill_name)}, status=status.HTTP_400_BAD_REQUEST)
            else:
                # invalid serializer
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response({"result": "Skills are added successfully"}, status=status.HTTP_201_CREATED)        

# GET USER JOBS LIST
class JobUserApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.AllowAny]
    def post(self, request, *args, **kwargs):
        user_job_list = JobUser.objects.filter(user=request.data.get('user')).values()
        return Response(user_job_list, status=status.HTTP_201_CREATED)

# MATCHING USER TO A JOB
class MatchingApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.AllowAny]
    def post(self, request, *args, **kwargs):
        job_skills = JobSkill.objects.all().values()
        job_group = {}
        for js in job_skills:
            if js["companyJob_id"] not in job_group:
                job_group[js["companyJob_id"]] = []
            job_group[js["companyJob_id"]].append(js["name"])
        

        user_skills = UserSkill.objects.filter(user=request.data.get('user')).values()
        user_skills_list = [f['name'] for f in user_skills]

        ranked_job = []
        for job_id in job_group: 
            matched = len(set(job_group[job_id]) & set(user_skills_list))
            ranked_job.append({"companyJob_id": job_id, "score": matched})
        newlist = sorted(ranked_job, key=lambda d: d['score'], reverse=True)

        # filter out score 0
        result = []
        for job in newlist:
            if job['score'] > 0:
                companyJobObj = CompanyJob.objects.get(id = job['companyJob_id'])
                companyJobDict = model_to_dict(companyJobObj) 
                jobskills = []
                for jobskill in companyJobObj.jobskill_set.all().values():
                    jobskills.append(jobskill['name'])
                companyJobDict['skills'] = ', '.join(jobskills)
                result.append(companyJobDict)
        return Response(result, status=status.HTTP_201_CREATED)