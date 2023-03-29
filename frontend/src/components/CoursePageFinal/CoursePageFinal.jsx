import { SectionInfo } from '../SectionInfo/SectionInfo';
import { CoursePageInfo } from '../CoursePageInfo/CoursePageInfo';
import { SteakySidebar } from '../SteakySidebar/SteakySidebar';
import cls from './CoursePageFinal.module.scss';

export const CoursePageFinal = () => {
  return (
    <div className={cls.page}>
      <div>
        <CoursePageInfo />
        <SectionInfo />
      </div>
      <SteakySidebar />
    </div>
  );
};
