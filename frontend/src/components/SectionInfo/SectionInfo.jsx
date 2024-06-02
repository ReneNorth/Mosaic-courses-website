import sectionInfoStyles from './SectionInfo.module.scss';

import { OtherCourses } from '../OtherCourses/OtherCourses';

export const SectionInfo = () => {
  return (
    <div className={sectionInfoStyles.container}>
      <div className={sectionInfoStyles.containerInfo}>
        <h3 className={sectionInfoStyles.title}>Чему вы научитесь?</h3>
        <ul className={sectionInfoStyles.listFirst}>
          <li>Изучите базовый синтаксис и структуры данных Python 3!</li>
          <li>Изучите продвинутые возможности Python, такие как модуль «collections» и работа с timestamp!</li>
          <li>Научитесь использовать Объектно-Ориентированное Программирование!</li>
          <li>Изучите сложные темы, например декораторы и генераторы.</li>
        </ul>
      </div>
      <div className={sectionInfoStyles.containerInfo}>
        <h3 className={sectionInfoStyles.title}>Этот курс включает:</h3>
        <ul className={sectionInfoStyles.listFirst}>
          <li>Изучите базовый синтаксис и структуры данных Python 3! </li>
          <li>Изучите продвинутые возможности Python, такие как модуль «collections» и работа с timestamp!</li>
        </ul>
      </div>
      <div className={sectionInfoStyles.containerInfo}>
        <h3 className={sectionInfoStyles.title}>О курсе</h3>
        <ul className={sectionInfoStyles.listSecond}>
          <li>Мы проводим мастер-классы по живописи и гончарному делу для деток и взрослых.</li>
          <li>
            Мы делаем рисование доступным с помощью пошаговой программы и вовлечённых преподавателей.
            Вы как ученик обязательно прочувствуете нашу дружескую и лёгкую атмосферу.
          </li>
        </ul>
      </div>
      <h3 className={`${sectionInfoStyles.title} ${sectionInfoStyles.lastTitle}`}>Также покупают</h3>
      <OtherCourses />
    </div>
  );
};
