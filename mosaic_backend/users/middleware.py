import logging
from django.contrib.auth import authenticate
from django.utils.deprecation import MiddlewareMixin

log = logging.getLogger(__name__)


class AdminAuthLoggingMiddleware(MiddlewareMixin):
    def process_request(self, request):
        if request.path == '/admin/login/' and request.method == 'POST':
            username = request.POST.get('username')
            password = request.POST.get('password')
            user = authenticate(request, username=username, password=password)
            if user is not None:
                log.info(
                    f"Admin login attempt: SUCCESS for user {username}")
            else:
                log.warning(
                    f"Admin login attempt: FAILED for user {username}")
