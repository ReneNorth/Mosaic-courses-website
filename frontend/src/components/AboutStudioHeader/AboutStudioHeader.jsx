import cls from './AboutStudioHeader.module.scss';
import indicator from '../../images/indicator.svg';
import { PromoSection } from '../PromoSection-new/PromoSection';
import promoImg from '../../images/sboutStudioPromo.png';
import imgBg from '../../images/aboutStudioDecor.png';
import { Button } from '../Button/Button';

export const AllStudioHeader = ({ setIsOpen }) => {
  return (
    <>
      <PromoSection
        desktopImage={promoImg}
        mobileImage={imgBg}
        title={(
          <>
            О студии мозаики
            <br />
            <span>Tessera</span>
          </>
        )}
        text={(
          <>
            Единственная в Казахстане студия римской мозаики.
            <br />
            <br />
            Научим создавать античные шедевры на мастер-классах и украсим ваш
            дом оригинальными арт-объектами.
          </>
        )}
        otherElements={(
          <Button
            className="fill"
            decoration="black"
            onClick={() => setIsOpen(true)}
          >
            Записаться на мастер-класс
          </Button>
        )}
      />
      {/* <div className={cls.route}>
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
      </div> */}
    </>
  );
};
