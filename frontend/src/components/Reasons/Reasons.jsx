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
            Если вы устали от стандартных мастер-классов,
            то работа с камнем станет для вас новым опытом.
          </p>
        </li>
        <li className={cls.item}>
          <div className={cls.ellipse}>II</div>
          <h3 className={cls.cardTitle}>Индивидуальный подход</h3>
          <p className={cls.description}>
            Проводим занятия только в малых группах,
            чтобы каждый ученик получил столько
            внимания преподавателя, сколько нужно для
            отличного результата
          </p>
        </li>
        <li className={cls.item}>
          <div className={cls.ellipse}>III</div>
          <h3 className={cls.cardTitle}>Медитативность и погружение</h3>
          <p className={cls.description}>
            Выкладывание мозаики - медитативный и приятный процесс,
            который поможет отвлечься от ваших проблем
          </p>
        </li>
      </ul>
    </section>
  );
};
