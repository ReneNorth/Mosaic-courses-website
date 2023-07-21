import logging

from carousel.models import MainCarouselItem
from crm_app.models import EmailMainForm, FeedbackRequest
from django.test import Client, TestCase
from rest_framework.test import APIRequestFactory

from .data_tests import link

log = logging.getLogger(__name__)


class FeedbackTest(TestCase):
    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        cls.guest_client = Client()
        cls.factory = APIRequestFactory()

    @classmethod
    def tearDownClass(cls):
        super().tearDownClass()

    def test_feedback_api(self):
        """Checks 201 response for api/v1/school get request."""
        response = self.client.post(
            "/api/v1/feedback/",
            {
                "phone_num": "+77770202936",
                "name": "mynameis",
                "contact_consent": "TRUE",
            },
            "application/json",
        )
        self.assertEqual(response.status_code, 201)
        self.assertEqual(FeedbackRequest.objects.count(), 1)
        self.assertEqual(
            FeedbackRequest.objects.get(
                name="mynameis").phone_num, "+77770202936"
        )


class EmailFormAPITest(TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        super().setUpClass()
        cls.guest_client = Client()

    @classmethod
    def tearDownClass(cls):
        super().tearDownClass()

    def test_email_created(self):
        data = {"email": "user@example.com"}
        self.guest_client.post(
            "/api/v1/email_form/", data=data, content_type="application/json"
        )
        self.assertEqual(EmailMainForm.objects.count(), 1)


class CarouselItemAPITest(TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        super().setUpClass()
        cls.guest_client = Client()
        MainCarouselItem.objects.create(
            link=f"{link}/course_launch",
            title="test title",
            text="test text for the abanner",
            button="Subscribe!",
            order=1,
            image="/image",
        )

    @classmethod
    def tearDownClass(cls):
        super().tearDownClass()

    def test_carousel_item_created_db(self):
        self.assertEqual(MainCarouselItem.objects.count(), 1)

    def test_caroulsel_item_api(self):
        response = self.guest_client.get(
            "/api/v1/main_carousel/", content_type="application/json"
        )
        self.assertEqual(response.status_code, 200)


class BlogTest(TestCase):
    """Creates and requests a blog post from API"""

    @classmethod
    def foo():
        pass
