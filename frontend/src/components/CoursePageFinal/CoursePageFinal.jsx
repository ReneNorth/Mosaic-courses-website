import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SectionInfo } from '../SectionInfo/SectionInfo';
import { CoursePageInfo } from '../CoursePageInfo/CoursePageInfo';
import { StickySidebar } from '../StickySidebar/StickySidebar';
import coursePageFinalStyles from './CoursePageFinal.module.scss';
import CalendarPopup from '../CalendarPopup/CalendarPopup';
import RegistrationLessonPopup from '../RegistrationLessonPopup/RegistrationLessonPopup';
import ApplicationAcceptedPopup from '../ApplicationAcceptedPopup/ApplicationAcceptedPopup';

export const CoursePageFinal = () => {
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
