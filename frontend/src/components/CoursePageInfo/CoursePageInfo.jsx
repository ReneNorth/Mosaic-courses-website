import mainImg from '../../images/main-img-course.png';
import cls from './CoursePageInfo.module.scss';

export const CoursePageInfo = () => {
  return (
    <div>
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
          </div>
        </div>
      </div>
    </div>
  );
};
