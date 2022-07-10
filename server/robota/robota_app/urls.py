from django.urls import path, include
from .views import (
    CompanyApiView, CompanyJobApiView, JobSkillApiView
)

urlpatterns = [
    path('company', CompanyApiView.as_view()),
    path('company/job', CompanyJobApiView.as_view()),
    path('company/jobskill', JobSkillApiView.as_view())
]
