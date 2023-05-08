import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import cls from './Logo.module.scss';

export const Logo = () => {
  return (
    <Link to="/" className={cls.link}>
      <img src={logo} alt="Логотип" className={cls.logo} />
    </Link>
  );
};
