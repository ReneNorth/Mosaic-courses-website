from django.urls import path, include
from rest_framework import routers
from .views import (MasterclassReadOnlyViewset,
                    MasterclassTypeReadOnlyViewset,
                    PostViewset,
                    SchoolReadOnlyViewSet,
                    RequestCreateOnlyViewSet,
                    )


router1 = routers.SimpleRouter()


router1.register(
    'feedback',
    RequestCreateOnlyViewSet,
    basename='feedback'
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


urlpatterns = [
    path('v1/', include(router1.urls)),
    path('v1/school/', SchoolReadOnlyViewSet.as_view({'get': 'list'})),
    path('v1/', include('djoser.urls')),
    path(r'auth/', include('djoser.urls.jwt')),
]
