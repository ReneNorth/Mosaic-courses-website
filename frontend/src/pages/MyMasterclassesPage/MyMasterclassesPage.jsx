import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { classNames } from '../../helpers/classNames';
import { ENDPOINTS } from '../../utils/consts/constants';
import cls from './MyMasterclassesPage.module.scss';
import CalendarUserAccount from '../../components/CalendarUserAccount/CalendarUserAccount';
import { MyMasterclassesHeaderLinks } from '../../components/MyMasterclassesHeaderLinks/MyMasterclassesHeaderLinks';
import MasterclassList from '../../components/MasterclassList/MasterclassList';
import { CardMoreContent } from '../../components/CardMoreContent/CardMoreContent';
import { api } from '../../utils/api/index';

export const MyMasterclassesPage = () => {
  const message = (
    <p className={cls.text}>
      У вас нет пока записей,
      {' '}
      <NavLink to={ENDPOINTS.courses} className={cls.link}>
        приглашаем вас на ваш первый мастер класс!
      </NavLink>
    </p>
  );
  const showPopupButton = true;
  const isEventPast = false;

  const [masterclasses, setMasterclasses] = useState([]);
  const [daysMasterclasses, setDaysMasterclasses] = useState([]);

  const fetchUpcomingCourses = async () => {
    try {
      const response = await api.getUserUpcomingCourses();
      setMasterclasses(response);
      const days = response.map((x) => x.time_start);
      setDaysMasterclasses(days);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUpcomingCourses();
  }, []);

  return (
    <>
      <div className={cls.flexContainer}>
        <div className={cls.calendarContainer}>
          <CalendarUserAccount daysMasterclasses={daysMasterclasses} />
        </div>
        <div className={cls.masterclassContainer}>
          <h2 className={cls.title}>Записи на мастер-классы</h2>
          <ul className={classNames(cls.list, {}, [])}>
            <MyMasterclassesHeaderLinks />
          </ul>
          <MasterclassList
            masterclasses={masterclasses}
            message={message}
            showPopupButton={showPopupButton}
            isEventPast={isEventPast}
          />
        </div>
      </div>
      {masterclasses.length === 0 && (
        <div className={cls.wrapper}>
          <h3 className={cls.subtitle}>Также покупают</h3>
          <div className={cls.cardMoreContentContainer}>
            <CardMoreContent />
            <CardMoreContent />
            <CardMoreContent />
          </div>
        </div>
      )}
    </>
  );
};
