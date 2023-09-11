from django.urls import include, path
from rest_framework import routers

from .views import (ArtworkReadOnlyViewSet, CertificatePostPatchViewSet,
                    EmailCreateOnlyViewSet, MainCarouselReadOnlyViewSet,
                    MasterclassReadOnlyViewset, MasterclassTypeReadOnlyViewSet,
                    PostViewSet, RequestCreateOnlyViewSet, BookingViewSet,
                    SchoolReadOnlyViewSet, TagReadOnlyViewSet,
                    StudentReviewsReadOnlyViewSet)
from users.views import CustomizedUserViewSet

router1 = routers.SimpleRouter()

router1.register('users', CustomizedUserViewSet)
router1.register('feedback', RequestCreateOnlyViewSet, basename='feedback')
router1.register('email_form', EmailCreateOnlyViewSet, basename='email_form')
router1.register('main_carousel', MainCarouselReadOnlyViewSet,
                 basename='main_carousel')
router1.register(r'masterclasses', MasterclassReadOnlyViewset,
                 basename='masterclasses')
router1.register(r'masterclass_types',
                 MasterclassTypeReadOnlyViewSet,
                 basename='masterclasses')
router1.register(r'booking',
                 BookingViewSet,
                 basename='booking')
router1.register(r'blog', PostViewSet, basename='blog')
router1.register(r'certificate', CertificatePostPatchViewSet,
                 basename='certificate')
router1.register(r'artworks', ArtworkReadOnlyViewSet, basename='artwork')
router1.register(r'tags', TagReadOnlyViewSet, basename='tags')
router1.register(r'reviews', StudentReviewsReadOnlyViewSet, basename='reviews')

urlpatterns = [
    path('v1/', include(router1.urls)),
    path('v1/school/', SchoolReadOnlyViewSet.as_view({'get': 'list'})),
    path('v1/', include('djoser.urls')),
    path(r'auth/', include('djoser.urls.jwt')),
]
