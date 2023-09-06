import { NavLink } from 'react-router-dom';
import { classNames } from '../../helpers/classNames';
import cls from './NavBar.module.scss';

export const NavBar = ({ isMobile = false, handleClick }) => {
  return (
    <nav className={classNames(cls.container, {}, [isMobile ? cls.container_mobile : ''])}>
      <ul className={classNames(cls.list, {}, [])}>
        <li className={classNames(cls.item, {}, [])}>
          <NavLink to="/about" className={classNames(cls.link, {}, [])} onClick={handleClick || (() => {})}>
            О студии
          </NavLink>
        </li>
        <li className={classNames(cls.item, {}, [])}>
          <NavLink to="/certificates" className={classNames(cls.link, {}, [])} onClick={handleClick || (() => {})}>
            Подарочные сертификаты
          </NavLink>
        </li>
        <li className={classNames(cls.item, {}, [])}>
          <NavLink to="/courses" className={classNames(cls.link, {}, [])} onClick={handleClick || (() => {})}>
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
          <NavLink to="/blog" className={classNames(cls.link, {}, [])} onClick={handleClick || (() => {})}>
            Блог
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
