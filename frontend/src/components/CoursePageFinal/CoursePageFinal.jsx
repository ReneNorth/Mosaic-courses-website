import { useSelector } from 'react-redux';
import { SectionInfo } from '../SectionInfo/SectionInfo';
import { CoursePageInfo } from '../CoursePageInfo/CoursePageInfo';
import { StickySidebar } from '../StickySidebar/StickySidebar';
import coursePageFinalStyles from './CoursePageFinal.module.scss';
import CalendarPopup from '../CalendarPopup/CalendarPopup';

export const CoursePageFinal = () => {
  const isCalendarPopupOpen = useSelector((store) => store.popup.isCalendarPopupOpen);

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
};
