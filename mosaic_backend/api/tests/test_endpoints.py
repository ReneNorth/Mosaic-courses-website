from django.test import Client, TestCase
from rest_framework.test import APIRequestFactory

from api.views import RequestCreateOnlyViewSet
from crm_app.models import FeedbackRequest, EmailMainForm
from carousel.models import MainCarouselItem
from .data_tests import link 


class FeedbackTest(TestCase):
    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        cls.guest_client = Client()
        cls.factory = APIRequestFactory()

    def test_feedback_api(self):
        """Checks 200 response for api/v1/school get request."""
        view = RequestCreateOnlyViewSet.as_view({'post': 'create'})
        request = FeedbackTest.factory.post('/api/v1/feedback/', {
            "phone_num": "+77770202936",
            "name": "mynameis",
            "contact_consent": "TRUE"
          }
        )
        response = view(request)
        self.assertEqual(FeedbackRequest.objects.count(), 1)
        self.assertEqual(
            FeedbackRequest.objects.get(name='mynameis').phone_num,
            '+77770202936')


class EmailFormAPITest(TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        super().setUpClass()
        cls.guest_client = Client()

    def test_email_created(self):
        data = {'email': 'user@example.com'}
        response = self.guest_client.post('/api/v1/email_form/', data=data,
                                          content_type='application/json')
        self.assertEqual(EmailMainForm.objects.count(), 1)


class CarouselItemAPITest(TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        super().setUpClass()
        cls.guest_client = Client()
        MainCarouselItem.objects.create(
            link=f'{link}/course_launch',
            title='test title',
            text='test text for the abanner',
            button='Subscribe!',
            order=1,
            image='/image'
        )

    def test_carousel_item_created_db(self):
        self.assertEqual(MainCarouselItem.objects.count(), 1)

    def test_caroulsel_item_api(self):
        response = self.guest_client.get('/api/v1/main_carousel/',
                                         content_type='application/json')
        self.assertEqual(response.status_code, 200)


class BlogTest(TestCase):
    """Creates and requests a blog post from API"""
    @classmethod
    def foo():
        pass
