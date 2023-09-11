import base64
import logging

from blog.models import Post, Tag
from booking.models import Booking, ReservationAdmin
from carousel.models import MainCarouselItem
from crm_app.models import EmailMainForm, FeedbackRequest, GiftCert
from django.contrib.auth import get_user_model
from django.core.files.base import ContentFile
from django.shortcuts import get_object_or_404
from marketplace.models import Artwork, ArtworkMainPage
from masterclass.models import Masterclass, MasterclassType
from mosaic.business_logic import BusinessLogic
from rest_framework import serializers
from school.models import Advatage, Approach, Question, Review, School
from rest_framework.validators import ValidationError

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
        extra_kwargs = {'contact_consent': {'required': True}}


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
    custom_ordering = serializers.SerializerMethodField()
    is_on_main = serializers.SerializerMethodField()

    class Meta:
        model = Artwork
        fields = [
            'id',
            'title',
            'author',
            'author_type',
            'is_on_main',
            'is_for_sale',
            'price',
            'description',
            'custom_ordering',
        ]

    def get_custom_ordering(self, artwork: Artwork) -> int:
        try:
            ordering = ArtworkMainPage.objects.get(
                artwork=artwork).custom_ordering
            if ordering is not None:
                return ordering
            return None
        except Exception as er:
            logging.error(er, exc_info=True)

    def get_is_on_main(self, artwork: Artwork) -> bool:
        if ArtworkMainPage.objects.filter(artwork=artwork).exists():
            return True
        return False


class EmailMainSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailMainForm
        fields = ['email']


class MasterclassSerializer(serializers.ModelSerializer):
    num_of_guests = serializers.SerializerMethodField()

    class Meta:
        model = Masterclass
        fields = [
            'id', 'title', 'price', 'currency', 'time_start', 'time_end',
            'num_of_guests',
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
                ReservationAdmin.objects.filter(
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
        fields = ['guest', 'masterclass']
        extra_kwargs = {
            'guest': {'required': False},
            'masterclass': {'required': False},
        }

    def create(self, validated_data) -> Booking:
        return Booking.objects.create(
            guest=self.context['user'],
            **validated_data, )

    def validate(self, data):
        if self.context['request'].method == 'POST':
            if Booking.objects.filter(
                guest__id=self.context['user'].id,
                masterclass__id=self.context['request'].data['masterclass']
            ).exists():
                raise ValidationError(
                    'You cannot book the same masterclass')
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
            'name',
            'logo',
            'full_description',
            'short_description',
            'address_text',
            'address_link',
            'working_hours',
            'phone',
            'email',
            'facebook_link',
            'tg_link',
            'instagram_link',
            'advantages',
            'questions',
            'approach',
        ]
