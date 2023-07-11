import imageTwo from '../../images/about-us_img-two.png';
import imageOne from '../../images/about-us__img-rectangle.png';
import cls from './AboutUs.module.scss';
import { Button } from '../Button/Button';

export const AboutUs = ({ setIsOpen }) => {
  return (
    <section className={cls.section}>
      <div className={cls.block}>
        <div className={cls.imgContainer}>
          <div className={cls.wrapper}>
            <img className={cls.image} src={imageOne} alt="картинка" />
            <div className={cls.figureWrapper}>
              <img className={cls.figure} src={imageTwo} alt="картинка" />
              <div className={cls.figureBorder} />
            </div>
          </div>
        </div>
        <div className={cls.container}>
          <p className={cls.subtitle}>про студию</p>
          <h2 className={cls.title}>
            <span> Tessera</span>
          </h2>
          <p className={cls.description}>
            Наша студия расположена в самом центре Алматы в 3 минутах от
            Парка 28 Панфиловцев, по адресу Казыбек би, 40.
          </p>
          <p className={cls.description}>
            Преподаватель училась в московской школе Сад Гранат и
            итальянской Mosaic Art School by Luciana Notturni в Равенне.
          </p>
          <Button type="button" className="outline" onClick={() => setIsOpen(true)}>
            Узнать подробнее
          </Button>
        </div>
      </div>
    </section>
  );
};
