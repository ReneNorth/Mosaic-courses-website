from django.urls import path, include
from rest_framework import routers
from .views import (MasterclassReadOnlyViewset,
                    MasterclassTypeReadOnlyViewset,
                    PostReadOnlyViewset)


router1 = routers.SimpleRouter()

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
    PostReadOnlyViewset,
    basename='posts'
)


urlpatterns = [
    path('v1/', include(router1.urls)),
    path('v1/', include('djoser.urls')),  # Работа с пользователями
    path('v1/', include('djoser.urls.authtoken')),  # Работа с токенами
    # TODO path('v1/auth/', include('custom_auth.urls')),
]

