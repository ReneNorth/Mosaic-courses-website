import { NavLink } from 'react-router-dom';
import { classNames } from '../../helpers/classNames';
import cls from './NavBar.module.scss';
import { ENDPOINTS } from '../../utils/consts/constants';
import { useResize } from '../../hooks/useResize.js';
import { SearchForm } from '../SearchForm/SearchForm.jsx';

export const NavBar = ({ handleClick }) => {
  const { isDesktopWidth } = useResize();

  return (
    <nav className={cls.container}>
      {!isDesktopWidth && (
        <SearchForm />
      )}
      <ul className={cls.list}>
        <li className={cls.item}>
          <NavLink
            to={ENDPOINTS.about}
            className={({ isActive }) => classNames(cls.link, { [cls.linkActive]: isActive }, [])}
            onClick={handleClick}
          >
            О студии
          </NavLink>
        </li>
        <li className={cls.item}>
          <NavLink
            to={ENDPOINTS.certificates}
            className={({ isActive }) => classNames(cls.link, { [cls.linkActive]: isActive }, [])}
            onClick={handleClick}
          >
            Подарочные сертификаты
          </NavLink>
        </li>
        <li className={cls.item}>
          <NavLink
            to={ENDPOINTS.courses}
            className={({ isActive }) => classNames(cls.link, { [cls.linkActive]: isActive }, [])}
            onClick={handleClick}
          >
            Курсы
          </NavLink>
        </li>
        <li className={cls.item}>
          <NavLink
            to={ENDPOINTS.gallery}
            className={({ isActive }) => classNames(cls.link, { [cls.linkActive]: isActive }, [])}
            onClick={handleClick}
          >
            Галерея
          </NavLink>
        </li>
        <li className={cls.item}>
          <NavLink
            to={ENDPOINTS.blog}
            className={({ isActive }) => classNames(cls.link, { [cls.linkActive]: isActive }, [])}
            onClick={handleClick}
          >
            Блог
          </NavLink>
        </li>
        {!isDesktopWidth && (
          <li className={cls.item}>
            <NavLink
              to={ENDPOINTS.favourites}
              className={({ isActive }) => classNames(cls.link, { [cls.linkActive]: isActive }, [])}
              onClick={handleClick}
            >
              Избранное
            </NavLink>
          </li>
        )}
        <li className={cls.item}>
          <NavLink
            to={ENDPOINTS.shop}
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
