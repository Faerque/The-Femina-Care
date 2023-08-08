from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.utils import timezone

# Create your models here.


class UserAccountManager(BaseUserManager):
    def create_user(self, email, name, password=None):
        if not email:
            raise ValueError('User must have an email address')
        email = self.normalize_email(email)
        user = self.model(email=email, name=name)
        user.set_password(password)
        user.save()
        return user


class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=True)
    is_Admin = models.BooleanField(default=False)
    # last_login_by_User = models.TimeField(default=timezone.now)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def get_full_name(self):
        return self.name

    def get_short_name(self):
        return self.name

    def __str__(self):
        return self.email


class UserConsultationDetails(models.Model):
    userId = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    user_name = models.CharField(max_length=255, blank=True, null=True)
    consultation_name = models.CharField(max_length=255)
    consultation_created_time = models.DateTimeField(default=timezone.now)
    consultation_details = models.TextField(
        max_length=2000, blank=True, null=True)
    consultation_status = models.CharField(default='Pending', max_length=255)
    consultation_solution = models.TextField(max_length=2000,
                                             blank=True, null=True)
    consultation_solution_given_time = models.DateTimeField(
        default=timezone.now)
    consultation_solution_given_by = models.CharField(
        max_length=255, blank=True, null=True)

    def __str__(self):
        return self.consultation_name
