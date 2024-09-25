import { classNames } from '../../helpers/classNames';
import cls from './MyMasterclassesPastPage.module.scss';
import Calendar from '../../components/Calendar/Calendar';
import { MyMasterclassesHeaderLinks } from '../../components/MyMasterclassesHeaderLinks/MyMasterclassesHeaderLinks';
import { masterclasses } from '../../utils/consts/mockMasterclasses';
import MasterclassList from '../../components/MasterclassList/MasterclassList';

export const MyMasterclassesPastPage = () => {
  const message = 'Нет прошедших занятий';
  return (
    <div className={cls.flexContainer}>
      <div className={cls.calendarContainer}>
        <Calendar />
      </div>
      <div className={cls.masterclassContainer}>
        <h2 className={cls.title}>Записи на мастер-классы</h2>
        <ul className={classNames(cls.list, {}, [])}>
          <MyMasterclassesHeaderLinks />
        </ul>
        <MasterclassList masterclasses={masterclasses} message={message} />
      </div>
    </div>
  );
};
