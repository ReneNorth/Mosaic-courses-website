import { NavLink } from 'react-router-dom';
import { classNames } from '../../helpers/classNames';
import cls from './MyMasterclassesPage.module.scss';
import Calendar from '../../components/Calendar/Calendar';
import { MyMasterclassesHeaderLinks } from '../../components/MyMasterclassesHeaderLinks/MyMasterclassesHeaderLinks';
import MasterclassList from '../../components/MasterclassList/MasterclassList';
import { masterclasses } from '../../utils/consts/mockMasterclasses';
import { ENDPOINTS } from '../../utils/consts/constants';
import { CardMoreContent } from '../../components/CardMoreContent/CardMoreContent';

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