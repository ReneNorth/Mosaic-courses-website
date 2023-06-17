from django.test import Client, TestCase

from api.views import RequestCreateOnlyViewSet
from crm_app.models import FeedbackRequest, EmailMainForm


class FeedbackTest(TestCase):
    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        cls.guest_client = Client()

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


class BlogTest(TestCase):
    """Creates and requests a blog post from API"""
    @classmethod
    def foo():
        pass
