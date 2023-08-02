from django.contrib.auth import get_user_model
from django.test import TestCase

User = get_user_model()


class BlogTests(TestCase):
    @classmethod
    def setUpTestData(cls):
        cls.user = User.objects.create_user(
            username='testuser',
            email='test@email.com',
            general_agreement=True,
            phone='+77777777777',
            password='secret',
        )

    def test_post_model(self):
        self.assertEqual(self.user.username, 'testuser')
        self.assertEqual(self.user.phone, '+77777777777')
