import { useSelector } from 'react-redux';
import cls from './CoursePageInfo.module.scss';

export const CoursePageInfo = () => {
  const currentCourse = useSelector((store) => store.courses.currentCourse);

  return (
    <div className={cls.section}>
      <div className={cls.block}>
        <div className={cls.headerTitle}>
          <h1 className={cls.headerName}>Курс по римской мозаике</h1>
          <p className={cls.courseName}>однодневный</p>
          <div className={cls.text}>
            <p className={cls.paragraph}>Подходит для начинающих.</p>
            <p className={cls.paragraph}>
              Все материалы входят в стоимость. Опыт создания мозаики не требуется.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
