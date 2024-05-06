import { useSelector } from 'react-redux';
import cls from './CoursePageInfo.module.scss';

export const CoursePageInfo = () => {
  const currentCourse = useSelector((store) => store.courses.currentCourse);

  return (
    <div className={cls.section}>
      <div className={cls.block}>
        <div className={cls.headerTitle}>
          <h1 className={cls.headerName}>Курс по римской мозаике</h1>
          <p className={cls.courseName}>{currentCourse?.title}</p>
          <div className={cls.text}>
            <p className={cls.paragraph}>{`${currentCourse?.short_description?.split('. ')[0]}.`}</p>
            <p className={cls.paragraph}>
              {(
                `${currentCourse?.short_description?.split('. ')[1]}.`
                + ` ${currentCourse?.short_description?.split('. ')[2]}.`
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
