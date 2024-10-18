import logging

import django_filters
from django.db.models import Exists, Min, OuterRef

from blog.models import Post
from masterclass.models import MasterclassCategory, MasterclassType

log = logging.getLogger(__name__)


class PostsFilter(django_filters.rest_framework.FilterSet):
    tags = django_filters.filters.AllValuesMultipleFilter(
        field_name='tags__slug')

    class Meta:
        model = Post
        fields = [
            'tags',
        ]


class CustomOrderingFilter(django_filters.OrderingFilter):
    """
This module defines custom filters for the MasterclassType model,
including a custom ordering filter.

Classes:
- `CustomOrderingFilter`: Extends `django_filters.OrderingFilter` to support
custom ordering logic.
- `MasterclassTypeFilter`: Defines filters for the `MasterclassType` model.

## CustomOrderingFilter

This filter allows for custom sorting of queryset based on predefined fields.
It supports sorting by 'date', 'price', and a custom 'recommended' category.

### Initialization Parameters:
- `fields`: A dictionary mapping internal field names to the parameter names
exposed in the API.
- `field_labels`: Optional.
A dictionary providing human-readable labels for the fields.

### Methods:
- `filter`: Overrides the base class method to apply custom ordering logic
based on the value of the `ordering` parameter.

## MasterclassTypeFilter

A `FilterSet` for the `MasterclassType` model that allows filtering
by categories and custom ordering.

### Fields:
- `category`: Filters the queryset based on the slug of the categories.
- `ordering`: Applies custom ordering to the queryset.
Utilizes the `CustomOrderingFilter` class.

"""

    def __init__(self, *args, **kwargs):
        fields = kwargs.pop('fields', {})
        fields = self.normalize_fields(fields)
        field_labels = kwargs.pop('field_labels', {})
        self.param_map = {v: k for k, v in fields.items()}

        if 'choices' not in kwargs:
            kwargs['choices'] = self.build_choices(fields, field_labels)
        super().__init__(*args, **kwargs)

    def filter(self, qs, value):
        if not value:
            return qs
        if any(v in ['recommended'] for v in value):
            if MasterclassCategory.objects.filter(slug='recommended').exists():
                recommended = MasterclassCategory.objects.get(
                    slug='recommended')
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
