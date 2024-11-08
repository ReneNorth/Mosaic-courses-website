from django.urls import include, path
from rest_framework import routers

from users.views import CustomizedUserViewSet

from .views import (BookingViewSet, CertificatePostPatchViewSet,
                    EmailCreateOnlyViewSet, FavoritedCreateDeleteViewSet,
                    MainCarouselReadOnlyViewSet,
                    MasterclassCategoryFilterReadOnlyViewSet,
                    MasterclassReadOnlyViewset, MasterclassTypeReadOnlyViewSet,
                    PostViewSet, RequestCreateOnlyViewSet,
                    SchoolReadOnlyViewSet, StudentReviewsReadOnlyViewSet,
                    TagReadOnlyViewSet)

router1 = routers.SimpleRouter()

router1.register('users', CustomizedUserViewSet,
                 basename='users')
router1.register('feedback', RequestCreateOnlyViewSet,
                 basename='feedback')
router1.register('email_form', EmailCreateOnlyViewSet,
                 basename='email_form')
router1.register('main_carousel', MainCarouselReadOnlyViewSet,
                 basename='main_carousel')
router1.register(r'masterclasses', MasterclassReadOnlyViewset,
                 basename='masterclasses')
router1.register(r'masterclass_types',
                 MasterclassTypeReadOnlyViewSet,
                 basename='masterclasses')
router1.register(r'reviews', StudentReviewsReadOnlyViewSet,
                 basename='reviews')
router1.register(r'booking', BookingViewSet,
                 basename='booking')
router1.register(r'blog', PostViewSet, basename='blog')
router1.register(r'certificate', CertificatePostPatchViewSet,
                 basename='certificate')
router1.register(r'artworks', ArtworkReadOnlyViewSet,
                 basename='artwork')
router1.register(r'tags', TagReadOnlyViewSet,
                 basename='tags')
router1.register(r'filters', MasterclassCategoryFilterReadOnlyViewSet,
                 basename='filters')

urlpatterns = [
    path('admin/doc/', include('django.contrib.admindocs.urls')),
    path('v1/', include(router1.urls)),
    path('v1/school/', SchoolReadOnlyViewSet.as_view({'get': 'list'})),
    path('v1/', include('djoser.urls')),
    path(r'auth/', include('djoser.urls.jwt')),
    path('v1/artworks/<int:pk>/favorite/',
         FavoritedCreateDeleteViewSet.as_view({'post': 'create',
                                              'delete': 'destroy'})),
]
