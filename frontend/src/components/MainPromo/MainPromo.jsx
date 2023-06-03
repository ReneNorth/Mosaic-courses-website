import promoImg from '../../images/promo__image_ellipse.png';
import imgBg from '../../images/bird_main.png';
import { PromoSection } from '../PromoSection/PromoSection';
import cls from './MainPromo.module.scss';

export const MainPromo = ({ setIsOpen }) => {
  return (
    <PromoSection
      img={promoImg}
      imgBg={imgBg}
      btnText="Записаться на мастер-класс"
      setIsOpen={setIsOpen}
    >
      <h1 className={cls.title}>
        Мастер-классы по&nbsp;
        <span className={cls.span}>римской</span>
                  &nbsp;мозаике
      </h1>
      <p className={cls.description}>
        Научим создавать портреты и интерьерные работы в стиле римской мозаики.
      </p>
      <p className={cls.description}>
        В группах до 6 человек под присмотром преподавателя вы научитесь работать с камнем,
        выстраивать композицию и монтировать работу на деревянную основу.
      </p>
    </PromoSection>
  );
};
