import { courses } from '../../utils/consts/mockData.js';
import { CourseCard } from '../CourseCard/CourseCard.jsx';
import cls from './MainCardsList.module.scss';

export const MainCardsList = ({ setIsOpen, type }) => {
  const handleEnroll = () => {
    setIsOpen(true);
  };

  return (
    <section className={cls.section}>
      <ul className={cls.list}>
        {courses.map((course) => (
          <li className={cls.item} key={course.id}>
            <CourseCard
              item={course}
              handleEnroll={handleEnroll}
              handleGetMore={handleEnroll}
              type={type}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
