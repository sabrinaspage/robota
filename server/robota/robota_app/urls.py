from django.urls import path, include
from .views import (
    CompanyApiView,
    UserApiView,
    LoginApiView,
    SignUpApiView,
    ApplyJobApiView,
    UnapplyJobApiView,
    AddSkillApiView,
    RemoveSkillApiView,
    UserSkillApiView,
    JobUserApiView
)

urlpatterns = [
    path('', CompanyApiView.as_view()),
    path('user/login', LoginApiView.as_view()),
    path('user/signup', SignUpApiView.as_view()),
    path('user/', UserApiView.as_view()),
    path('job/apply', ApplyJobApiView.as_view()),
    path('job/unapply', UnapplyJobApiView.as_view()),
    path('user/job', JobUserApiView.as_view()),
    path('user/skill', UserSkillApiView.as_view()),
    path('user/skill/add', AddSkillApiView.as_view()),
    path('user/skill/remove', RemoveSkillApiView.as_view()),
]
