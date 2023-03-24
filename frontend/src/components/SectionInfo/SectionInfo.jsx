import cls from './SectionInfo.module.scss';
import { SteakySidebar } from '../SteakySidebar/SteakySidebar';
import { TeacherSection } from '../TeacherSection/TeacherSection';
import { ToggleLearnMore } from '../ToggleLearnMore/ToggleLearnMore';
import { OtherCourses } from '../OtherCourses/OtherCourses';
export const SectionInfo = () => {
  return (
    <div className={cls.infoBlock}>
      <h3 className={cls.containerHeading}>Чему вы научитесь?</h3>

      <div className={cls.sectionContainer}>
        <div>
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
          <OtherCourses />
        </div>
        <SteakySidebar />
        {/* <div className={cls.sidebar}>
          <div className={cls.innerBlock}>
            <h3 className={cls.title}> Курс по римской мозайке однодевный</h3> 
             <p className={cls.coursePrice}> 4 000 ₽ </p> 
            <p>  Продолжительность: 6 часов</p>
            <button className={cls.button} type="button">
              Записаться на курс
            </button>
            <div className={cls.gift}> Подарить этот курс</div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
