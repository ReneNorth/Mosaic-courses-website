import { classNames } from '../../helpers/classNames';
import cls from './MyMasterclassesPage.module.scss';
import Calendar from '../../components/Calendar/Calendar';
import { MyMasterclassesHeaderLinks } from '../../components/MyMasterclassesHeaderLink/MyMasterclassesHeaderLinks';

export const MyMasterclassesPage = () => {
  return (
    <>
      <Calendar />
      <ul className={classNames(cls.list, {}, [])}>
        <MyMasterclassesHeaderLinks />
      </ul>
    </>
  );
};
