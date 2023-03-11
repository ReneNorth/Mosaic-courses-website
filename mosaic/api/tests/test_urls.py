from django.test import TestCase, Client
from school.models import School


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

    def test_school_api(self):
        """Checks 200 response for api/v1/school get request."""
        response = SchoolTest.guest_client.get('/api/v1/school/')
        self.assertEqual(response.status_code, 200)



