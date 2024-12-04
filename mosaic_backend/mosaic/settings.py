import logging
import os
from datetime import timedelta
from pathlib import Path

from django.utils.log import DEFAULT_LOGGING
from dotenv import load_dotenv

BASE_DIR = Path(__file__).resolve().parent.parent
DEBUG = True

load_dotenv(os.path.join(BASE_DIR.parent, 'infra', '.env'))

KEY_ENV = os.getenv('SECRET_KEY')
SECRET_KEY = f'{KEY_ENV}'
ALLOWED_HOSTS = ['web', '127.0.0.1', '127.0.0.1:8000', 'localhost',
                 'tessera.hopto.org', 'localhost:8000', ]


INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.admindocs',
    'django.contrib.staticfiles',
    'api.apps.ApiConfig',
    'blog.apps.BlogConfig',
    'booking.apps.BookingConfig',
    'gallery.apps.GalleryConfig',
    'crm_app.apps.CrmAppConfig',
    'carousel.apps.CarouselConfig',
    'masterclass.apps.MasterclassConfig',
    'school.apps.SchoolConfig',
    'users.apps.UsersConfig',
    'custom_auth.apps.CustomAuthConfig',
    'teachers.apps.TeachersConfig',
    'store.apps.StoreConfig',
    'checkout.apps.CheckoutConfig',
    'favorite.apps.FavoriteConfig',
    'drf_yasg',
    'rest_framework',
    'djoser',
    'django_filters',
    'mdeditor',
    'corsheaders',
    'drf_api_logger',
    'django_extensions',
    'drf_spectacular',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'drf_api_logger.middleware.api_logger_middleware.APILoggerMiddleware',
    'users.middleware.AdminAuthLoggingMiddleware',
]


CORS_ORIGIN_ALLOW_ALL = True
CORS_URLS_REGEX = r'^/api/.*$'
CSRF_TRUSTED_ORIGINS = ['http://localhost',
                        'http://localhost:3000',
                        'http://localhost:8000',
                        'http://localhost:8000/register',
                        'https://tessera.hopto.org',
                        'https://tesseramosaic.art',
                        ]


ROOT_URLCONF = 'mosaic.urls'

TEMPLATES_DIR = os.path.join(BASE_DIR, 'templates')
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'mosaic.wsgi.application'


DATABASES = {
    'default': {
        'ENGINE': os.getenv('DB_ENGINE', 'django.db.backends.postgresql'),
        'NAME': os.getenv('DB_NAME', 'django_db'),
        'USER': os.getenv('POSTGRES_USER', 'django_user'),
        'PASSWORD': os.getenv('POSTGRES_PASSWORD', 'django_password'),
        'HOST': os.getenv('DB_HOST', '127.0.0.1'),
        'PORT': os.getenv('DB_PORT', '5432'),
    }
}


LANGUAGE_CODE = 'en-us'


TIME_ZONE = 'Asia/Almaty'

USE_I18N = True

USE_L10N = True

USE_TZ = True


STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'collected_static'

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

AUTH_USER_MODEL = 'users.User'

EMAIL_BACKEND = 'django.core.mail.backends.filebased.EmailBackend'
SITE_NAME = 'Tessera Mosaic'
EMAIL_FILE_PATH = os.path.join(BASE_DIR, 'sent_emails')  # directory for emails


REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny',
    ],

    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework_simplejwt.authentication.JWTAuthentication',
        'rest_framework.authentication.SessionAuthentication'
    ],

    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 6,
    'DEFAULT_SCHEMA_CLASS': 'drf_spectacular.openapi.AutoSchema',
}

SPECTACULAR_SETTINGS = {
    'TITLE': 'Tessera Mosaic',
    'DESCRIPTION': 'Website for a mosaic school',
    'VERSION': '1.0.0',
    'SERVE_INCLUDE_SCHEMA': False,
    # OTHER SETTINGS
}


SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(days=15),
    'AUTH_HEADER_TYPES': ('Bearer',),
}
DJOSER = {
    'LOGIN_FIELD': 'email',
    'HIDE_USERS': True,
    'SEND_ACTIVATION_EMAIL': True,
    'USERNAME_CHANGED_EMAIL_CONFIRMATION': True,
    'SEND_CONFIRMATION_EMAIL': True,
    'PASSWORD_CHANGED_EMAIL_CONFIRMATION': True,
    'PASSWORD_RESET_CONFIRM_URL': 'password-reset/{uid}/{token}',
    'PASSWORD_RESET_SHOW_EMAIL_NOT_FOUND': True,
    "ACTIVATION_URL": "activate/{uid}/{token}",
    'USERNAME_RESET_CONFIRM_URL': '#/username/reset/confirm/{uid}/{token}',
    'SERIALIZERS': {
        'user_create': 'users.serializers.CustomCreateUserSerializer',
        'user': 'users.serializers.CustomCreateUserSerializer',
        'current_user': 'users.serializers.UserPersonalPageSerializer',
        # 'user_delete': 'users.serializers.CustomCreateUserSerializer',
    },
    # change the email templates later
    # 'EMAIL': {
    #     'activation': 'djoser.email.ActivationEmail',
    # },
    'PERMISSIONS': {
        'user': ['rest_framework.permissions.AllowAny'],
        'user_list': ['rest_framework.permissions.AllowAny'],
    }
}


X_FRAME_OPTIONS = 'SAMEORIGIN'


MDEDITOR_CONFIGS = {
    'default': {
        'width': '100% ',  # Custom edit box width
        'height': 700,  # Custom edit box height
        'toolbar': ["undo", "redo", "|",
                    "bold", "del", "italic", "quote", "ucwords", "uppercase", "lowercase", "|",
                    "h1", "h2", "h3", "h5", "h6", "|",
                    "list-ul", "list-ol", "hr", "|",
                    "link", "reference-link", "image", "code", "preformatted-text", "code-block", "table", "datetime",
                    "emoji", "html-entities", "pagebreak", "goto-line", "|",
                    "help", "info",
                    "||", "preview", "watch", "fullscreen"],  # custom edit box toolbar
        # image upload format type
        'upload_image_formats': ["jpg", "jpeg", "gif", "png", "bmp", "webp", "svg"],
        'image_folder': 'editor',  # image save the folder name
        'theme': 'default',  # edit box theme, dark / default
        'preview_theme': 'default',  # Preview area theme, dark / default
        'editor_theme': 'default',  # edit area theme, pastel-on-dark / default
        'toolbar_autofixed': False,  # Whether the toolbar capitals
        'search_replace': True,  # Whether to open the search for replacement
        'emoji': True,  # whether to open the expression function
        'tex': True,  # whether to open the tex chart function
        'flow_chart': True,  # whether to open the flow chart function
        'sequence': True,  # Whether to open the sequence diagram function
        'watch': True,  # Live preview
        'lineWrapping': True,  # lineWrapping
        'lineNumbers': True,  # lineNumbers
        'language': 'en'  # zh / en / es
    }
}


LOGLEVEL = 'DEBUG'
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'verbose': {
            'format': '{levelname} {asctime} {module} {process:d} {thread:d} {message} {filename}:{lineno}',
            'style': '{',
        },
        'simple': {
            'format': '{levelname} {message}',
            'style': '{',
        },
        'django.server': DEFAULT_LOGGING['formatters']['django.server'],
    },
    'handlers': {
        'console': {
            'level': f'{LOGLEVEL}',
            'class': 'logging.StreamHandler',
            'formatter': 'simple',
        },
        'file': {
            'level': LOGLEVEL,
            'class': 'logging.FileHandler',
            'formatter': 'verbose',
            'filename': os.path.join(BASE_DIR, 'logs', 'django.log'),
        },
        'django.server': DEFAULT_LOGGING['handlers']['django.server'],
    },
    'loggers': {
        '': {
            'level': LOGLEVEL,
            'handlers': ['console', 'file'],
        },
        'django.server': DEFAULT_LOGGING['loggers']['django.server'],
        'users.middleware': {
            'level': 'DEBUG',
            'handlers': ['console', 'file'],
            'propagate': False,
        },
    }
}


GRAPH_MODELS = {
    'all_applications': True,
    'group_models': True,
}
