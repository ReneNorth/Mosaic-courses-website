import cls from './Reasons.module.scss';

export const Reasons = () => {
  return (
    <section className={cls.section}>
      <h3 className={cls.subtitle}>з причины</h3>
      <h2 className={cls.title}>
        Выбрать
        <span> нас</span>
      </h2>
      <ul className={cls.list}>
        <li className={cls.item}>
          <div className={cls.ellipse}>I</div>
          <h3 className={cls.cardTitle}>Уникальность</h3>
          <p className={cls.description}>
            Мы обожаем такие трепетные моменты и с радостью поможем устроить вам
            самый яркий праздник в нашей мастерской.
          </p>
        </li>
        <li className={cls.item}>
          <div className={cls.ellipse}>II</div>
          <h3 className={cls.cardTitle}>Уникальность</h3>
          <p className={cls.description}>
            Мы обожаем такие трепетные моменты и с радостью поможем устроить вам
            самый яркий праздник в нашей мастерской.
          </p>
        </li>
        <li className={cls.item}>
          <div className={cls.ellipse}>III</div>
          <h3 className={cls.cardTitle}>Уникальность</h3>
          <p className={cls.description}>
            Мы обожаем такие трепетные моменты и с радостью поможем устроить вам
            самый яркий праздник в нашей мастерской.
          </p>
        </li>
      </ul>
    </section>
  );
};
