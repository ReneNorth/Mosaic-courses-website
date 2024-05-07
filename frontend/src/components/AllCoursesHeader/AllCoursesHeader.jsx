import cls from './AllCoursesHeader.module.scss';
import { classNames } from '../../helpers/classNames';
import { ArcPageDecoration } from '../ArcPageDecoration/ArcPageDecoration';
import promoImg from '../../images/AllCoursesPromo.png';

export const AllCoursesHeader = () => {
  return (
    <section className={cls.section}>
      <div className={cls.block}>
        <h1 className={cls.title}>
          Курсы по мозаике в студии
          <span className={cls.span}>«Под горой»</span>
        </h1>
        <p className={cls.description}>
          Единственная в Казахстане студия римской мозаики.
        </p>
        <p className={classNames(cls.description, {}, [cls.descriptionText])}>
          Научим создавать античные шедевры на мастер-классах и украсим ваш дом
          оригинальными арт-объектами.
        </p>
      </div>
      <div className={cls.decorationWrapper}>
        <ArcPageDecoration decorationImage={promoImg} />
      </div>
    </section>
  );
};
