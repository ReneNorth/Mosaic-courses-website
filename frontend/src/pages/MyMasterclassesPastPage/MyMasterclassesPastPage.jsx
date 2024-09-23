import { classNames } from '../../helpers/classNames';
import cls from './MyMasterclassesPastPage.module.scss';
import Calendar from '../../components/Calendar/Calendar';
import { MyMasterclassesHeaderLinks } from '../../components/MyMasterclassesHeaderLink/MyMasterclassesHeaderLinks';
import MasterclassList from '../../components/MasterclassCard/MasterclassCard';
import { masterclasses } from '../../utils/consts/mockMasterclasses';

export const MyMasterclassesPastPage = () => {
  return (
    <>
      <Calendar />
      <ul className={classNames(cls.list, {}, [])}>
        <MyMasterclassesHeaderLinks />
      </ul>
      <MasterclassList masterclasses={masterclasses} />
    </>
  );
};
