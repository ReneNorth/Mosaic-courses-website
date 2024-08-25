class BusinessLogic():
    MIN_CERT_TG = 2000  # minimal amount of to issue a certificate
    CERT_LIFETIME_DAYS = 180  # days before the certificate will expire
    ADMIN_NAME = 'Tessera Admin'  # a nickname for a case when admin's
    #  username is missing


class DummyTeacher():
    first_name = 'Daria'
    last_name = 'Tessera'
    is_staff = True
    general_agreement = True
    role = 'teacher'
    email = 'dummy_email@mail.com'
    phone = '+77777777777'
