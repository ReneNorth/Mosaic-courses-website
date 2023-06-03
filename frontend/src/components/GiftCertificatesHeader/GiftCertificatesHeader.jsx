import cls from './GiftCertificatesHeader.module.scss';
import indicator from '../../images/indicator.svg';
import { PromoSection } from '../PromoSection/PromoSection';
import promoImg from '../../images/CertificatesPromo.png';
import imgBg from '../../images/CertificatesDecor.png';

export const GiftCertificatesHeader = () => {
  return (
    <>
      <PromoSection
        img={promoImg}
        imgBg={imgBg}
        btnText="Купить сертификат"
      >
        <h1 className={cls.title}>
          Подарочные сертификаты&nbsp;
          <span className={cls.span}>&quot;для самых любимых&quot;</span>
        </h1>
        <p className={cls.description}>
          Единственная в Казахстане студия римской мозаики.
        </p>
        <p className={cls.description}>
          Научим создавать античные шедевры на мастер-классах и украсим ваш
          дом оригинальными арт-объектами.
        </p>
      </PromoSection>
      <div className={cls.route}>
        <ul className={cls.routeItems}>
          <li>
            <a href="!#" className={cls.routeItem}>
              Главная
            </a>
          </li>
          <li>
            <a href="!#" className={cls.routeItem}>
              <img
                className={cls.indicator}
                src={indicator}
                alt="Промо картинка"
              />
            </a>
          </li>
          <li>
            <a href="!#" className={cls.routeItemGreen}>
              {' '}
              Сертификаты
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
