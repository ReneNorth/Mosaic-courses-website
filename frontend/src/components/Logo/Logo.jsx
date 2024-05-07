import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import logoM from '../../images/logoM.svg';
import cls from './Logo.module.scss';
import { ENDPOINTS } from '../../utils/consts/constants';
import { useResize } from '../../hooks/useResize';

export const Logo = ({ handleClick }) => {
  const { isMobileWidth } = useResize();
  return (
    <Link to={ENDPOINTS.main} className={cls.link} onClick={handleClick}>
      <img
        src={isMobileWidth ? logoM : logo}
        alt="На главную"
        className={cls.logo}
      />
    </Link>
  );
};
