import { ProfilePersonalData } from '../../images/ProfilePersonalData';
import { ProfileSecurity } from '../../images/ProfileSecurity';
import { ProfileAlert } from '../../images/ProfileAlert';

export const ENDPOINTS = {
  main: '/',
  course: '/course',
  blog: '/blog',
  courses: '/courses',
  certificates: '/certificates',
  gallery: '/gallery',
  about: '/about',
  cart: '/cart',
  shop: '/shop',
  favourites: '/favourites',
  test: '/test',
  register: '/register',
  activate: '/activate',
  signIn: '/sign-in',
  passwordReset: '/password-reset',
  profile: '/profile',
  profilePersonalData: '/profile/personal-data',
  profileSecurity: '/profile/security',
  profileAlert: '/profile/alert',
  myMasterclasses: '/my-masterclasses',
  myMasterclassesPast: '/my-masterclasses-past',
  notFound: '*',
};

export const CARD_CONFIG = [
  {
    cardId: 1,
    cardRoute: ENDPOINTS.profilePersonalData,
    cardIcon: <ProfilePersonalData />,
    cardTitle: 'Личные данные',
    cardText: 'Обновите свои данные и контактный телефон',
  },
  {
    cardId: 3,
    cardRoute: ENDPOINTS.profileSecurity,
    cardIcon: <ProfileSecurity />,
    cardTitle: 'Вход и безопасность',
    cardText: 'Обновите пароль, обеспечьте безопасность своего аккаунта',
  },
  {
    cardId: 4,
    cardRoute: ENDPOINTS.profileAlert,
    cardIcon: <ProfileAlert />,
    cardTitle: 'Уведомления',
    cardText: 'Выберите настройки уведомлений и способы связи',
  },
];

export const SCREEN_WIDTH = {
  desktopScreen: 1300,
  tabletScreen: 744,
  mobileScreen: 550,
};

export const MONTHS = [
  'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль',
  'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

export const GENITIVE_MOHTHS = [
  'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
  'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',
];
