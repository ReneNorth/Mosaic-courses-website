import logging

from django.test import TestCase, RequestFactory
from api.views import MasterclassCategoryFilterReadOnlyViewSet
from masterclass.models import MasterclassCategory

log = logging.getLogger(__name__)


class ListViewTest(TestCase):
    def setUp(self):
        self.factory = RequestFactory()
        self.view = MasterclassCategoryFilterReadOnlyViewSet.as_view(
            {'get': 'list'})
        self.category1 = MasterclassCategory.objects.create(
            name='category1',
            slug='category1',
            category_filter=list(
                MasterclassCategory.CATEGORY_FILTER_CHOICES.keys())[0])
        self.category2 = MasterclassCategory.objects.create(
            name='category2',
            slug='category2',
            category_filter=list(
                MasterclassCategory.CATEGORY_FILTER_CHOICES.keys())[1])

    def test_list_view(self):
        request = self.factory.get('/api/v1/filters/')
        response = self.view(request)
        log.info(response.data)
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'category1')
        self.assertContains(response, 'category2')

    def test_list_view_structure(self):
        request = self.factory.get('/api/v1/filters/')
        response = self.view(request)
        self.assertIsInstance(response.data, dict)
        for key in MasterclassCategory.CATEGORY_FILTER_CHOICES.keys():
            self.assertIn(key, response.data)
