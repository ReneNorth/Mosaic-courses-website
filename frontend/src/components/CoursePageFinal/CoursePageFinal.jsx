import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { SectionInfo } from '../SectionInfo/SectionInfo';
import { CoursePageInfo } from '../CoursePageInfo/CoursePageInfo';
import { StickySidebar } from '../StickySidebar/StickySidebar';
import coursePageFinalStyles from './CoursePageFinal.module.scss';
import CalendarPopup from '../CalendarPopup/CalendarPopup';
import RegistrationLessonPopup from '../RegistrationLessonPopup/RegistrationLessonPopup';
import ApplicationAcceptedPopup from '../ApplicationAcceptedPopup/ApplicationAcceptedPopup';
import { getAllCourses, getCourseById, setCurrentCourse } from '../../services/slices/coursesSlice';

export const CoursePageFinal = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const allCourses = useSelector((store) => store.courses.allCourses);
  const isCalendarPopupOpen = useSelector((store) => store.popup.isCalendarPopupOpen);
  const isRegistrationLessonPopupOpen = useSelector((store) => store.popup.isRegistrationLessonPopupOpen);
  const isApplicationAcceptedPopupOpen = useSelector((store) => store.popup.isApplicationAcceptedPopupOpen);

  useEffect(() => {
    if (isCalendarPopupOpen || isRegistrationLessonPopupOpen || isApplicationAcceptedPopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isCalendarPopupOpen, isRegistrationLessonPopupOpen, isApplicationAcceptedPopupOpen]);

  useEffect(() => {
    if (allCourses.length === 0) {
      dispatch(getAllCourses());
    }
  }, [dispatch, allCourses]);

  useEffect(() => {
    const course = allCourses.find((course) => course.slug === slug);
    if (course) {
      dispatch(getCourseById(course.id));
    }
  }, [dispatch, allCourses, slug]);

  return (
    <div className={coursePageFinalStyles.page}>
      <div className={coursePageFinalStyles.container}>
        <CoursePageInfo />
        <SectionInfo />
      </div>
      <StickySidebar />
      {isCalendarPopupOpen && <CalendarPopup />}
      {isRegistrationLessonPopupOpen && <RegistrationLessonPopup />}
      {isApplicationAcceptedPopupOpen && <ApplicationAcceptedPopup />}
    </div>
  );
};
