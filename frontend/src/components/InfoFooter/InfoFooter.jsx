/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import { Link } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import { MailingForm } from '../MailingForm/MailingForm';
import cls from './InfoFooter.module.scss';

export const InfoFooter = () => {
  return (
    <div className={cls.block}>
      <div className={cls.otherContainer}>
        <div className={cls.logoContainer}>
          <Logo />
          <ul className={cls.linkList}>
            <li>
              <Link className={cls.linkVk} to="https://www.vkontakte.com" />
            </li>
            <li>
              <Link className={cls.linkTg} to="https://www.telegram.com" />
            </li>
            <li>
              <Link className={cls.linkFb} to="https://www.facebook.com" />
            </li>
          </ul>
        </div>
        <nav>
          <ul className={cls.navList}>
            <li>
              <Link to="/about" className={cls.navlink}>
                О студии
              </Link>
            </li>
            <li>
              <Link to="/shop" className={cls.navlink}>
                Магазин
              </Link>
            </li>
            <li>
              <Link to="/gallety" className={cls.navlink}>
                Галерея
              </Link>
            </li>
            <li>
              <Link to="/certificates" className={cls.navlink}>
                Сертификаты
              </Link>
            </li>
            <li>
              <Link to="/courses" className={cls.navlink}>
                Курсы
              </Link>
            </li>
            <li>
              <Link to="/blog" className={cls.navlink}>
                Блог
              </Link>
            </li>
          </ul>
        </nav>
        <MailingForm />
      </div>
    </div>
  );
};
