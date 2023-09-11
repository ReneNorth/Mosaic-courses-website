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
        {/* <div className={cls.logoContainer}> */}
        <Logo />
        <ul className={cls.linkList}>
          <li>
            <Link className={cls.linkTg} to="https://t.me/debobrova" />
          </li>
          <li>
            <Link className={cls.linkInstagram} to="https://www.instagram.com/tessera_mosaic_art/" />
          </li>
        </ul>
        {/* </div> */}
        <nav className={cls.navigation}>
          <ul className={cls.navList}>
            <li className={cls.about}>
              <Link to="/about" className={cls.navlink}>
                О студии
              </Link>
            </li>
            {/* temporary disabled */}
            {/* <li className={cls.shop}>
              <Link to="/shop" className={cls.navlink}>
                Магазин
              </Link>
            </li> */}
            {/* <li className={cls.gallery}>
              <Link to="/gallery" className={cls.navlink}>
                Галерея
              </Link>
            </li> */}
            <li className={cls.certificates}>
              <Link to="/certificates" className={cls.navlink}>
                Сертификаты
              </Link>
            </li>
            <li className={cls.courses}>
              <Link to="/courses" className={cls.navlink}>
                Курсы
              </Link>
            </li>
            <li className={cls.blog}>
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
