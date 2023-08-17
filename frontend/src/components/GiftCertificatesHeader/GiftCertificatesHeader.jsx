import cls from './GiftCertificatesHeader.module.scss';
import indicator from '../../images/indicator.svg';
import { PromoSection } from '../PromoSection-new/PromoSection';
import promoImg from '../../images/CertificatesPromo.png';
import imgBg from '../../images/CertificatesDecor.png';
import { Button } from '../Button/Button';

export const GiftCertificatesHeader = () => {
  return (
    <PromoSection
      desktopImage={promoImg}
      mobileImage={imgBg}
      title={(
        <>
          Подарочные сертификаты
          <br />
          <span>для самых любимых</span>
        </>
      )}
      text="Единственная в Казахстане студия римской мозаики.
      Научим создавать античные шедевры на мастер-классах и украсим ваш дом оригинальными арт-объектами."
      otherElements={
        <Button className="fill" decoration="black">Купить сертификат</Button>
      }
    />
  );
};
