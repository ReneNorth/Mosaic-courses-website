import base64

from django.core.files.base import ContentFile
from booking.models import Booking
from blog.models import Post
from masterclass.models import Masterclass, MasterclassType
from rest_framework import serializers


class Base64ImageField(serializers.ImageField):
    def to_internal_value(self, data):
        if isinstance(data, str) and data.startswith('data:image'):
            format, imgstr = data.split(';base64,')
            ext = format.split('/')[-1]
            data = ContentFile(base64.b64decode(imgstr), name='temp.' + ext)

        return super().to_internal_value(data)


class MasterclassSerializer(serializers.ModelSerializer):
    num_of_guests = serializers.IntegerField(read_only=True)
    # course_type = serializers.SlugRelatedField(
    #     slug_field='type',
    #     queryset=MasterclassType.objects.all()
    # )
    # short_description = serializers.RelatedField

    class Meta:
        model = Masterclass
        fields = ['id', 'title', 'price', 'currency',
                  'time_begin', 'time_end', 'num_of_guests']
        read_only_fields = ['title', 'price', 'time_begin',
                            'time_end', 'num_of_guests']
        # extra_kwargs = {
        #     'score': {'required': True},
        #     'text': {'required': True},
        # }


class MasterclassTypeSerializer(serializers.ModelSerializer):
    masterclasses = MasterclassSerializer(many=True, read_only=True)
    # full_description =

    class Meta:
        model = MasterclassType
        fields = ['id', 'type', 'slug', 'max_guests', 'duration',
                  'short_description', 'full_description', 'masterclasses']
        read_only_fields = ['id', 'type', 'slug', 'max_guests', 'duration',
                            'short_description', 'full_description',
                            'masterclasses']


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ['guest', 'attending']


class PostSerializer(serializers.ModelSerializer):
    author = serializers.SlugRelatedField(read_only=True,
                                          slug_field='username')
    image = Base64ImageField(required=False, allow_null=True)
    pub_date = serializers.DateTimeField(format='%d %B %Y')

    class Meta:
        model = Post
        fields = ['id', 'title', 'text', 'pub_date', 'author', 'image']
        read_only_fields = ['id', 'text', 'pub_date', 'author', 'image']
