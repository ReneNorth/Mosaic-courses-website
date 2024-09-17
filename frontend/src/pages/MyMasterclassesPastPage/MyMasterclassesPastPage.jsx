import { classNames } from '../../helpers/classNames';
import cls from './MyMasterclassesPastPage.module.scss';
import Calendar from '../../components/Calendar/Calendar';
import { MyMasterclassesHeaderLinks } from '../../components/MyMasterclassesHeaderLink/MyMasterclassesHeaderLinks';

export const MyMasterclassesPastPage = () => {
  return (
    <>
      <Calendar />
      <ul className={classNames(cls.list, {}, [])}>
        <MyMasterclassesHeaderLinks />
      </ul>
    </>
  );
};
