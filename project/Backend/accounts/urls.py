from django.urls import path
from .views import register, protected_view
from rest_framework_simplejwt.views import TokenObtainPairView

urlpatterns = [
    path('register/', register),
    path('login/', TokenObtainPairView.as_view()),
    path('protected/', protected_view),
]
