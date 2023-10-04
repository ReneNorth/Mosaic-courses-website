import { NavLink } from 'react-router-dom';
import { classNames } from '../../helpers/classNames';
import cls from './NavBar.module.scss';

export const NavBar = ({ isMobile = false, handleClick }) => {
  return (
    <nav className={classNames(cls.container, {}, [isMobile ? cls.container_mobile : ''])}>
      <ul className={classNames(cls.list, {}, [])}>
        <li className={classNames(cls.item, {}, [])}>
          <NavLink
            to="/about"
            className={({ isActive }) => classNames(cls.link, { [cls.linkActive]: isActive }, [])}
            onClick={handleClick || (() => { })}
          >
            О студии
          </NavLink>
        </li>
        <li className={classNames(cls.item, {}, [])}>
          <NavLink
            to="/certificates"
            className={({ isActive }) => classNames(cls.link, { [cls.linkActive]: isActive }, [])}
            onClick={handleClick || (() => { })}
          >
            Подарочный сертификат
          </NavLink>
        </li>
        <li className={classNames(cls.item, {}, [])}>
          <NavLink
            to="/courses"
            className={({ isActive }) => classNames(cls.link, { [cls.linkActive]: isActive }, [])}
            onClick={handleClick || (() => { })}
          >
            Курсы
          </NavLink>
        </li>
        {/* temporary disabled until the features will be delivered */}
        {/* <li className={classNames(cls.item, {}, [])}>
          <NavLink to="/gallery" className={classNames(cls.link, {}, [])} onClick={handleClick || (() => {})}>
            Галерея
          </NavLink>
        </li>
        <li className={classNames(cls.item, {}, [])}>
          <NavLink to="/shop" className={classNames(cls.link, {}, [])} onClick={handleClick || (() => {})}>
            Магазин
          </NavLink>
        </li> */}
        <li className={classNames(cls.item, {}, [])}>
          <NavLink
            to="/blog"
            className={({ isActive }) => classNames(cls.link, { [cls.linkActive]: isActive }, [])}
            onClick={handleClick || (() => { })}
          >
            Блог
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
