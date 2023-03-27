import coursePageMain from '../../images/course-page-main.png';
import indicator from '../../images/indicator.svg';
import cls from './CoursePageInfo.module.scss';

export const CoursePageInfo = () => {
  return (
    <div className={cls.section}>
      <div className={cls.block}>
        <div className={cls.headerTitle}>
          <h1 className={cls.headerName}>Курс по римской мозайке</h1>
          <p className={cls.courseName}>Однодневный</p>
          <div className={cls.text}>
            <p>Подходит для начинающих.</p>
            <p className={cls.paragraph}>
              Все материалы входят в стоимость. Опыт создания мозаики не
              требуется.
            </p>
          </div>
          <button className={cls.button} type="button">
            Записаться на курс
          </button>
          <div className={cls.route}>
            <ul className={cls.routeItems}>
              <li>
                <a href="!#" className={cls.routeItem}>
                  Главная
                </a>
              </li>
              <li>
                <a href="!#" className={cls.routeItem}>
                  <img
                    className={cls.indicator}
                    src={indicator}
                    alt="Промо картинка"
                  />
                </a>
              </li>
              <li>
                <a href="!#" className={cls.routeItem}>
                  {' '}
                  Курсы
                </a>
              </li>
              <li>
                <a href="!#" className={cls.routeItem}>
                  <img
                    className={cls.indicator}
                    src={indicator}
                    alt="Промо картинка"
                  />
                </a>
              </li>
              <li>
                <a href="!#" className={cls.routeItem}>
                  {' '}
                  Курс по Римской мозайке
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={cls.wrapper}>
          <img
            className={cls.image}
            src={coursePageMain}
            alt="Промо картинка"
          />
          <div className={cls.radius} />
          <div className={cls.rectangle} />
        </div>
      </div>
    </div>
  );
};
