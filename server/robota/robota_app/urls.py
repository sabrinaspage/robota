from django.urls import path, include
from .views import (
    CompanyApiView,
    UserApiView
)

urlpatterns = [
    path('', CompanyApiView.as_view()),
    path('user/login/', LoginApiView.as_view()),
    path('user/signup/', SignUpApiView.as_view()),
    path('user/', UserApiView.as_view()),
]
