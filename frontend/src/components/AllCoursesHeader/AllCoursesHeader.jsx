import cls from './AllCoursesHeader.module.scss';
import indicator from '../../images/indicator.svg';
import { PromoSection } from '../PromoSection/PromoSection';
import promoImg from '../../images/AllCoursesPromo.png';
import imgBg from '../../images/AllCoursesDecor.png';

export const AllCoursesHeader = () => {
  return (
    <PromoSection
      img={promoImg}
      imgBg={imgBg}
      isBtn={false}
    >
      <h1 className={cls.title}>
        Курсы мозаики в студии&nbsp;
        <span className={cls.span}>&quot;Под горой&quot;</span>
      </h1>
      <p className={cls.description}>
        Единственная в Казахстане студия римской мозаики.
      </p>
      <p className={cls.description}>
        Научим создавать античные шедевры на мастер-классах и украсим ваш
        дом оригинальными арт-объектами.
      </p>
    </PromoSection>
  );
};
