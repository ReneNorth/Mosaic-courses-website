import { PromoSectionWithoutImage } from '../PromoSectionWithoutImage/PromoSectionWithoutImage';

export const AllCoursesHeader = () => {
  const promoSectionTitle = (
    <>
      Курсы мозаики в студии
      <br />
      <span>Tessera&nbsp;</span>
    </>
  );

  return (
    <PromoSectionWithoutImage
      title={promoSectionTitle}
    />
  );
};
