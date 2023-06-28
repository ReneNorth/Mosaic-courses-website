import { classNames } from '../../helpers/classNames';
import { Logo } from '../Logo/Logo';
import { NavBar } from '../NavBar/NavBar';
import { UserBar } from '../UserBar/UserBar';
import cls from './Header.module.scss';
import useScrollDirection from '../../hooks/useScrollDirection';

export const Header = () => {
  const scrollDirection = useScrollDirection();

  return (
    <header className={classNames(cls.section, {}, [scrollDirection === 'down' ? cls.section_hidden : ''])}>
      <div className={cls.logoWrapper}>
        <Logo />
      </div>
      <NavBar isMobile={false} />
      <UserBar />
    </header>
  );
};
