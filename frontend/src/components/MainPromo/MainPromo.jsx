import promoImg from '../../images/promo__image_ellipse.png';
import imgBg from '../../images/bird_main.png';
import { PromoSection } from '../PromoSection/PromoSection';
import { Button } from '../Button/Button';

export const MainPromo = ({ setIsOpen }) => {
  const promoSectionTitle = (
    <>
      Мастер-классы
      <br />
      по
      <span>&nbsp;римской&nbsp;</span>
      мозаике
    </>
  );

  const promoSectionText = (
    <>
      Научим создавать портреты и интерьерные работы в стиле римской мозаики.
      <br />
      <br />
      В группах до 6 человек под присмотром преподавателя вы научитесь
      работать с камнем, выстраивать композицию и монтировать работу на
      деревянную основу.
    </>
  );

  const promoSectionOtherElements = (
    <Button onClick={() => setIsOpen(true)} className="fill" decoration="black">
      Записаться на мастер-класс
    </Button>
  );

  return (
    <PromoSection
      desktopImage={promoImg}
      mobileImage={imgBg}
      title={promoSectionTitle}
      text={promoSectionText}
      otherElements={promoSectionOtherElements}
    />
  );
};
