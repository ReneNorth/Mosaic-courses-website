from django.urls import include, path
from rest_framework import routers

from users.views import CustomizedUserViewSet

from .views import (ArtworkReadOnlyViewSet, BookingViewSet,
                    CertificatePostPatchViewSet, EmailCreateOnlyViewSet,
                    MainCarouselReadOnlyViewSet, MasterclassReadOnlyViewset,
                    MasterclassTypeReadOnlyViewSet, PostViewSet,
                    RequestCreateOnlyViewSet, SchoolReadOnlyViewSet,
                    StudentReviewsReadOnlyViewSet, TagReadOnlyViewSet)

from emailing.views import SendTestMail, send_test_email

router1 = routers.SimpleRouter()

router1.register('users', CustomizedUserViewSet, basename='users')
# router1.register('email', SendTestMail.as_view(), basename='email')
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
    path('v1/send_email/', send_test_email, name='send-email'),
    path('admin/doc/', include('django.contrib.admindocs.urls')),
    path('v1/', include(router1.urls)),
    path('v1/school/', SchoolReadOnlyViewSet.as_view({'get': 'list'})),
    path('v1/', include('djoser.urls')),
    path(r'auth/', include('djoser.urls.jwt')),

]
