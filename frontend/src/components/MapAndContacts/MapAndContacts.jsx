import { Map } from '@pbe/react-yandex-maps';
import cls from './MapAndContacts.module.scss';

export const MapAndContacts = () => {
  return (
    <div className={cls.block}>
      <div className={cls.topContainer}>
        <div className={cls.mapWrapper}>
          <Map
            width={620}
            height={360}
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
            <span> с 12–22, без выходных</span>
          </p>
          <p className={cls.contactsTitle}>
            Телефон:
            <span> +7 499 955-42-62</span>
          </p>
          <p className={cls.contactsTitle}>
            Email:
            <span> info@mosaic.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};
