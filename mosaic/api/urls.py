from django.urls import path, include
from rest_framework import routers
from .views import (MasterclassReadOnlyViewset,
                    MasterclassTypeReadOnlyViewset,
                    PostViewset)


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
    PostViewset,
    basename='posts'
)


urlpatterns = [
    path('v1/', include(router1.urls)),
    path('v1/', include('djoser.urls')),  # Работа с пользователями
    path(r'auth/', include('djoser.urls.jwt')),
]


# urls from djoser.jwt
# urlpatterns = [
#     re_path(r"^jwt/create/?", views.TokenObtainPairView.as_view(), name="jwt-create"),
#     re_path(r"^jwt/refresh/?", views.TokenRefreshView.as_view(), name="jwt-refresh"),
#     re_path(r"^jwt/verify/?", views.TokenVerifyView.as_view(), name="jwt-verify"),
# ]

# urlpatterns = [
#     re_path(r"^token/login/?$", views.TokenCreateView.as_view(), name="login"),
#     re_path(r"^token/logout/?$", views.TokenDestroyView.as_view(), name="logout"),
# ]

