import { useState } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from '../../helpers/classNames';
import cls from './UserBar.module.scss';
import { HamburgerMenu } from '../HamburgerMenu/HamburgerMenu';

export const UserBar = () => {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  const openHamburgerMenu = () => {
    setHamburgerMenuOpen(true);
  };
  const closeHamburgerMenu = () => {
    setHamburgerMenuOpen(false);
  };

  return (
    <>
      {hamburgerMenuOpen && <HamburgerMenu handleClick={closeHamburgerMenu} />}
      <ul className={cls.list}>
        <li className={cls.item}>
          <button className={cls.search} type="button" aria-label="Поиск" />
        </li>
        <li>
          <Link
            className={classNames(cls.link, {}, [cls.profile])}
            to="/profile"
          />
        </li>
        <li>
          <Link className={classNames(cls.link, {}, [cls.cart])} to="/cart" />
        </li>
        <li>
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
