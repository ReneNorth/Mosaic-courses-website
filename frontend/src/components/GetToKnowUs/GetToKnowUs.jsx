import cls from './GetToKnowUs.module.scss';
import studio from '../../images/studio.png';

export const GetToKnowUs = () => {
  return (
    <section className={cls.GetToKnowUs}>
      <img
        className={cls.img}
        src={studio}
        alt="фото студии"
      />
      <div className={cls.section}>
        <h3 className={cls.smallTitle}>о студии</h3>
        <h1 className={cls.title}>
          Узнайте нас&nbsp;
          <span className={cls.span}>лучше</span>
        </h1>

        <div className={cls.textBox}>
          {/* eslint-disable max-len */}
          <p className={cls.text}>
            <p className={cls.description}>
              Арт-школа — мастерская в центре Ростова-на-Дону.
            </p>
            <p className={cls.description}>
              Мы проводим мастер-классы по живописи и гончарному делу для деток и взрослых.
            </p>
            <p className={cls.description}>
              Мы делаем рисование доступным с помощью пошаговой программы и вовлечённых преподавателей. Вы как ученик обязательно прочувствуете нашу дружескую и лёгкую атмосферу.
            </p>
          </p>
          <p className={cls.text}>
            <p className={cls.description}>
              Арт-школа — мастерская в центре Ростова-на-Дону.
            </p>
            <p className={cls.description}>
              Мы проводим мастер-классы по живописи и гончарному делу для деток и взрослых.
            </p>
            <p className={cls.description}>
              Мы делаем рисование доступным с помощью пошаговой программы и вовлечённых преподавателей. Вы как ученик обязательно прочувствуете нашу дружескую и лёгкую атмосферу.
            </p>
          </p>
        </div>
      </div>
    </section>
  );
};
