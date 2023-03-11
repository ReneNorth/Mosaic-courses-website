from django.test import TestCase, Client
from school.models import School
from rest_framework.test import APIRequestFactory, APIClient


class SchoolTest(TestCase):
    """Prepare fixtures for testing."""

    @classmethod
    def setUpClass(cls):
        super().setUpClass()  # понять детальнее что это
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
        response = SchoolTest.guest_client.get('/api/v1/school/')
        self.assertEqual(response.status_code, 200)
        
    def test_school_name(self):
        response = SchoolTest.guest_client.get('/api/v1/school/')
        # print(response.data.get('name')) # не работает, потому что без
        # пагинации данные содержатся в объекте https://stackoverflow.com/questions/55286605/drf-jsonrenderer-returnlist-object-has-no-attribute-get
        self.assertEqual(response.data[0].get('name'), 'Test_school')

        
    # def __init__(self, data=None, status=None,
    #              template_name=None, headers=None,
    #              exception=False, content_type=None):

# class 

# request = factory.post('/notes/', {'title': 'new idea'})