import { courses } from '../../utils/consts/mockData.js';
import { CourseCard } from '../CourseCard/CourseCard.jsx';
import cls from './ChoiseCourse.module.scss';

export const ChoiseCourse = ({ setIsOpen }) => {
  return (
    <section className={cls.section}>
      <ul className={cls.list}>
        {courses.map((course) => (
          <li className={cls.item}>
            <CourseCard item={course} />
          </li>
        ))}
      </ul>
    </section>
  );
};
