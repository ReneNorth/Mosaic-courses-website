import imageTwo from '../../images/about-us_img-two.png';
import imageOne from '../../images/about-us__img-rectangle.png';
import cls from './AboutUs.module.scss';

export const AboutUs = () => {
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
            Здесь
            <span> название</span>
          </h2>
          <p className={cls.description}>
            Арт-школа — мастерская в центре Ростова-на-Дону.
          </p>
          <p className={cls.description}>
            Мы проводим мастер-классы по живописи и гончарному делу для деток и
            взрослых.
          </p>
          <p className={cls.description}>
            Мы делаем рисование доступным с помощью пошаговой программы и
            вовлечённых преподавателей. Вы как ученик обязательно прочувствуете
            нашу дружескую и лёгкую атмосферу.
          </p>
          <button type="button" className={cls.btn}>
            Узнать подробнее
          </button>
        </div>
      </div>
    </section>
  );
};
