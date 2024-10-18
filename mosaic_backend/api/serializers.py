import base64
import logging

from django.contrib.auth import get_user_model
from django.core.files.base import ContentFile
from django.shortcuts import get_object_or_404
from rest_framework import serializers
from rest_framework.validators import ValidationError

from blog.models import Post, Tag
from booking.models import Booking, GuestReservation
from carousel.models import MainCarouselItem
from crm_app.models import EmailMainForm, FeedbackRequest, GiftCert
from favorite.models import FavoriteArtwork
from gallery.models import Artwork
from masterclass.models import (Masterclass, MasterclassCategory,
                                MasterclassType)
from mosaic.business_logic import BusinessLogic
from school.models import Advatage, Approach, Question, Review, School

User = get_user_model()

logging.basicConfig(format='%(message)s')
log = logging.getLogger(__name__)


class Base64ImageField(serializers.ImageField):
    def to_internal_value(self, data):
        if isinstance(data, str) and data.startswith('data:image'):
            format, imgstr = data.split(';base64,')
            ext = format.split('/')[-1]
            data = ContentFile(base64.b64decode(imgstr), name='temp.' + ext)
        return super().to_internal_value(data)


class RequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeedbackRequest
        fields = ['name', 'phone_num', 'comment', 'contact_consent']
        extra_kwargs = {'contact_consent': {'required': True},
                        'comment': {'required': True}}


class MainCarouselSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = MainCarouselItem
        fields = ['link', 'title', 'text', 'button', 'order', 'image', ]

    def get_image(self, carousel_item: MainCarouselItem) -> str:
        return f'{carousel_item.image.url}'


class GiftCertSerializer(serializers.ModelSerializer):
    '''
    Expects amount, sender's name and email, recepient's name and email
    Generates a 6-symbols (digits and letters) code as the ID and sets status
    to issued.
    '''

    class Meta:
        model = GiftCert
        fields = [
            'amount',
            'name_sender',
            'email_sender',
            'name_recepient',
            'email_recipient',
        ]


class ArtworkSerializer(serializers.ModelSerializer):
    images = serializers.SerializerMethodField()
    is_for_sale = serializers.SerializerMethodField()

    class Meta:
        model = Artwork
        fields = [
            'id', 'title', 'author', 'author_type',
            'is_for_sale', 'price',
            'dimensions', 'material', 'description',
            'images', 'add_date', 'is_in_stock', 'is_replica_available'
        ]

    def get_images(self, artwork: Artwork):
        images_list = artwork.images.all()
        log.info('testing', images_list)
        # return f'{masterclas_type_item.image.url}'
        if images_list:
            return [image.image.url for image in images_list]
        return None

    def get_is_for_sale(self, artwork: Artwork) -> bool:
        if artwork.price:
            return True
        return False

    # def get_custom_ordering(self, artwork: Artwork) -> int:
    #     try:
    #         ordering = ArtworkMainPage.objects.get(
    #             artwork=artwork).custom_ordering
    #         if ordering is not None:
    #             return ordering
    #         return None
    #     except Exception as er:
    #         logging.error(er, exc_info=True)

    # def get_is_on_main(self, artwork: Artwork) -> bool:
    #     if ArtworkMainPage.objects.filter(artwork=artwork).exists():
    #         return True
    #     return False


class FavoriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = FavoriteArtwork
        fields = ['who_favorited', 'favorited_artwork']

    def create(self, validated_data):
        user_id = self.context["who_favorited"].id
        artwork_id = self.context["favorited_artwork"].id
        if FavoriteArtwork.objects.filter(who_favorited_id=user_id,
                                          favorited_artwork_id=artwork_id):
            raise serializers.ValidationError('You cannot add the artwork'
                                              'to favorites twice')
        favorite_artwork = FavoriteArtwork.objects.create(
            who_favorited_id=user_id,
            favorited_artwork_id=artwork_id)
        favorite_artwork.save()
        return favorite_artwork


class EmailMainSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailMainForm
        fields = ['email']


class MasterclassCategoryFilterSerializer(serializers.ModelSerializer):
    class Meta:
        model = MasterclassCategory
        fields = ['category_filter', 'name', 'slug']


class MasterclassSerializer(serializers.ModelSerializer):
    num_of_guests = serializers.SerializerMethodField()
    teacher_id = serializers.PrimaryKeyRelatedField(
        source='teacher.id', read_only=True)
    teacher_first_name = serializers.CharField(
        source='teacher.first_name', read_only=True)
    teacher_last_name = serializers.CharField(
        source='teacher.last_name', read_only=True)

    class Meta:
        model = Masterclass
        fields = [
            'id', 'title', 'price', 'currency', 'time_start', 'time_end',
            'num_of_guests',
            'teacher_id', 'teacher_first_name', 'teacher_last_name'
        ]
        read_only_fields = [
            'title',
            'price',
            'time_start',
            'time_end',
            'num_of_guests',
        ]

    def get_num_of_guests(self, masterclass) -> int:
        return (
            sum((Booking.objects.filter(
                masterclass=masterclass).count(),
                GuestReservation.objects.filter(
                attending=masterclass).count()))
        )


class MasterclassTypeSerializer(serializers.ModelSerializer):
    masterclasses = MasterclassSerializer(many=True, read_only=True)
    image = serializers.SerializerMethodField()

    class Meta:
        model = MasterclassType
        fields = [
            'id', 'title', 'slug', 'max_guests', 'duration',
            'short_description', 'full_description', 'image',
            'masterclasses',

        ]
        read_only_fields = [
            'id', 'type', 'slug', 'max_guests',
            'duration', 'short_description', 'full_description',
            'masterclasses',
        ]

    def get_image(self, masterclas_type_item: MasterclassType) -> str:
        return f'{masterclas_type_item.image.url}'


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ['masterclass']
        extra_kwargs = {
            'masterclass': {'required': True},
        }

    def create(self, validated_data) -> Booking:
        return Booking.objects.create(
            guest=self.context['user'],
            masterclass=validated_data.get('masterclass'))

    def validate(self, data):
        masterclass = get_object_or_404(
            Masterclass,
            id=self.context['request'].data['masterclass'])
        if self.context['request'].method == 'POST':
            if Booking.objects.filter(guest__id=self.context['user'].id,
                                      masterclass=masterclass).exists():
                raise ValidationError('You cannot book the same masterclass')
        return data


class TagReadOnlySerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'title', 'slug']


class PostSerializer(serializers.ModelSerializer):
    author = serializers.SerializerMethodField()
    image = serializers.SerializerMethodField()
    tags = TagReadOnlySerializer(many=True)

    class Meta:
        model = Post
        fields = [
            'id', 'slug', 'title', 'read_time', 'preview_text',
            'text', 'pub_date', 'author', 'image', 'tags',
        ]
        read_only_fields = ['id', 'pub_date', 'author']
        extra_kwargs = {'text': {'required': True}, }

    def get_author(self, post: Post) -> str:
        author = get_object_or_404(User, id=post.author.id)
        if not (author.first_name or author.last_name):
            return BusinessLogic.ADMIN_NAME
        if author.last_name:
            return f'{author.first_name} {author.last_name}'
        return author.first_name

    def get_image(self, post: Post) -> str:
        return f'{post.image.url}'


class AdvantagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Advatage
        fields = ['id', 'title', 'description']


class QuestionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['id', 'question', 'answer']


class ApproachSerializer(serializers.ModelSerializer):
    class Meta:
        model = Approach
        fields = ['id', 'title', 'description']


class ReviewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['id', 'student_name', 'photo', 'title', 'review', 'pub_date']


class SchoolSerializer(serializers.ModelSerializer):
    advantages = AdvantagesSerializer(many=True)
    questions = QuestionsSerializer(many=True)
    approach = ApproachSerializer(many=True)

    class Meta:
        model = School
        fields = [
            'name', 'logo', 'full_description', 'short_description',
            'address_text', 'address_link', 'working_hours',
            'phone', 'email', 'facebook_link', 'tg_link', 'instagram_link',
            'advantages', 'questions', 'approach',
        ]
