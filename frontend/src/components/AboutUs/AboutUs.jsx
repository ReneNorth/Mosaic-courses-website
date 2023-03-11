import imageOne from '../../images/Frame14.png';
import imageTwo from '../../images/Frame15.png';
import cls from './AboutUs.module.scss';

export const AboutUs = () => {
  return (
    <section className={cls.section}>
      <div className={cls.block}>
        <div className={cls.imgContainer}>
          <div className={cls.wrapper}>
            <img className={cls.image} src={imageOne} alt="картинка" />
            <img className={cls.figure} src={imageTwo} alt="картинка" />
          </div>
        </div>
        <div className={cls.container}>
          <p className={cls.span}>про студию</p>
          <h2 className={cls.title}>Здесь НАЗВАНИЕ</h2>
          <p className={cls.description}>
            Арт-школа — мастерская в центре Ростова-на-Дону.

          </p>
          <p className={cls.description}>
            Мы проводим
            мастер-классы по живописи и гончарному делу для деток и взрослых.

          </p>
          <p className={cls.description}>
            Мы делаем рисование доступным с помощью пошаговой программы
            и вовлечённых преподавателей. Вы как ученик обязательно прочувствуете
            нашу дружескую и лёгкую атмосферу.

          </p>
          <button type="button" className={cls.btn}>Узнать подробнее</button>
        </div>
      </div>
    </section>
  );
};
