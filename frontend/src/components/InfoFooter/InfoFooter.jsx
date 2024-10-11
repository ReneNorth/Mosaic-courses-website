import { Link } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import { MailingForm } from '../MailingForm/MailingForm';
import cls from './InfoFooter.module.scss';
import { useResize } from '../../hooks/useResize';
import { ENDPOINTS } from '../../utils/consts/constants';

export const InfoFooter = () => {
  const { width } = useResize();
  return (
    <div className={cls.block}>
      <div className={cls.otherContainer}>
        <Logo />
        <ul className={cls.linkList}>
          <li>
            <Link
              className={cls.linkVk}
              to="https://www.vk.com/tessera_mosaic_art/"
            />
          </li>
          <li>
            <Link className={cls.linkTg} to="https://t.me/tesseramosaic" />
          </li>
          <li>
            <Link
              className={cls.linkFb}
              to="https://www.facebook.com/tessera_mosaic_art/"
            />
          </li>
        </ul>
        <nav className={cls.navigation}>
          <ul className={cls.navList}>
            <li className={cls.about}>
              <Link to={ENDPOINTS.about} className={cls.navlink}>
                О студии
              </Link>
            </li>
            <li className={cls.shop}>
              <Link to={ENDPOINTS.shop} className={cls.navlink}>
                Магазин
              </Link>
            </li>
            <li className={cls.gallery}>
              <Link to={ENDPOINTS.gallery} className={cls.navlink}>
                Галерея
              </Link>
            </li>
            <li className={cls.certificates}>
              <Link to={ENDPOINTS.certificates} className={cls.navlink}>
                Сертификаты
              </Link>
            </li>
            <li className={cls.courses}>
              <Link to={ENDPOINTS.courses} className={cls.navlink}>
                Курсы
              </Link>
            </li>
            <li className={cls.blog}>
              <Link to={ENDPOINTS.blog} className={cls.navlink}>
                Блог
              </Link>
            </li>
          </ul>
        </nav>
        {width > 876 && <MailingForm />}
      </div>
    </div>
  );
};
