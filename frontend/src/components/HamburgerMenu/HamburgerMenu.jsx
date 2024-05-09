import cls from './HamburgerMenu.module.scss';
import { Logo } from '../Logo/Logo';
import { NavBar } from '../NavBar/NavBar';

export const HamburgerMenu = ({ handleClick }) => {
  return (
    <div className={cls.menu}>
      <div className={cls.menu_heading}>
        <Logo handleClick={handleClick} />
        <button
          type="button"
          className={cls.button}
          onClick={handleClick}
          aria-label="Закрыть меню навигации"
        />
      </div>
      <NavBar handleClick={handleClick} />
    </div>
  );
};
