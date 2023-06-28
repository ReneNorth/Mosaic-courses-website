import { NavLink } from 'react-router-dom';
import { classNames } from '../../helpers/classNames';
import cls from './NavBar.module.scss';

export const NavBar = ({ isMobile = false }) => {
  return (
    <nav className={classNames(cls.container, {}, [isMobile ? cls.container_mobile : ''])}>
      <ul className={classNames(cls.list, {}, [])}>
        <li className={classNames(cls.item, {}, [])}>
          <NavLink to="/about" className={classNames(cls.link, {}, [])}>
            О студии
          </NavLink>
        </li>
        <li className={classNames(cls.item, {}, [])}>
          <NavLink to="/certificates" className={classNames(cls.link, {}, [])}>
            Подарочные сертификаты
          </NavLink>
        </li>
        <li className={classNames(cls.item, {}, [])}>
          <NavLink to="/courses" className={classNames(cls.link, {}, [])}>
            Курсы
          </NavLink>
        </li>
        <li className={classNames(cls.item, {}, [])}>
          <NavLink to="/gallery" className={classNames(cls.link, {}, [])}>
            Галерея
          </NavLink>
        </li>
        <li className={classNames(cls.item, {}, [])}>
          <NavLink to="/shop" className={classNames(cls.link, {}, [])}>
            Магазин
          </NavLink>
        </li>
        <li className={classNames(cls.item, {}, [])}>
          <NavLink to="/blog" className={classNames(cls.link, {}, [])}>
            Блог
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
