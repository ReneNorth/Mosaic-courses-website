import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { classNames } from '../../helpers/classNames';
import cls from './UserBar.module.scss';
import { HamburgerMenu } from '../HamburgerMenu/HamburgerMenu';
import { ProfileModal } from '../ProfileModal/ProfileModal';
import IconProfile from '../../images/UserbarProfile.jsx';
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
        <li className={cls.item}>
          <button
            className={classNames(cls.button, {}, [cls.search])}
            type="button"
            aria-label="Поиск"
          />
        </li>
        <li
          className={classNames(
            cls.item__profile,
            { [cls.active]: pathname.startsWith('/profile') },
            [],
          )}
        >
          <button
            type="button"
            aria-label="Открыть профиль"
            onClick={openProfileModal}
            className={cls.button}
          >
            <IconProfile />
          </button>
          <ProfileModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </li>
        <li className={cls.item}>
          <Link
            className={classNames(cls.link, {}, [cls.heart])}
            to={ENDPOINTS.FAVOURITES_PAGE}
          />
        </li>
        <li className={cls.item}>
          <Link
            className={classNames(cls.link, {}, [cls.cart])}
            to={ENDPOINTS.CART}
          />
        </li>
        {!isDesktopWidth && (
          <li className={cls.item}>
            <button
              className={classNames(cls.button, {}, [cls.hamburger])}
              type="button"
              onClick={openHamburgerMenu}
              aria-label="Открыть меню навигации"
            />
          </li>
        )}
      </ul>
    </>
  );
};
