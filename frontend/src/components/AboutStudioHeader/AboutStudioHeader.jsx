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
  /* eslint-disable max-len */
  const promoSectionText = (
    <>
      В нашей студии вы освоите технику создания мозаики из камня, стекла, смальты и других материалов.
      <br />
      <br />
      Под руководством опытных мастеров вы не только создадите мозаику, но и приобретете навык, который сможете развивать самостоятельно.
      <br />
      <br />
      Мозика - это древнее ремесло, уходящее корнями в культуру Древнего Рима, позволяет создать уникальные произведения искусства, сохраняя традиции прошлого.
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
