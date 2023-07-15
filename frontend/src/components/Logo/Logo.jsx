import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import cls from './Logo.module.scss';

export const Logo = ({ handleClick }) => {
  return (
    <Link to="/" className={cls.link} onClick={handleClick || (() => {})}>
      <img src={logo} alt="Логотип" className={cls.logo} />
    </Link>
  );
};
