import os
from datetime import timedelta
from pathlib import Path

from django.conf import settings
from django.conf.urls.static import static
from django.utils.log import DEFAULT_LOGGING
from dotenv import load_dotenv

BASE_DIR = Path(__file__).resolve().parent.parent
DEBUG = True
LOCAL_DEV = False


KEY_ENV = os.getenv('SECRET_KEY')
SECRET_KEY = f'{KEY_ENV}'
ALLOWED_HOSTS = ['*', 'web', '127.0.0.1', '127.0.0.1:8000', 'localhost',
                 '[::1]', 'testserver',
                 ]


INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'api.apps.ApiConfig',
    'blog.apps.BlogConfig',
    'booking.apps.BookingConfig',
    'crm_app.apps.CrmAppConfig',
    'marketplace.apps.MarketplaceConfig',
    'carousel.apps.CarouselConfig',
    'masterclass.apps.MasterclassConfig',
    'school.apps.SchoolConfig',
    'users.apps.UsersConfig',
    'custom_auth.apps.CustomAuthConfig',
    'teachers.apps.TeachersConfig',
    'drf_yasg',
    'rest_framework',
    'djoser',
    # 'mdeditor',
    # 'martor',
    'corsheaders',
    'drf_api_logger',
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
]


# CORS
CORS_ORIGIN_ALLOW_ALL = True
CORS_URLS_REGEX = r'^/api/.*$'
CSRF_TRUSTED_ORIGINS = ['http://localhost',
                        'http://localhost:3000',
                        'https://tessera.hopto.org',
                        ]
# CORS_ALLOWED_ORIGINS = [
#     'http://localhost',
#     'http://localhost:3000',
#     'http://localhost:8000',
# ]


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


if LOCAL_DEV is False:
    DATABASES = {
        'default': {
            'ENGINE': os.getenv('DB_ENGINE', 'django.db.backends.postgresql'),
            'NAME': os.getenv('DB_NAME', default='postgres'),
            'USER': os.getenv('POSTGRES_USER', default='postgres'),
            'PASSWORD': os.getenv('POSTGRES_PASSWORD', default='mosaic_admin'),
            'HOST': os.getenv('DB_HOST', default='db'),
            'PORT': os.getenv('DB_PORT', default='5432')
        }
    }


if LOCAL_DEV is True:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': 'mosaic',
            'USER': 'mosaic_admin',
            'PASSWORD': 'mosaic_admin',
            'HOST': 'localhost',
            'PORT': '5432'
        }
    }


# Password validation
# https://docs.djangoproject.com/en/3.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# STATIC_URL = '/django_static/'
# STATIC_ROOT = os.path.join(BASE_DIR, 'django_static')
STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'collected_static'

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

AUTH_USER_MODEL = 'users.User'

# urlpatterns = [
# ... the rest of your URLconf goes here ...
# ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ],

    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ],
    # 'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    # 'PAGE_SIZE': 10,
}

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(days=15),
    'AUTH_HEADER_TYPES': ('Bearer',),
}

# Markdown editor settings
# repo https://github.com/pylixm/django-mdeditor

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


# LOGGING_CONFIG = None
# LOGLEVEL = os.getenv('DJ_LOGLEVEL', 'info').upper()
DRF_API_LOGGER_DATABASE = True
LOGLEVEL = 'DEBUG'
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        # Use JSON formatter as default
        'verbose': {
            'format': '{levelname} {asctime} {module} {process:d} {thread:d} {message}',
            'style': '{',
        },
        'simple': {
            'format': '{levelname} {message}',
            'style': '{',
        },
        'django.server': DEFAULT_LOGGING['formatters']['django.server'],
    },
    'handlers': {
        # Route console logs to stdout
        'console': {
            'level': f'{LOGLEVEL}',
            'class': 'logging.StreamHandler',
            'formatter': 'simple',
        },
        'docker_log': {
            'level': 'DEBUG',
            'class': 'logging.FileHandler',
            'formatter': 'verbose',
            'filename': f'{BASE_DIR}/logs/logs_main.log'
        },
        'django.server': DEFAULT_LOGGING['handlers']['django.server'],
    },
    'loggers': {
        # Default logger for all modules
        '': {
            'level': LOGLEVEL,
            'handlers': ['console', 'docker_log'],
        },
        # Default runserver request logging
        'django.server': DEFAULT_LOGGING['loggers']['django.server'],
    }
}
