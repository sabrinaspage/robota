from django.urls import path, include
from .views import (
    CompanyApiView,
    CompanySignUpApiView,
    CompanyLoginApiView,
    CompanyJobApiView, 
    CompanyJobUserApiView,
    CompanyJobStatusUpdateApiView,
    AddCompanyJobApiView,
    RemoveCompanyJobApiView,
    JobSkillApiView,
    AddJobSkillApiView,
    RemoveJobSkillApiView,
    UserApiView,
    LoginApiView,
    SignUpApiView,
    ApplyJobApiView,
    UnapplyJobApiView,
    AddSkillApiView,
    RemoveSkillApiView,
    UserSkillApiView,
    JobUserApiView,
    MatchingApiView,
    UploadView,
    AddJobSkillListApiView,
    AddUserSkillListApiView
)

urlpatterns = [
    path('user/login', LoginApiView.as_view()),
    path('user/signup', SignUpApiView.as_view()),
    path('user/', UserApiView.as_view()),
    path('user/match', MatchingApiView.as_view()),
    path('user/job', JobUserApiView.as_view()),
    path('user/job/apply', ApplyJobApiView.as_view()),
    path('user/job/unapply', UnapplyJobApiView.as_view()),
    path('user/skill', UserSkillApiView.as_view()), # single skill
    path('user/skill/list', AddUserSkillListApiView.as_view()), # list of skills
    path('user/skill/add', AddSkillApiView.as_view()),
    path('user/skill/remove', RemoveSkillApiView.as_view()),
    path('company', CompanyApiView.as_view()),
    path('company/signup', CompanySignUpApiView.as_view()),
    path('company/login', CompanyLoginApiView.as_view()),
    path('company/job', CompanyJobApiView.as_view()),
    path('company/job/user', CompanyJobUserApiView.as_view()),
    path('company/job/user/statusupdate', CompanyJobStatusUpdateApiView.as_view()),
    path('company/job/add', AddCompanyJobApiView.as_view()),
    path('company/job/remove', RemoveCompanyJobApiView.as_view()),
    path('company/job/skill', JobSkillApiView.as_view()), # single skill
    path('company/job/skill/list', AddJobSkillListApiView.as_view()), # list of skills
    path('company/job/skill/add', AddJobSkillApiView.as_view()),
    path('company/job/skill/remove', RemoveJobSkillApiView.as_view()),
    path('upload/', UploadView.as_view())
]
