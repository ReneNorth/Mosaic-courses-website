import { classNames } from '../../helpers/classNames';
import cls from './HamburgerMenu.module.scss';
import { Logo } from '../Logo/Logo';
import { NavBar } from '../NavBar/NavBar';

export const HamburgerMenu = ({ handleClick }) => {
  return (
    <div className={cls.menu}>
      <div className={cls.menu_heading}>
        <Logo />
        <button type="button" className={cls.button} onClick={handleClick} aria-label="Закрыть меню навигации" />
      </div>
      <NavBar isMobile />
    </div>
  );
};
