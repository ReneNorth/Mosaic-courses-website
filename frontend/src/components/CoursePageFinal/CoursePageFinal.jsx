import { useSelector } from 'react-redux';
import { SectionInfo } from '../SectionInfo/SectionInfo';
import { CoursePageInfo } from '../CoursePageInfo/CoursePageInfo';
import { StickySidebar } from '../StickySidebar/StickySidebar';
import coursePageFinalStyles from './CoursePageFinal.module.scss';
import CalendarPopup from '../CalendarPopup/CalendarPopup';
import { useResize } from '../../hooks/useResize';

export const CoursePageFinal = () => {
  const { width } = useResize();
  const isCalendarPopupOpen = useSelector((store) => store.popup.isCalendarPopupOpen);

  if (width > 1320) {
    return (
      <div className={coursePageFinalStyles.page}>
        <div className={coursePageFinalStyles.container}>
          <CoursePageInfo />
          <SectionInfo />
        </div>
        <StickySidebar />
        {isCalendarPopupOpen && <CalendarPopup />}
      </div>
    );
  }
  if (width <= 1320 && isCalendarPopupOpen) {
    return (
      <div className={coursePageFinalStyles.page}>
        <div className={coursePageFinalStyles.popupContainer}>
          <CalendarPopup />
        </div>
      </div>
    );
  }
  return (
    <div className={coursePageFinalStyles.page}>
      <div className={coursePageFinalStyles.container}>
        <CoursePageInfo />
        <SectionInfo />
      </div>
      <StickySidebar />
    </div>
  );
};
