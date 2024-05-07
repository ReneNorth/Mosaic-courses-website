import { classNames } from '../../helpers/classNames';
import { Logo } from '../Logo/Logo';
import { NavBar } from '../NavBar/NavBar';
import { UserBar } from '../UserBar/UserBar';
import cls from './Header.module.scss';
import { useResize } from '../../hooks/useResize';

export const Header = () => {
  const { isDesktopWidth } = useResize();

  return (
    <header className={classNames(cls.section, {}, [])}>
      <Logo />
      {isDesktopWidth && <NavBar />}
      <UserBar />
    </header>
  );
};
