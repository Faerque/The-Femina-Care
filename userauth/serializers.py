from djoser.serializers import UserCreateSerializer, UserSerializer
from rest_framework import serializers
from django.contrib.auth import get_user_model
from . models import UserAccount, UserConsultationDetails

User = get_user_model()


class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = '__all__'


class CustomUserSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = '__all__'


class UserConsultationDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserConsultationDetails
        fields = '__all__'


# All Users data
class AllUsers(serializers.ModelSerializer):
    class Meta:
        model = UserAccount
        exclude = ('password', 'last_login', 'is_superuser',
                   'is_staff', 'is_active', 'groups', 'user_permissions')
