import { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { classNames } from '../../helpers/classNames';
import cls from './UserBar.module.scss';
import { HamburgerMenu } from '../HamburgerMenu/HamburgerMenu';
import { ProfileModal } from '../ProfileModal/ProfileModal';
import { ReactComponent as SearcLogo } from '../../images/Ic_search.svg';
import { ReactComponent as ProfileLogo } from '../../images/profile.svg';
import { ReactComponent as HeartLogo } from '../../images/heart.svg';
import { ReactComponent as CartLogo } from '../../images/Ic_shopping_bag.svg';
import { ReactComponent as HamburgerLogo } from '../../images/hamburger_menu.svg';
import { useResize } from '../../hooks/useResize.js';
import { ENDPOINTS } from '../../utils/consts/constants.js';

export const UserBar = () => {
  const { isDesktopWidth } = useResize();
  const [isOpen, setIsOpen] = useState(false);
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  const openHamburgerMenu = () => {
    setHamburgerMenuOpen(true);
  };
  const closeHamburgerMenu = () => {
    setHamburgerMenuOpen(false);
  };

  const openProfileModal = () => {
    setIsOpen(!isOpen);
  };

  const { pathname } = useLocation();

  return (
    <>
      {hamburgerMenuOpen && <HamburgerMenu handleClick={closeHamburgerMenu} />}
      <ul className={cls.list}>
        <div className={cls.decoration} />
        <li className={cls.item}>
          <button className={cls.button} type="button" aria-label="Поиск">
            <SearcLogo className={cls.icon} />
          </button>
        </li>
        <li className={cls.item}>
          <button
            type="button"
            aria-label="Открыть профиль"
            onClick={openProfileModal}
            className={cls.button}
          >
            <ProfileLogo
              className={classNames(
                cls.icon,
                { [cls.active]: pathname.startsWith(ENDPOINTS.PROFILE) },
                [],
              )}
            />
          </button>
          <ProfileModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </li>
        <li className={cls.item}>
          <NavLink to={ENDPOINTS.FAVOURITES_PAGE} className={cls.link}>
            <HeartLogo className={cls.icon} />
          </NavLink>
        </li>
        <li className={cls.item}>
          <NavLink to={ENDPOINTS.CART} className={cls.link}>
            <CartLogo className={cls.icon} />
          </NavLink>
        </li>
        {!isDesktopWidth && (
          <li>
            <button
              className={cls.button}
              type="button"
              onClick={openHamburgerMenu}
              aria-label="Открыть меню навигации"
            >
              <HamburgerLogo className={cls.icon} />
            </button>
          </li>
        )}
      </ul>
    </>
  );
};
