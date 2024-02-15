/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { classNames } from '../../helpers/classNames';
import cls from './UserBar.module.scss';
import { HamburgerMenu } from '../HamburgerMenu/HamburgerMenu';
import { ProfileModal } from '../ProfileModal/ProfileModal';
import IconProfile from '../../images/UserbarProfile.jsx';

export const UserBar = () => {
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
          <button className={cls.search} type="button" aria-label="Поиск" />
        </li>
        <li
          className={classNames(cls.link, { [cls.active]: pathname.startsWith('/profile') }, [])}
          onClick={openProfileModal}
        >
          <IconProfile />
          <ProfileModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </li>
        <li>
          <Link className={classNames(cls.link, {}, [cls.cart])} to="/cart" />
        </li>
        <li className={cls.hamburgerMenuButton}>
          <button
            className={cls.button}
            type="button"
            onClick={openHamburgerMenu}
            aria-label="Открыть меню навигации"
          />
        </li>
      </ul>
    </>
  );
};
