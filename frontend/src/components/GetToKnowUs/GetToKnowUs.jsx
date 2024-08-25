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
      <div className={cls.heading}>
        <h3 className={cls.smallTitle}>о студии</h3>
        <h1 className={cls.title}>
          Школа Мозаики&nbsp;
          <span className={cls.span}>Tessera</span>
        </h1>
      </div>
      {/* eslint-disable max-len */}
      <div className={cls.text}>
        <p className={cls.description}>
          Освоив это ремесло, вы сможете развивать его дальше и создавать уникальные работы, наполняя их смыслом и красотой.
        </p>
        <p className={cls.description}>
          Под руководством мастеров вы научитесь создавать каменные мозаики, которые можно продолжать делать дома.
        </p>
        <p className={cls.description}>
          Мозаика — это не только творческий процесс, но и редкий навык, уходящий корнями в культуру Древнего Рима.
        </p>
      </div>
      <div className={cls.text}>
        <p className={cls.description}>
          Студия мозаики предлагает мастер-классы, где вы познакомитесь с техникой, проверенной веками
        </p>
        <p className={cls.description}>
          Мозаика развивает не только художественный вкус, но и терпение, внимание к деталям, что важно в любом творчестве.
        </p>
        <p className={cls.description}>
          Наши занятия подходят как для начинающих, так и для тех, кто хочет углубить свои навыки в мозаике.
        </p>
      </div>

    </section>
  );
};
