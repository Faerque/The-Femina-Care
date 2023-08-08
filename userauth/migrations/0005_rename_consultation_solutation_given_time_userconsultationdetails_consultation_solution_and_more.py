# Generated by Django 4.2.4 on 2023-08-08 06:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userauth', '0004_alter_userconsultationdetails_consultation_created_time_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='userconsultationdetails',
            old_name='consultation_solutation_given_time',
            new_name='consultation_solution',
        ),
        migrations.RenameField(
            model_name='userconsultationdetails',
            old_name='consultation_solutation_given_by',
            new_name='consultation_solution_given_by',
        ),
        migrations.AddField(
            model_name='userconsultationdetails',
            name='consultation_solution_given_time',
            field=models.CharField(blank=True, max_length=2000, null=True),
        ),
    ]
