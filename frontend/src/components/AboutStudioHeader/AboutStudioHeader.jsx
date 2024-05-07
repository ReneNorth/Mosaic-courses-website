import { PromoSection } from '../PromoSection/PromoSection';
import promoImg from '../../images/sboutStudioPromo.png';
import imgBg from '../../images/aboutStudioDecor.png';
import { Button } from '../Button/Button';

export const AllStudioHeader = ({ setIsOpen }) => {
  const promoSectionTitle = (
    <>
      О студии мозаики
      <br />
      <span>Tessera</span>
    </>
  );

  const promoSectionText = (
    <>
      Единственная в Казахстане студия римской мозаики.
      <br />
      <br />
      Научим создавать античные шедевры на мастер-классах и украсим ваш дом
      оригинальными арт-объектами.
    </>
  );

  const promoSectionOtherElements = (
    <Button className="fill" decoration="black" onClick={() => setIsOpen(true)}>
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
