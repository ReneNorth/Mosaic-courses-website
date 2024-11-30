import { PromoSectionWithoutImage } from '../PromoSectionWithoutImage/PromoSectionWithoutImage';

export const GalleryPromo = () => {
  const promoSectionTitle = (
    <>
      Галерея работ
      <br />
      учеников и преподавателей
      <br />
      <span>студии Tessera&nbsp;</span>
    </>
  );

  const promoSectionText = (
    <>
      Некоторые из работ вы можете купить.
    </>
  );

  return (
    <PromoSectionWithoutImage
      title={promoSectionTitle}
      text={promoSectionText}
    />
  );
};
