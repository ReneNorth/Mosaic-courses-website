import logging

import django_filters
from django.db.models import Exists, Min, OuterRef

from blog.models import Post
from marketplace.models import Artwork
from masterclass.models import Category, MasterclassType

log = logging.getLogger(__name__)


class ArtworksFilter(django_filters.FilterSet):
    author = django_filters.CharFilter(field_name='author')
    author_type = django_filters.filters.AllValuesMultipleFilter(
        field_name='author_type'
    )
    is_on_main = django_filters.BooleanFilter(
        field_name='is_on_main', method='filter_is_on_main'
    )

    def filter_is_on_main(self, queryset, *args):
        return queryset.filter(artworks_on_main__custom_ordering__isnull=False)

    class Meta:
        model = Artwork
        fields = [
            'author',
            'author_type',
            'is_on_main',
        ]


class PostsFilter(django_filters.rest_framework.FilterSet):
    tags = django_filters.filters.AllValuesMultipleFilter(
        field_name='tags__slug')

    class Meta:
        model = Post
        fields = [
            'tags',
        ]


class CustomOrderingFilter(django_filters.OrderingFilter):
    def __init__(self, *args, **kwargs):
        fields = kwargs.pop("fields", {})
        fields = self.normalize_fields(fields)
        field_labels = kwargs.pop("field_labels", {})
        self.param_map = {v: k for k, v in fields.items()}

        if "choices" not in kwargs:
            kwargs["choices"] = self.build_choices(fields, field_labels)
        super().__init__(*args, **kwargs)

    def filter(self, qs, value):
        if any(v in ['recommended'] for v in value):
            if Category.objects.filter(slug='recommended').exists():
                recommended = Category.objects.get(slug='recommended')
                return qs.annotate(recommended=Exists(
                    MasterclassType.category.through.objects.filter(
                        masterclass_type_id=OuterRef('id'),
                        category_id=recommended.id))).order_by('-recommended')
            else:
                return super().filter(qs, value)
        if any(v in ['date'] for v in value):
            return qs.annotate(min_date=Min(
                'masterclasses__time_start')).order_by('min_date')
        if any(v in ['price'] for v in value):
            return qs.annotate(min_price=Min(
                'masterclasses__price')).order_by('min_price')
        return super().filter(qs, value)


class MasterclassTypeFilter(django_filters.FilterSet):
    category = django_filters.filters.AllValuesMultipleFilter(
        field_name='category__slug',
        conjoined=True)

    ordering = CustomOrderingFilter(
        fields=(
            ('date', 'date'),
            ('price', 'price'),
            ('recommended', 'recommended')
        )
    )

    class Meta:
        model = MasterclassType
        fields = ['category']
