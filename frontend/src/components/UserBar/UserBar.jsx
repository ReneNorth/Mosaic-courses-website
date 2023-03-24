/* eslint-disable jsx-a11y/control-has-associated-label */
import { Link } from 'react-router-dom';
import { classNames } from '../../helpers/classNames';
import cls from './UserBar.module.scss';

export const UserBar = () => {
  return (
    <ul className={cls.list}>
      <li>
        <button className={cls.btn} type="button" />
      </li>
      <li>
        <Link className={classNames(cls.link, {}, [cls.profile])} to="/profile" />
      </li>
      <li>
        <Link className={classNames(cls.link, {}, [cls.cart])} to="/cart" />
      </li>
    </ul>
  );
};
