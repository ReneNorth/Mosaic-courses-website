import { NavLink } from 'react-router-dom';
import cls from './ProfileNavMenu.module.scss';
import { classNames } from '../../helpers/classNames';
import { CARD_CONFIG } from '../../utils/consts/constants';

export const ProfileNavMenu = () => {
  return (
    <nav className={cls.block}>
      <ul className={cls.list}>
        {CARD_CONFIG?.map((element) => (
          <li className={cls.item} key={element.cardId}>
            <NavLink
              to={element.cardRoute}
              className={({ isActive }) => classNames(cls.link, { [cls.linkActive]: isActive }, [])}
            >
              <div className={cls.icon}>
                {element.cardIcon}
              </div>
              <h4 className={cls.title}>{element.cardTitle}</h4>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
