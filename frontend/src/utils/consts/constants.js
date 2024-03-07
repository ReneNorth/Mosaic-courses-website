import { ProfilePersonalData } from '../../images/ProfilePersonalData';
// import { ProfilePayment } from '../../images/ProfilePayment';
import { ProfileSecurity } from '../../images/ProfileSecurity';
import { ProfileAlert } from '../../images/ProfileAlert';

export const cardInfo = [{
  cardId: 1,
  cardRoute: '/profile/personal-data',
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
  cardRoute: '/profile/security',
  cardIcon: <ProfileSecurity />,
  cardTitle: 'Вход и безопасность',
  cardText: 'Обновите пароль, обеспечьте безопасность своего аккаунта',
},
{
  cardId: 4,
  cardRoute: '/profile/alert',
  cardIcon: <ProfileAlert />,
  cardTitle: 'Уведомления',
  cardText: 'Выберите настройки уведомлений и способы связи',
}];
