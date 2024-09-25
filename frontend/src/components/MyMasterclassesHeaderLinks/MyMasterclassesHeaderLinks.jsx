import { NavLink } from 'react-router-dom';
import { classNames } from '../../helpers/classNames';
import cls from './MyMasterclassesHeaderLinks.module.scss';
import { ENDPOINTS } from '../../utils/consts/constants';

export const MyMasterclassesHeaderLinks = () => {
  const headerLinks = [
    {
      id: '1',
      link: ENDPOINTS.myMasterclasses,
      title: 'Будущие',
    },
    {
      id: '2',
      link: ENDPOINTS.myMasterclassesPast,
      title: 'Прошедшие',
    },
  ];
  return (
    <>
      {headerLinks.map((link) => (
        <li key={link.id} className={classNames(cls.item, {}, [])}>
          <NavLink
            className={({ isActive }) => `${cls.link} ${cls[`${isActive ? 'active' : ''}`]}`}
            to={link.link}
          >
            {link.title}
          </NavLink>
        </li>
      ))}
    </>
  );
};
