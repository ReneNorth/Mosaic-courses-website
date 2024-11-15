import { useState, useCallback } from 'react';
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
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setHamburgerMenuOpen((prev) => !prev);
  };

  const toggleProfileModal = useCallback(() => {
    setIsProfileModalOpen((prev) => !prev);
  }, []);

  const { pathname } = useLocation();

  return (
    <>
      {hamburgerMenuOpen && <HamburgerMenu handleClick={toggleHamburgerMenu} />}
      <ul className={cls.list}>
        <div className={cls.decoration} />
        {isDesktopWidth && (
          <li className={cls.item}>
            <button className={cls.button} type="button" aria-label="Поиск">
              <SearcLogo className={cls.icon} />
            </button>
          </li>
        )}
        <li className={cls.item}>
          <button
            type="button"
            aria-label="Открыть профиль"
            onClick={toggleProfileModal}
            className={cls.button}
          >
            <ProfileLogo
              className={classNames(
                cls.icon,
                { [cls.active]: pathname.startsWith(ENDPOINTS.profile) || isProfileModalOpen },
                [],
              )}
            />
          </button>
          <ProfileModal
            isOpen={isProfileModalOpen}
            onClose={toggleProfileModal}
          />
        </li>
        {isDesktopWidth && (
          <li className={cls.item}>
            <NavLink to={ENDPOINTS.favourites} className={cls.link}>
              <HeartLogo className={cls.icon} />
            </NavLink>
          </li>
        )}
        <li className={cls.item}>
          <NavLink to={ENDPOINTS.cart} className={cls.link}>
            <CartLogo className={cls.icon} />
          </NavLink>
        </li>
        {!isDesktopWidth && (
          <li>
            <button
              className={cls.button}
              type="button"
              onClick={toggleHamburgerMenu}
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
