import logging

from django.contrib.auth import get_user_model
from django.test import TestCase

from blog.models import Post, PostTag, Tag

User = get_user_model()
log = logging.getLogger(__name__)

tag1_args = {'slug': 'glass', 'title': 'glass'}
post1_args = {'title': 'test_title', 'slug': 'test_slug',
              'preview_text': 'Some preview text!',
              'text': 'Some post text', 'read_time': 10, }
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
        cls.author = User.objects.create(**author1_args)
        cls.tag = Tag.objects.create(**tag1_args)
        cls.post = Post.objects.create(author=cls.author, **post1_args)
        cls.post_tag = PostTag.objects.create(post=cls.post, tag=cls.tag)

    @classmethod
    def tearDownClass(cls):
        super().tearDownClass()

    def test_get_tag(self):
        test_tag = Tag.objects.get(slug=tag1_args.get('slug'))
        self.assertEqual(Tag.objects.all().count(), 1)
        self.assertEqual(test_tag.slug, tag1_args.get('slug'))

    def test_get_tag_another(self):
        self.assertEqual(Tag.objects.all().count(), 1)

    def test_get_post(self):
        self.assertEqual(Post.objects.all().count(), 1)
        self.assertTrue(Post.objects.filter(
            text=post1_args.get('text')).exists())

    def test_post_tag_exists(self):
        self.assertEqual(PostTag.objects.all().count(), 1)

    def test_post_tag_filtering(self):
        posts_by_tag = Post.objects.filter(tags__in=[self.tag, ])
        self.assertEqual(len(posts_by_tag), 1)
        self.assertEqual(posts_by_tag[0].text, post1_args.get('text'))
