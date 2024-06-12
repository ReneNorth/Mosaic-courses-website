# from django.urls import reverse
# from rest_framework import status
# from rest_framework.test import APITestCase

# from masterclass.models import MasterclassCategory

# class MasterclassCategoryFilterReadOnlyViewSetTests(APITestCase):
#     def setUp(self):
#         self.url = '/api/v1/filters/'
#         # Create some MasterclassCategory objects for testing
#         MasterclassCategory.objects.create(
#             name='Category 1', category_filter='filter1')
#         MasterclassCategory.objects.create(
#             name='Category 2', category_filter='filter2')
#         MasterclassCategory.objects.create(
#             name='Category 3', category_filter='filter3')

#     def test_list_categories(self):
#         response = self.client.get(self.url)
#         self.assertEqual(response.status_code, status.HTTP_200_OK)
#         self.assertEqual(len(response.data),
#                          MasterclassCategory.objects.count())

#     def test_list_categories_with_filter(self):
#         response = self.client.get(self.url)
#         self.assertEqual(response.status_code, status.HTTP_200_OK)
#         self.assertEqual(len(response.data), len(
#             MasterclassCategory.CATEGORY_FILTER_CHOICES))

#     def test_list_categories_with_items(self):
#         response = self.client.get(self.url)
#         self.assertEqual(response.status_code, status.HTTP_200_OK)
#         for category_filter, items in response.data.items():
#             self.assertTrue(isinstance(items, list))
#             for item in items:
#                 self.assertEqual(item['category_filter'], category_filter)
