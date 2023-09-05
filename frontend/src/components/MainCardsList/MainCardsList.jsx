import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { courses } from '../../utils/consts/mockData.js';
import { CourseCard } from '../CourseCard/CourseCard.jsx';
import cls from './MainCardsList.module.scss';
import { getAllCourses } from '../../services/slices/coursesSlide.js';

export const MainCardsList = ({ setIsOpen, type }) => {
  const handleEnroll = () => {
    setIsOpen(true);
  };
  const { allCourses } = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCourses());
  }, [dispatch]);

  // eslint-disable-next-line consistent-return, array-callback-return
  const coursesToRender = allCourses.map((course, index) => {
    if (index <= 3) {
      return (
        <li className={cls.item} key={course.id}>
          <CourseCard
            item={course}
            handleEnroll={handleEnroll}
            handleGetMore={handleEnroll}
            type={type}
          />
        </li>
      );
    }
  });

  return (
    <section className={cls.section}>
      <ul className={cls.list}>
        {coursesToRender}
      </ul>
    </section>
  );
};
