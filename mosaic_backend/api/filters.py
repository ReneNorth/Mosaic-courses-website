import django_filters

from blog.models import Post
from marketplace.models import Artwork


class ArtworksFilter(django_filters.FilterSet):
    author = django_filters.CharFilter(field_name='author')
    author_type = django_filters.filters.AllValuesMultipleFilter(
        field_name='author_type')
    is_on_main = django_filters.BooleanFilter(field_name='is_on_main',
                                              method='filter_is_on_main')

    def filter_is_on_main(self, queryset, *args):
        return queryset.filter(artworks_on_main__custom_ordering__isnull=False)

    class Meta:
        model = Artwork
        fields = [
            'author',
            'author_type',
            'is_on_main',
        ]


class PostsFilter(django_filters.FilterSet):
    tags = django_filters.filters.AllValuesMultipleFilter(
        field_name='tags__slug')

    class Meta:
        model = Post
        fields = ['tags', ]
