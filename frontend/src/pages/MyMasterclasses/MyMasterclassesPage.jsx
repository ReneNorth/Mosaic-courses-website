import { classNames } from '../../helpers/classNames';
import cls from './MyMasterclassesPage.module.scss';
import Calendar from '../../components/Calendar/Calendar';
import { MyMasterclassesHeaderLinks } from '../../components/MyMasterclassesHeaderLink/MyMasterclassesHeaderLinks';
import MasterclassList from '../../components/MasterclassList/MasterclassList';
import { masterclasses } from '../../utils/consts/mockMasterclasses';

export const MyMasterclassesPage = () => {
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
        <MasterclassList masterclasses={masterclasses} />
      </div>
    </div>
  );
};
