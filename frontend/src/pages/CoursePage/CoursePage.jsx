import { CoursePageInfo } from '../../components/CoursePageInfo/CoursePageInfo';
import { SectionInfo } from '../../components/SectionInfo/SectionInfo';
import { TeacherSection } from '../../components/TeacherSection/TeacherSection';
import { OtherCourses } from '../../components/OtherCourses/OtherCourses';
import { ToggleLearnMore } from '../../components/ToggleLearnMore/ToggleLearnMore';

import './CoursePage.module.scss';

export const CoursePage = () => {
  return (
    <>
      <CoursePageInfo />
      <SectionInfo />
      <ToggleLearnMore />
      <TeacherSection />
      <OtherCourses />
    </>
  );
};
