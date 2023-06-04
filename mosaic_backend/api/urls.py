from django.urls import include, path
from rest_framework import routers

from .views import (CertificatePostPatchViewSet, EmailCreateOnlyViewSet,
                    MainCarouselReadOnlyViewSet, MasterclassReadOnlyViewset,
                    MasterclassTypeReadOnlyViewset, PostViewset,
                    RequestCreateOnlyViewSet, SchoolReadOnlyViewSet)

router1 = routers.SimpleRouter()


router1.register(
    'feedback',
    RequestCreateOnlyViewSet,
    basename='feedback'
)

router1.register(
    'email_form',
    EmailCreateOnlyViewSet,
    basename='email_form'
)


router1.register(
    'main_carousel',
    MainCarouselReadOnlyViewSet,
    basename='main_carousel'
)


router1.register(
    r'masterclasses',
    MasterclassReadOnlyViewset,
    basename='masterclasses'
)

router1.register(
    r'masterclass_types',
    MasterclassTypeReadOnlyViewset,
    basename='masterclasses'
)

router1.register(
    r'blog/posts',
    PostViewset,
    basename='posts'
)

router1.register(
    r'certificate',
    CertificatePostPatchViewSet,
    basename='certificate'
)


urlpatterns = [
    path('v1/', include(router1.urls)),
    path('v1/school/', SchoolReadOnlyViewSet.as_view({'get': 'list'})),
    path('v1/', include('djoser.urls')),
    path(r'auth/', include('djoser.urls.jwt')),
]
