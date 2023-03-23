import { CoursePageInfo } from '../../components/CoursePageInfo/CoursePageInfo';
import { SectionInfo } from '../../components/SectionInfo/SectionInfo';
import { TeacherSection } from '../../components/TeacherSection/TeacherSection';
import { OtherCourses } from '../../components/OtherCourses/OtherCourses';
import { TogleLearnMore } from '../../components/TogleLearnMore/TogleLearnMore';

import './CoursePage.module.scss';

export const CoursePage = () => {
  return (
    <>
      <CoursePageInfo />
      <SectionInfo />
      <TogleLearnMore />
      <TeacherSection />
      <OtherCourses />
    </>
  );
};
