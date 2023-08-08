from django.contrib import admin
from .models import Consultation, ConsultationHistory
# Register your models here.


# class SolutionInLine(admin.TabularInline):
#     model = ConsultationHistory
#     extra = 0


# class ConsultationAdmin(admin.ModelAdmin):
#     inlines = [SolutionInLine]


# admin.site.register(Consultation, ConsultationHistory)
# admin.site.register(ConsultationHistory)
