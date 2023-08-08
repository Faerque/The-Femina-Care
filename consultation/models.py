from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()
# Create your models here.

# Consultation Class


class Consultation(models.Model):
    consultation_name = models.CharField(max_length=100)
    consultation_taken_time = models.DateTimeField()
    user_problem = models.CharField(max_length=5000)
    current_solution = models.TextField(blank=True, null=True)
    current_solution_given_by = models.ForeignKey(
        User, on_delete=models.SET_NULL, null=True)
    current_solution_given_time = models.DateTimeField(blank=True, null=True)
    solution_given_time = models.DateTimeField(blank=True, null=True)

    def __str__(self):
        return self.consultation_name


class ConsultationHistory(models.Model):
    Consultation = models.ForeignKey(
        Consultation, related_name='ConsultationHistory', on_delete=models.CASCADE)
    solution_number = models.PositiveIntegerField()
    solution_text = models.TextField()
    given_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    given_time = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-given_time']

    def __str__(self):
        return f'Solution {self.solution_number} for {self.consultation.consultation_name}'
