import logging

from django.contrib.auth import get_user_model
from django.test import Client, TestCase
from masterclass.models import MasterclassType

from api.tests import data_tests as d

log = logging.getLogger(__name__)
User = get_user_model()


class MasterclassBookingTests(TestCase):
    """
    Creates and test post and tag objects.
    Under construction.
    """
    @classmethod
    def setUpClass(cls) -> None:
        super().setUpClass()
        cls.guest_client = Client()
        cls.author = User.objects.create(**d.author1_args)
        cls.masterclass_type = MasterclassType.objects.create(
            **d.masterclass_type)

    @classmethod
    def tearDownClass(cls):
        super().tearDownClass()

    def test_masterclass_type_created(self):
        self.assertEqual(MasterclassType.objects.all().count(), 1)
