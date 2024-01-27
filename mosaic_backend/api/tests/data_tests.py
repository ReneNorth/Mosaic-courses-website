import datetime

link = "tessera.hopto.org"

tag1_args = {'slug': 'glass', 'title': 'glass'}
tag2_args = {'slug': 'rome', 'title': 'rome'}

post1_args = {'title': 'test_title', 'slug': 'test_slug',
              'preview_text': 'Some preview text!',
              'text': 'Some post text', 'read_time': 10, 'image': '/image'}
post2_args = {'title': 'test_title2', 'slug': 'test_slug2',
              'preview_text': 'Some preview text! 2',
              'text': 'Some post text 2', 'read_time': 15, 'image': '/image'}


author1_args = {"email": "testmail11@mai.com",
                "phone": "+77778888922",
                "password": "asd@111mai11.com",
                "first_name": "test1",
                "last_name": "test1",
                "general_agreement": "True",
                "markcomm_agreement": "False"}


masterclass_type = {
    'title': 'title',
    'slug': 'slug',
    'image': '/image',
    'max_guests': 5,
    'duration': 5,
    'short_description': 'short_description',
    'full_description': 'full_description',
}

masterclass = {
    'title': 'title',
    'price': 100000,
    'currency': 'тенге',
    'time_start': datetime.datetime.now(tz=datetime.timezone.utc) + datetime.timedelta(hours=1),
    'time_end': datetime.datetime.now(tz=datetime.timezone.utc) + datetime.timedelta(hours=2),
    'teacher': 'short_description',
}

teacher = {"email": "teacher@mail.com",
           "phone": "+77778888333",
           "password": "asd@111mai11.com",
           "first_name": "teacher",
           "last_name": "teaches",
           "general_agreement": "True",
           "markcomm_agreement": "False"}
