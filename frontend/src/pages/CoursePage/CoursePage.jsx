import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CoursePageFinal } from '../../components/CoursePageFinal/CoursePageFinal';

import './CoursePage.module.scss';
import { getCourseById, setCurrentCourse } from '../../services/slices/coursesSlice';

export const CoursePage = () => {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getCourseById(params.slug));
  }, [dispatch, params.slug]);

  return <CoursePageFinal />;
};
