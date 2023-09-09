import logging
import json

from django.test import Client, TestCase
from django.contrib.auth import get_user_model
from rest_framework.test import APIRequestFactory

from .data_tests import link
from blog.models import Tag, PostTag, Post
from carousel.models import MainCarouselItem
from school.models import Review
from crm_app.models import EmailMainForm, FeedbackRequest

log = logging.getLogger(__name__)
User = get_user_model()


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
        """Checks feedback endpoint."""
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
            image="/imagetest",
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

    def test_carousel_image_available(self):
        """
        Tests if the test image is available in the response and equals
        the expected value.
        """
        self.assertEqual(MainCarouselItem.objects.all().count(), 1)
        response = self.guest_client.get(
            "/api/v1/main_carousel/", content_type="application/json"
        )
        self.assertTrue(json.loads(response.content).get('results')
                        [0].get('image').endswith('imagetest'))


tag1_args = {'slug': 'glass', 'title': 'glass'}
tag2_args = {'slug': 'rome', 'title': 'rome'}

post1_args = {'title': 'test_title', 'slug': 'test_slug',
              'preview_text': 'Some preview text!',
              'text': 'Some post text', 'read_time': 10, 'image': '/image'}
post2_args = {'title': 'test_title2', 'slug': 'test_slug2',
              'preview_text': 'Some preview text! 2',
              'text': 'Some post text 2', 'read_time': 15, 'image': '/image'}


author1_args = {"email": "testmail11@mai.com",
                "phone": "+77778888922",
                "password": "asd@111mai11.com",
                "first_name": "test1",
                "last_name": "test1",
                "general_agreement": "True",
                "markcomm_agreement": "False"}


class BlogTest(TestCase):
    """Creates and test post and tag objects."""
    @classmethod
    def setUpClass(cls) -> None:
        super().setUpClass()
        cls.guest_client = Client()
        cls.author = User.objects.create(**author1_args)
        cls.tag1 = Tag.objects.create(**tag1_args)
        cls.tag2 = Tag.objects.create(**tag2_args)

        cls.post1 = Post.objects.create(author=cls.author, **post1_args)
        cls.post1_tag1 = PostTag.objects.create(post=cls.post1, tag=cls.tag1)

        cls.post2 = Post.objects.create(author=cls.author, **post2_args)
        cls.post2_tag1 = PostTag.objects.create(post=cls.post2, tag=cls.tag1)
        cls.post2_tag2 = PostTag.objects.create(post=cls.post2, tag=cls.tag2)

    @classmethod
    def tearDownClass(cls):
        super().tearDownClass()

    def test_api_get_2_posts(self):
        response = self.client.get(
            path="/api/v1/blog/",
            extra="application/json",
        )

        self.assertEqual(response.status_code, 200)
        # posts_count = json.loads(bytes.decode(
        # response.content)).get('count') # for pagination
        self.assertEqual(len(json.loads(bytes.decode(
            response.content))), 2)

    def test_api_related_posts(self):
        response = self.client.get(
            path=f"/api/v1/blog/{self.post1.slug}/related_posts/",
            content_type="application/json",
        )

        self.assertEqual(response.status_code, 200)
        posts = json.loads(bytes.decode(
            response.content))
        slug = posts[0].get('slug')
        self.assertEqual(slug, self.post2.slug)


review1_args = {"student_name": "test",
                "title": "test title 1",
                "review": "It is the review", }


class ReviewsTest(TestCase):
    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        cls.guest_client = Client()
        cls.review1 = Review.objects.create(student_name="test",
                                            photo='/test',
                                            title="test title 1",
                                            review="It is the review",
                                            pub_date='2023-01-01')

    @classmethod
    def tearDownClass(cls):
        super().tearDownClass()

    def test_feedback_api(self):
        """Checks reviews endpoint."""
        response = self.client.get(
            path="/api/v1/reviews/",
            extra="application/json"
        )
        self.assertEqual(response.status_code, 200)
        self.assertEqual(Review.objects.count(), 1)
        self.assertEqual(Review.objects.get(
            title=review1_args.get('title')).title, review1_args.get('title')
        )
