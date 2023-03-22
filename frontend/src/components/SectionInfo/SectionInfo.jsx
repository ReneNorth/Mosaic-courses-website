import cls from './SectionInfo.module.scss';

export const SectionInfo = () => {
  return (
    <div className={cls.infoBlock}>
      <h3 className={cls.containerHeading}>Чему вы научитесь?</h3>

      <div className={cls.sectionContainer}>
        <div className={cls.containerInfo}>
          <ul className={cls.listFirst}>
            <li> Изучите базовый синтаксис и структуры данных Python 3! </li>

            <li> Изучите продвинутые возможности Python.</li>

            <li>
              {' '}
              Научитесь использовать Объектно-Ориентированное Программирование!
            </li>

            <li>Изучите сложные темы, например декораторы и генераторы</li>
          </ul>
          <ul className={cls.listSecond}>
            <li>Изучите базовый синтаксис и структуры данных Python 3! </li>
            <li>Изучите продвинутые возможности Python, такие как модуль</li>
            <li>
              Научитесь использовать Объектно-Ориентированное Программирование!
            </li>
            <li>Изучите сложные темы, например декораторы и генераторы</li>
          </ul>
        </div>
      </div>
      <h3 className={cls.containerHeading}>Этот курс включает:</h3>
      <div className={cls.sectionContainer}>
        <div className={cls.containerInfo}>
          <ul className={cls.listFirst}>
            <li>Изучите базовый синтаксис и структуры данных Python 3! </li>
            <li>Изучите продвинутые возможности Python.</li>
          </ul>
          <ul className={cls.listSecond}>
            <li>Изучите базовый синтаксис и структуры данных Python 3!</li>
            <li>Изучите продвинутые возможности Python, такие как модуль</li>
          </ul>
        </div>
      </div>

      <h3 className={cls.containerHeading}>О курсе</h3>
      <div className={cls.sectionContainer}>
        <div className={cls.text}>
          Мы проводим мастер-классы по живописи и гончарному делу для деток и
          взрослых.
          <p>
            Мы делаем рисование доступным с помощью пошаговой программы и
            вовлечённых преподавателей. Вы как ученик обязательно прочувствуете
            нашу дружескую и лёгкую атмосферу.
          </p>
          <div className={cls.learnMore}>
            <button type="button" className={cls.btn} />{' '}
            <span> Читать подробнее</span>
          </div>
        </div>
      </div>
      <h3 className={cls.containerHeading}>Требования к ученику</h3>
      <div className={cls.sectionContainer}>
        <div className={cls.text}>
          Мы проводим мастер-классы по живописи и гончарному делу для деток и
          взрослых.
          <p>
            Мы делаем рисование доступным с помощью пошаговой программы и
            вовлечённых преподавателей. Вы как ученик обязательно прочувствуете
            нашу дружескую и лёгкую атмосферу.
          </p>
        </div>
      </div>
    </div>
  );
};
