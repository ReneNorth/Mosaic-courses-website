import { SectionInfo } from '../SectionInfo/SectionInfo';
import { CoursePageInfo } from '../CoursePageInfo/CoursePageInfo';
import { StickySidebar } from '../StickySidebar/StickySidebar';

import cls from './CoursePageFinal.module.scss';

export const CoursePageFinal = () => {
  return (
    <div className={cls.page}>
      <div>
        <CoursePageInfo />
        <SectionInfo />
      </div>
      <StickySidebar />
    </div>
  );
};
