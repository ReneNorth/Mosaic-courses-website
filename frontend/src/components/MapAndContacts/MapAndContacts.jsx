import { Map } from '@pbe/react-yandex-maps';
import cls from './MapAndContacts.module.scss';

export const MapAndContacts = () => {
  return (
    <div className={cls.block}>
      <div className={cls.topContainer}>
        <div className={cls.mapWrapper}>
          <Map
            width="100%"
            height="100%"
            defaultState={{ center: [43.256561, 76.949076], zoom: 15 }}
          />
        </div>
        <div className={cls.contactsWrapper}>
          <p className={cls.contactsTitle}>
            Адрес:
            <span> г. Алматы, Казыбек би, 40</span>
          </p>
          <p className={cls.contactsTitle}>
            Часы работы:
            <span> Cвяжитесь с нами, чтобы узнать расписание занятий</span>
          </p>
          {/* temporary disabled */}
          {/* <p className={cls.contactsTitle}>
            Телефон:
            <span> +7 499 955-42-62</span>
          </p> */}
          <p className={cls.contactsTitle}>
            E-mail:
            <span> info@mosaic.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};
