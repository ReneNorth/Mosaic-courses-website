import { classNames } from '../../helpers/classNames';
import { Logo } from '../Logo/Logo';
import { NavBar } from '../NavBar/NavBar';
import { UserBar } from '../UserBar/UserBar';
import cls from './Header.module.scss';

export const Header = () => {
  return (
    <header className={classNames(cls.section, {}, [])}>
      <div className={cls.logoWrapper}>
        <Logo />
      </div>
      <NavBar isMobile={false} />
      <UserBar />
    </header>
  );
};
