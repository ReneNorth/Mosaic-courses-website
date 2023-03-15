import image from '../../images/about-teach_image.png';
import cls from './AboutTeach.module.scss';

export const AboutTeach = () => {
  return (
    <section className={cls.section}>
      <div className={cls.contentWrapper}>
        <h2 className={cls.title}>
          Как проходят занятия
          <span> В&nbsp;СТУДИИ МОЗАИКИ</span>
        </h2>
        <p className={cls.description}>
          Даже если вы никогда не работали с мозаикой — не переживайте. Наши
          уроки помогут вам быстро освоить новую для вас технику.
        </p>
        <p className={cls.description}>
          За 4 года мы обучили сотни учеников. Таким образом, вы можете быть уверены в результате.
        </p>
        <img className={cls.image} src={image} alt="Изображение мозаики" />
      </div>
      <div className={cls.accentWrapper}>
        <div className={cls.oneColumn}>
          <div className={cls.ellipse}>
            <div className={cls.icon} />
            <h3 className={cls.accentTitle}>Занятия в&nbsp;мини&#8209;группах</h3>
            <p className={cls.accentSubtitle}>Рисуйте в комфорте — группы составляют 7–10 человек</p>
          </div>
          <div className={cls.ellipse}>
            <div className={cls.icon} />
            <h3 className={cls.accentTitle}>Занятия в&nbsp;мини&#8209;группах</h3>
            <p className={cls.accentSubtitle}>Рисуйте в комфорте — группы составляют 7–10 человек</p>
          </div>
        </div>
        <div className={cls.twoColumn}>
          <div className={cls.ellipse}>
            <div className={cls.icon} />
            <h3 className={cls.accentTitle}>Занятия идут 3 часа</h3>
            <p className={cls.accentSubtitle}>Время, которое позволяет творить без усталости</p>
          </div>
        </div>
      </div>
    </section>
  );
};
