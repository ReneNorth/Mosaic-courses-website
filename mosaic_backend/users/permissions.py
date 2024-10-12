from rest_framework.permissions import SAFE_METHODS, BasePermission


class BookingPermission(BasePermission):
    def has_permission(self, request, view):
        return (request.method in SAFE_METHODS
                or request.user.is_authenticated)

    def has_object_permission(self, request, view, obj):
        return (request.method in ['POST', 'DELETE', 'PATCH', ]
                and request.user.is_user
                and request.user == obj.guest
                or request.user.is_admin)


class FavoritePermission(BasePermission):
    def has_permission(self, request, view):
        return (request.method in SAFE_METHODS
                or request.user.is_authenticated)

    def has_object_permission(self, request, view, obj):
        return (request.method in ['DELETE', 'PATCH', ]
                and request.user.is_user
                and request.user != obj.author
                or request.user.is_admin)
