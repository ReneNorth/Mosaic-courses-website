import { classNames } from '../../helpers/classNames';
import cls from './MyMasterclassesPastPage.module.scss';
import Calendar from '../../components/Calendar/Calendar';
import { MyMasterclassesHeaderLinks } from '../../components/MyMasterclassesHeaderLink/MyMasterclassesHeaderLinks';
import { MasterclassCard } from '../../components/MasterclassCard/MasterclassCard';

export const MyMasterclassesPastPage = () => {
  return (
    <>
      <Calendar />
      <ul className={classNames(cls.list, {}, [])}>
        <MyMasterclassesHeaderLinks />
      </ul>
      <MasterclassCard />
    </>
  );
};
