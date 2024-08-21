import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CoursePageFinal } from '../../components/CoursePageFinal/CoursePageFinal';

import './CoursePage.module.scss';
import { getAllCourses, getCourseById } from '../../services/slices/coursesSlice';

export const CoursePage = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const allCourses = useSelector((store) => store.courses.allCourses);
  const params = useParams();

  useEffect(() => {
    dispatch(getAllCourses());
  }, [dispatch]);

  useEffect(() => {
    if (allCourses.length > 0) {
      const course = allCourses.find((course) => course.slug === slug);
      if (course) {
        dispatch(getCourseById(course.id));
      }
    }
  }, [dispatch, allCourses, slug]);

  return <CoursePageFinal />;
};
