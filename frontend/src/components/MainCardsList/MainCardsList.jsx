/* eslint-disable react/button-has-type */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable max-len */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { courses } from '../../utils/consts/mockData.js';
import { CourseCard } from '../CourseCard/CourseCard.jsx';
import cls from './MainCardsList.module.scss';
import { getAllCourses } from '../../services/slices/coursesSlice.js';

export const MainCardsList = ({ setIsOpen, type }) => {
  const handleEnroll = () => {
    setIsOpen(true);
  };
  const { allCourses } = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCourses());
  }, [dispatch]);

  return (
    <section className={cls.section}>
      <ul className={cls.list}>
        {allCourses.map((course) => {
          const {
            // eslint-disable-next-line camelcase
            masterclasses, duration, image, full_description,
          } = course;
          // eslint-disable-next-line no-console, no-undef
          return (
            // eslint-disable-next-line camelcase
            <CourseCard masterclasses={masterclasses} duration={duration} image={image} full_description={full_description} />
          );
        })}
      </ul>
    </section>
  );
};
