import logging

from django.test import Client, TestCase
from rest_framework.test import APIRequestFactory

from masterclass.models import MasterclassType

from .data_tests import masterclass_type

log = logging.getLogger(__name__)


class MasterclassEndpointsTest(TestCase):

    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        cls.guest_client = Client()
        cls.factory = APIRequestFactory()
        MasterclassType.objects.create(**masterclass_type)

    @classmethod
    def tearDownClass(cls):
        super().tearDownClass()

    def test_get_all_masterclass_types(self):
        self.assertEqual(MasterclassType.objects.count(), 1)
        response = self.client.get('/api/v1/masterclass_types/')
        self.assertEqual(response.status_code, 200)
