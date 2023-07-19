# test if an author's name is not empty

from django.test import Client, TestCase
from rest_framework.test import APIRequestFactory

from mosaic.business_logic import BusinessLogic


class FeedbackTest(TestCase):
    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        cls.guest_client = Client()
        cls.factory = APIRequestFactory()

    @classmethod
    def tearDownClass(cls):
        super().tearDownClass()

    def test_business_logic_available(self):
        is_longer_than_0 = len(BusinessLogic.ADMIN_NAME) > 0
        self.assertTrue(is_longer_than_0,
                        'The admin name from business logic is empty')
