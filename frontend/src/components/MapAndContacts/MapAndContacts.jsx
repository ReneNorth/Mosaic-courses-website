import { useEffect, useState } from 'react';
import { Map } from '@pbe/react-yandex-maps';
import cls from './MapAndContacts.module.scss';
import { useResize } from '../../hooks/useResize';
import { MailingForm } from '../MailingForm/MailingForm';
import { api } from '../../utils/api';
import { schoolContacts } from '../../utils/consts/mockData';

export const MapAndContacts = () => {
  const [schoolInfo, setSchoolInfo] = useState([{}]);

  const { width } = useResize();

  let mapWidth;
  if (width > 876) {
    mapWidth = '100%';
  } else if (width > 696) {
    mapWidth = '338px';
  } else {
    mapWidth = '89vw';
  }

  useEffect(() => {
    api.getSchoolInfo()
      .then((data) => {
        if (data.length === 0) {
          setSchoolInfo(schoolContacts);
        } else {
          setSchoolInfo(data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={cls.block}>
      <div className={cls.topContainer}>
        <div className={cls.mapWrapper}>
          <Map
            width={mapWidth}
            height="100%"
            defaultState={{ center: [43.256561, 76.949076], zoom: 15 }}
          />
        </div>
        <div className={cls.contactsWrapper}>
          <p className={cls.contactsTitle}>
            Адрес:
            {' '}
            <span>
              {' '}
              {schoolInfo[0]?.address_text}
            </span>
          </p>
          <p className={cls.contactsTitle}>
            Часы работы:
            {' '}
            <span>
              {' '}
              {schoolInfo[0]?.working_hours}
            </span>
          </p>
          <p className={cls.contactsTitle}>
            Телефон:
            {' '}
            <span>
              {' '}
              {schoolInfo[0]?.phone}
            </span>
          </p>
          <p className={cls.contactsTitle}>
            E-mail:
            <span>
              {' '}
              {schoolInfo[0]?.email}
            </span>
          </p>
        </div>
      </div>
      {width <= 876 && <MailingForm />}
    </div>
  );
};
