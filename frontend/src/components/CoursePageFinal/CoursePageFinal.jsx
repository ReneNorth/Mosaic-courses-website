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

  function getScrollbarWidth() {
    // Создаем временный элемент
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll'; // Принудительно включаем скроллбар
    outer.style.position = 'absolute';
    outer.style.top = '-9999px';
    outer.style.width = '100px';
    outer.style.height = '100px';
    document.body.appendChild(outer);

    // Измеряем ширину внутреннего содержимого
    const innerWidth = document.createElement('div');
    innerWidth.style.width = '100%';
    outer.appendChild(innerWidth);

    // Разница между шириной контейнера и шириной внутреннего содержимого
    const scrollbarWidth = outer.offsetWidth - innerWidth.offsetWidth;

    // Удаляем временный элемент
    document.body.removeChild(outer);

    return scrollbarWidth;
  }

  useEffect(() => {
    if (isCalendarPopupOpen || isRegistrationLessonPopupOpen || isApplicationAcceptedPopupOpen) {
      document.body.style.overflowY = 'hidden';
      document.body.style.width = `calc(100% - ${getScrollbarWidth()}px)`;
      document.body.style.margin = 0;
    } else {
      document.body.style.overflowY = '';
      document.body.style.width = '100%';
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
