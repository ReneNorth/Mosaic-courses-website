import { useSelector } from 'react-redux';
import cls from './CoursePageInfo.module.scss';

export const CoursePageInfo = () => {
  const currentCourse = useSelector((store) => store.courses.currentCourse);

  return (
    <div className={cls.section}>
      <div className={cls.block}>
        <div className={cls.headerTitle}>
          <h1 className={cls.headerName}>
            Мастер-класс по римской мозаике,
            <p className={cls.courseName}>{` ${currentCourse.title ? currentCourse.title : ''}`}</p>
          </h1>
          <div className={cls.text}>
            <p className={cls.paragraph}>{currentCourse?.short_description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
