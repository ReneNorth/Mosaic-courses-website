import { NavLink } from 'react-router-dom';
import { classNames } from '../../helpers/classNames';
import cls from './NavBar.module.scss';
import { ENDPOINTS } from '../../utils/consts/constants';

export const NavBar = ({ handleClick }) => {
  return (
    <nav className={cls.container}>
      <ul className={cls.list}>
        <li className={cls.item}>
          <NavLink
            to={ENDPOINTS.ABOUT}
            className={({ isActive }) => classNames(cls.link, { [cls.linkActive]: isActive }, [])}
            onClick={handleClick}
          >
            О студии
          </NavLink>
        </li>
        <li className={cls.item}>
          <NavLink
            to={ENDPOINTS.CERTIFICATES}
            className={({ isActive }) => classNames(cls.link, { [cls.linkActive]: isActive }, [])}
            onClick={handleClick}
          >
            Подарочный сертификат
          </NavLink>
        </li>
        <li className={cls.item}>
          <NavLink
            to={ENDPOINTS.COURSES}
            className={({ isActive }) => classNames(cls.link, { [cls.linkActive]: isActive }, [])}
            onClick={handleClick}
          >
            Курсы
          </NavLink>
        </li>
        <li className={cls.item}>
          <NavLink
            to={ENDPOINTS.GALLERY}
            className={({ isActive }) => classNames(cls.link, { [cls.linkActive]: isActive }, [])}
            onClick={handleClick}
          >
            Галерея
          </NavLink>
        </li>
        <li className={cls.item}>
          <NavLink
            to={ENDPOINTS.BLOG}
            className={({ isActive }) => classNames(cls.link, { [cls.linkActive]: isActive }, [])}
            onClick={handleClick}
          >
            Блог
          </NavLink>
        </li>
        <li className={cls.item}>
          <NavLink
            to={ENDPOINTS.SHOP}
            className={({ isActive }) => classNames(cls.link, { [cls.linkActive]: isActive }, [])}
            onClick={handleClick}
          >
            Магазин
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
