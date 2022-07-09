from django.urls import path, include
from .views import (
    CompanyApiView,
)

urlpatterns = [
    path('', CompanyApiView.as_view()),
]
