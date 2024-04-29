import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import cls from './Logo.module.scss';
import { ENDPOINTS } from '../../utils/consts/constants';

export const Logo = ({ handleClick }) => {
  return (
    <Link
      to={ENDPOINTS.MAIN}
      className={cls.link}
      onClick={handleClick}
    >
      <img src={logo} alt="На главную" className={cls.logo} />
    </Link>
  );
};
