from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Consultation, ConsultationHistory
from .serializers import ConsultationSerializer, ConsultationHistorySerializer

# Create your views here.

# views for creating consultation


class ConsultationView(APIView):
    def post(self, request):
        serializer = ConsultationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Consultation Created'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# view to get all the consultations


class allConsultationView(APIView):
    def get(self, request):
        consultation = Consultation.objects.all()
        serializer = ConsultationSerializer(consultation, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

# view for
