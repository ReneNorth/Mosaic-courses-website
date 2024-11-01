import { useEffect, useState } from 'react';
import { classNames } from '../../helpers/classNames';
import cls from './MyMasterclassesPastPage.module.scss';
import Calendar from '../../components/CalendarUserAccount/CalendarUserAccount';
import { MyMasterclassesHeaderLinks } from '../../components/MyMasterclassesHeaderLinks/MyMasterclassesHeaderLinks';
// import { masterclasses } from '../../utils/consts/mockMasterclasses';
import MasterclassList from '../../components/MasterclassList/MasterclassList';
import { CardMoreContent } from '../../components/CardMoreContent/CardMoreContent';
import { api } from '../../utils/api';

export const MyMasterclassesPastPage = () => {
  const message = (
    <p className={cls.text}>
      Нет прошедших занятий
    </p>
  );

  const showPopupButton = false;
  const isEventPast = true;

  const [masterclasses, setMasterclasses] = useState([]);

  const fetchPastCourses = async () => {
    try {
      const data = await api.getUserPastCourses();
      setMasterclasses(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPastCourses();
  }, []);

  return (
    <>
      <div className={cls.flexContainer}>
        <div className={cls.calendarContainer}>
          <Calendar />
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
