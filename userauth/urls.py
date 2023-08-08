from django.urls import path
from . import views

urlpatterns = [
    path('api/v1/create-consultation/', views.CreateConsultation.as_view()),
    path('api/v1/get-consultation/', views.GetConsultation.as_view()),
    path('api/v1/update-consultation/', views.UpdateConsultation.as_view()),
    path('api/v1/all-user/', views.AllUsersView.as_view()),
]
