from crm_app.models import FeedbackRequest
from django.test import Client, TestCase
from rest_framework.test import APIClient, APIRequestFactory
from school.models import School

from api.views import RequestCreateOnlyViewSet


class FeedbackPostTest(TestCase):
    """Prepare fixtures for main school data testing."""

    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        cls.school = School.objects.create(
            name='Test_school',
            full_description='Test_school long description 1',
            short_description='Test_school short description 1',
            address_text='Алматы, площадь Республики, 15',
            address_link='https://go.2gis.com/r8vnv',
            working_hours='с 9 до 19 каждый день',
            phone='+7 (777) 777 77 77',
            email='mosaic@mosaic.com',
            facebook_link='https://www.facebook.com/',
            tg_link='https://web.telegram.org/',
            instagram_link='https://www.instagram.com/' 
        )
        cls.guest_client = Client()
        cls.factory = APIRequestFactory()
        cls.api_client = APIClient()

    # def setUp(self):
        # """Подготовка прогона теста. Вызывается перед каждым тестом."""

    def test_school_api(self):
        """Checks 200 response for api/v1/school get request."""
        response = FeedbackPostTest.guest_client.get('/api/v1/school/')
        self.assertEqual(response.status_code, 200)
        
    def test_school_name(self):
        response = FeedbackPostTest.guest_client.get('/api/v1/school/')
        # print(response.data.get('name')) # не работает, потому что без
        # пагинации данные содержатся в объекте https://stackoverflow.com/questions/55286605/drf-jsonrenderer-returnlist-object-has-no-attribute-get
        self.assertEqual(response.data[0].get('name'), 'Test_school')

        
    # def __init__(self, data=None, status=None,
    #              template_name=None, headers=None,
    #              exception=False, content_type=None):

class FeedbackTest(TestCase):
    """Prepare fixtures for testing."""

    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        cls.guest_client = Client()
        cls.factory = APIRequestFactory()
        cls.api_client = APIClient()

    def setUp(self):
        """Method is called before each test."""

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
        # self.assertEqual(response.status, 200)
        print(response)
        print(FeedbackRequest.objects.get(phone_num='+77770202936'))


# create tests for all apis in the project
# https://stackoverflow.com/questions/47950889/how-to-create-tests-for-all-apis-in-django-project

# write tests for all API endpoints 
# https://stackoverflow.com/questions/47950889/how-to-create-tests-for-all-apis-in-django-project

# implement tests for the masterclasses API endpoint
  