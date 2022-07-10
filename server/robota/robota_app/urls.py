from django.urls import path, include
from .views import (
    CompanyApiView, JobSkillApiView
)

urlpatterns = [
    path('company', CompanyApiView.as_view()),
    path('company/jobskill', JobSkillApiView.as_view())
]
