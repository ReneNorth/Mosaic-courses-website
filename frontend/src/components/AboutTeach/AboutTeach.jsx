import image from '../../images/about-teach_image.png';
import cls from './AboutTeach.module.scss';

export const AboutTeach = () => {
  return (
    <section className={cls.section}>
      <div className={cls.contentWrapper}>
        <h2 className={cls.title}>
          Как проходят
          <span> занятия в студии</span>
        </h2>
        <p className={cls.description}>
          Даже если вы никогда не работали с мозаикой — не переживайте.
          Наши уроки помогут вам быстро освоить новую для вас технику.
        </p>
        <img className={cls.image} src={image} alt="Изображение мозаики" />
      </div>
      <div className={cls.accentWrapper}>
        <div className={cls.test}>
          <h3>Занятия в мини группах</h3>
          <p>
            Создавайте в комфорте — в группах не больше 6 человек
          </p>
        </div>
        <div className={cls.test}>
          <h3>Индивидуальная обратная связь</h3>
          <p>
            Преподаватель не оставит вас один на один с новым ремеслом
          </p>
        </div>
        <div className={cls.test}>
          <h3>all inclusive</h3>
          <p>
            От вас ничего не требуется - всё оборудование и расходники на нас
          </p>
        </div>
      </div>
    </section>
  );
};
