import cls from './SectionInfo.module.scss';

import { OtherCourses } from '../OtherCourses/OtherCourses';
import { TeacherSection } from '../TeacherSection/TeacherSection';
import { ToggleLearnMore } from '../ToggleLearnMore/ToggleLearnMore';

export const SectionInfo = () => {
  return (
    <div className={cls.infoBlock}>
      <div className={cls.sectionContainer}>
        <div>
          <h3 className={cls.containerHeading}>Чему вы научитесь?</h3>
          <div className={cls.containerInfo}>
            <ul className={cls.listFirst}>
              <li> Изучите базовый синтаксис и структуры данных Python 3! </li>

              <li> Изучите продвинутые возможности Python.</li>

              <li>
                {' '}
                Научитесь использовать Объектно-Ориентированное
                Программирование!
              </li>

              <li>Изучите сложные темы, например декораторы и генераторы</li>
            </ul>
            <ul className={cls.listSecond}>
              <li>Изучите базовый синтаксис и структуры данных Python 3! </li>
              <li>Изучите продвинутые возможности Python, такие как модуль</li>
              <li>
                Научитесь использовать Объектно-Ориентированное
                Программирование!
              </li>
              <li>Изучите сложные темы, например декораторы и генераторы</li>
            </ul>
          </div>

          <h3 className={cls.containerHeading}>Этот курс включает:</h3>

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

          <ToggleLearnMore />
          <TeacherSection />
          <h3 className={cls.containerHeading}>Также покупают</h3>
          <OtherCourses />
        </div>
      </div>
    </div>
  );
};
