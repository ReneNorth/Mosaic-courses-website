import { PromoSection } from '../PromoSection-new/PromoSection';
import promoImg from '../../images/CertificatesPromo.png';
import imgBg from '../../images/CertificatesDecor.png';
import { Button } from '../Button/Button';

export const GiftCertificatesHeader = ({ scrollFunction }) => {
  const handleClick = () => {
    scrollFunction();
  };
  return (
    <PromoSection
      desktopImage={promoImg}
      mobileImage={imgBg}
      title={(
        <>
          Подарочные сертификаты
          <br />
          на занятия в школе
          <span> Tessera</span>
        </>
      )}
      text="Если вы хотите подарить новый опыт и приятные впечатления
      - выберите сертификат на занятия в Студии мозаики Tessera"
      otherElements={
        <Button className="fill" decoration="black" onClick={handleClick}>Купить сертификат</Button>
      }
    />
  );
};
