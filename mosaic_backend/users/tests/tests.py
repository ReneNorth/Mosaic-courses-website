import logging
import unittest
from ast import literal_eval

from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from django.test import Client, TestCase

from api.serializers import User
from masterclass.models import get_or_create_dummy_teacher
from mosaic.business_logic import DummyTeacher

log = logging.getLogger(__name__)

User = get_user_model()


class UserCreateApiTest(TestCase):
    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        cls.client = Client()

    @classmethod
    def tearDownClass(cls):
        super().tearDownClass()

    def create_default_user(self):
        response_create_user = self.client.post(
            '/api/v1/users/',
            {"email": "testmail11@mail.com",
             "phone": "+77778888922",
             "password": "testpass11",
             "first_name": "test1",
             "last_name": "test1",
             "general_agreement": "True",
             "markcomm_agreement": "False"},
            'application/json')
        return response_create_user

    def test_user_create_full_data(self):
        """Creates a user via API"""
        response_create_user = self.create_default_user()
        self.assertEqual(response_create_user.status_code, 201)
        self.assertEqual(User.objects.all().count(), 1)
        user = get_object_or_404(User, email='testmail11@mail.com')
        self.assertEqual(user.phone, '+77778888922')
        self.assertEqual(user.email, 'testmail11@mail.com')
        self.assertEqual(user.first_name, 'test1')
        self.assertEqual(user.last_name, 'test1')
        self.assertEqual(user.general_agreement, True)
        self.assertEqual(user.markcomm_agreement, False)

    def test_create_jwt_token(self):
        """Creates a JWT Token"""
        self.create_default_user()
        self.assertEqual(User.objects.all().count(), 1)
        user = get_object_or_404(User, email='testmail11@mail.com')
        self.assertEqual(user.email, 'testmail11@mail.com')
        user.is_active = True
        user.save(update_fields=['is_active'])
        response_get_jwt = self.client.post(
            '/api/auth/jwt/create/',
            {"email": "testmail11@mail.com",
             "password": "testpass11"},
            'application/json')
        self.assertEqual(response_get_jwt.status_code, 200)

    def test_refresh_jwt_token(self):
        """Tests JWT Token refresh endpoint"""
        self.create_default_user()
        self.assertEqual(User.objects.all().count(), 1)
        user = get_object_or_404(User, email='testmail11@mail.com')
        self.assertEqual(user.email, 'testmail11@mail.com')
        user.is_active = True
        user.save(update_fields=['is_active'])
        response_get_jwt = self.client.post(
            '/api/auth/jwt/create/',
            {"email": "testmail11@mail.com",
             "password": "testpass11"},
            'application/json')
        self.assertEqual(response_get_jwt.status_code, 200)
        tokens = literal_eval(bytes.decode(
            response_get_jwt.content))
        jwt_refresh = tokens.get('refresh')
        jwt_access = tokens.get('access')

        response_refresh_jwt = self.client.post(
            '/api/auth/jwt/refresh/',
            {"refresh": f"{jwt_refresh}"},
            'application/json')

        self.assertEqual(response_refresh_jwt.status_code, 200)
        new_jwt_access = literal_eval(bytes.decode(
            response_refresh_jwt.content)).get('access')
        self.assertNotEqual(jwt_access, new_jwt_access)


class TestGetOrCreateDummyTeacher(unittest.TestCase):

    # Returns a User instance with the specified attributes
    def test_returns_user_with_specified_attributes(self):
        # Arrange
        expected_first_name = DummyTeacher.first_name
        expected_last_name = DummyTeacher.last_name
        expected_is_staff = DummyTeacher.is_staff
        expected_general_agreement = DummyTeacher.general_agreement
        expected_role = DummyTeacher.role
        expected_email = DummyTeacher.email
        expected_phone = DummyTeacher.phone

        # Act
        user = get_or_create_dummy_teacher()

        # Assert
        self.assertEqual(user.first_name, expected_first_name)
        self.assertEqual(user.last_name, expected_last_name)
        self.assertEqual(user.is_staff, expected_is_staff)
        self.assertEqual(user.general_agreement, expected_general_agreement)
        self.assertEqual(user.role, expected_role)
        self.assertEqual(user.email, expected_email)
        self.assertEqual(user.phone, expected_phone)

    def test_returns_existing_user_if_already_exists(self):
        existing_user = User.objects.create(
            first_name=DummyTeacher.first_name,
            last_name=DummyTeacher.last_name,
            is_staff=DummyTeacher.is_staff,
            general_agreement=DummyTeacher.general_agreement,
            role=DummyTeacher.role,
            email=DummyTeacher.email,
            phone=DummyTeacher.phone
        )

        existing_user = get_object_or_404(User, email=DummyTeacher.email)
        user = get_or_create_dummy_teacher()
        self.assertEqual(user, existing_user)
