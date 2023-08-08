import os
from io import BytesIO
from django.http import HttpResponse
from django.template.loader import get_template
from django.db import models, connection
# from xhtml2pdf import pisa
from datetime import datetime
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import render
from rest_framework import generics, permissions
from .serializers import UserConsultationDetailsSerializer, AllUsers
from .models import UserAccount, UserConsultationDetails

# Create your views here.


class CreateConsultation(APIView):
    def post(self, request, format=None):
        serializer = UserConsultationDetailsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GetConsultation(APIView):
    def get(self, request, format=None):
        consultation = UserConsultationDetails.objects.all()
        serializer = UserConsultationDetailsSerializer(consultation, many=True)
        return Response(serializer.data)

# update consultation details


class UpdateConsultation(APIView):
    def put(self, request, format=None):
        consultation_id = request.data.get('id')

        try:
            consultation = UserConsultationDetails.objects.get(
                id=consultation_id)
        except UserConsultationDetails.DoesNotExist:
            return Response({'error': 'Consultation not found'}, status=status.HTTP_404_NOT_FOUND)

        data_to_update = {
            'consultation_status': request.data.get('consultation_status', consultation.consultation_status),
            'consultation_solution_given_by': request.data.get('consultation_solution_given_by', consultation.consultation_solution_given_by),
            'consultation_solution_given_time': datetime.now(),
            'consultation_solution': request.data.get('consultation_solution', consultation.consultation_solution),
        }

        serializer = UserConsultationDetailsSerializer(
            consultation, data=data_to_update, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Sending All Users data
class AllUsersView(APIView):
    def get(self, request, format=None):
        all_users = UserAccount.objects.all()
        serializer = AllUsers(all_users, many=True)
        return Response(serializer.data)
