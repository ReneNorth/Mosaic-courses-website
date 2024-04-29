import promoImg from '../../images/promo__image_ellipse.png';
import imgBg from '../../images/bird_main.png';
import { PromoSection } from '../PromoSection-new/PromoSection';
import cls from './MainPromo.module.scss';
import { Button } from '../Button/Button';

export const MainPromo = ({ setIsOpen }) => {
  return (
    <PromoSection
      desktopImage={promoImg}
      mobileImage={imgBg}
      title={(
        <>
          Мастер-классы
          <br />
          по
          <span>&nbsp;римской&nbsp;</span>
          мозаике
        </>
      )}
      text={(
        <>
          Научим создавать портреты и интерьерные работы в стиле римской мозаики.
          <br />
          <br />
          В группах до 6 человек под присмотром преподавателя вы научитесь работать с камнем,
          выстраивать композицию и монтировать работу на деревянную основу.
        </>
      )}
      otherElements={
        <Button onClick={() => setIsOpen(true)} className="fill" decoration="black">Записаться на мастер-класс</Button>
      }
    />
  );
};
