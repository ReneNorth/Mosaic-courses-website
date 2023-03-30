import { CoursePageFinal } from '../../components/CoursePageFinal/CoursePageFinal';

import './CoursePage.module.scss';
import { TeacherSection } from '../../components/TeacherSection/TeacherSection';

export const CoursePage = () => {
  return (
    <>
      <CoursePageFinal />
      <TeacherSection />
    </>
  );
};
