import logging

from django.core import mail
from rest_framework import status
from rest_framework.test import APITestCase

log = logging.getLogger(__name__)


class EmailVerificationTest(APITestCase):

    # endpoints needed
    register_url = "/api/v1/users/"
    activate_url = "/api/v1/users/activation/"
    login_url = "/api/v1/token/login/"
    user_details_url = "/api/v1/users/"
    # user infofmation

    user_data = {"email": "testmail11@mai.com",
                 "phone": "+77778888922",
                 "password": "asd@111mai11.com",
                 "first_name": "test1",
                 "last_name": "test1",
                 "general_agreement": "True",
                 "markcomm_agreement": "False"}
    login_data = {
        "email": "test@example.com",
        "password": "verysecret"
    }

    def test_register_with_email_verification(self):
        response = self.client.post(
            self.register_url, self.user_data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(len(mail.outbox), 1)

        email_lines = mail.outbox[0].body.splitlines()
        activation_link = [
            link for link in email_lines if "/activate/" in link][0]
        uid, token = activation_link.split("/")[-2:]

        # verify email
        data = {"uid": uid, "token": token}
        response = self.client.post(self.activate_url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

    def test_register_resend_verification(self):
        # register the new user
        response = self.client.post(
            self.register_url, self.user_data, format="json")
        # expected response
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        # expected one email to be send
        self.assertEqual(len(mail.outbox), 1)

    def test_resend_verification_wrong_email(self):
        # register the new user
        response = self.client.post(
            self.register_url, self.user_data, format="json")
        # expected response
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_activate_with_wrong_uid_token(self):
        # register the new user
        response = self.client.post(
            self.register_url, self.user_data, format="json")
        # expected response
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        # verify the email with wrong data
        data = {"uid": "wrong-uid", "token": "wrong-token"}
        response = self.client.post(self.activate_url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
