import { ProfilePersonalData } from '../../images/ProfilePersonalData';
// import { ProfilePayment } from '../../images/ProfilePayment';
import { ProfileSecurity } from '../../images/ProfileSecurity';
import { ProfileAlert } from '../../images/ProfileAlert';

export const ENDPOINTS = {
  MAIN: '/',
  СOURSE: '/course',
  BLOG: '/blog',
  COURSES: '/courses',
  CERTIFICATES: '/certificates',
  GALLERY: '/gallery',
  ABOUT: '/about',
  CART: '/cart',
  SHOP: '/shop',
  FAVOURITES_PAGE: '/favourites',
  REGISTER: '/register',
  ACTIVATE: '/activate',
  SIGN_IN: '/sign-in',
  PASSWORD_RESET: '/password-reset',
  PROFILE: '/profile',
  PROFILE_PERSONAL_DATA: '/profile/personal-data',
  PROFILE_SECURITY: '/profile/security',
  PROFILE_ALERT: '/profile/alert',
  NOT_FOUND: '*',
};

export const cardInfo = [
  {
    cardId: 1,
    cardRoute: ENDPOINTS.PROFILE_PERSONAL_DATA,
    cardIcon: <ProfilePersonalData />,
    cardTitle: 'Личные данные',
    cardText: 'Обновите свои данные и контактный телефон',
  },
  // {
  //   cardId: 2,
  //   cardRoute: '/profile/payment',
  //   cardIcon: <ProfilePayment />,
  //   cardTitle: 'Платёжные данные',
  //   cardText: 'Добавьте или удалите способы оплаты занятий, смотрите историю платежей',
  // },
  {
    cardId: 3,
    cardRoute: ENDPOINTS.PROFILE_SECURITY,
    cardIcon: <ProfileSecurity />,
    cardTitle: 'Вход и безопасность',
    cardText: 'Обновите пароль, обеспечьте безопасность своего аккаунта',
  },
  {
    cardId: 4,
    cardRoute: ENDPOINTS.PROFILE_ALERT,
    cardIcon: <ProfileAlert />,
    cardTitle: 'Уведомления',
    cardText: 'Выберите настройки уведомлений и способы связи',
  },
];

export const SCREEN_WIDTH = {
  DESKTOP_SCREEN: 1300,
  TABLET_SCREEN: 744,
  MOBILE_SCREEN: 550,
};
