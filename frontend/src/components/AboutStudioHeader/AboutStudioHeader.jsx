import cls from './AboutStudioHeader.module.scss';
import indicator from '../../images/indicator.svg';
import { PromoSection } from '../PromoSection/PromoSection';
import promoImg from '../../images/sboutStudioPromo.png';
import imgBg from '../../images/aboutStudioDecor.png';

export const AllStudioHeader = () => {
  return (
    <>
      <PromoSection
        img={promoImg}
        imgBg={imgBg}
        btnText="Записаться на мастеркласс"
      >
        <h1 className={cls.title}>
          О студии мозаики&nbsp;
          <br />
          <span className={cls.span}>Tessera</span>
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
              О студии
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
