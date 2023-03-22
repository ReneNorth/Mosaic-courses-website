import { CoursePageInfo } from '../../components/CoursePageInfo/CoursePageInfo';
import { SectionInfo } from '../../components/SectionInfo/SectionInfo';
import { TeacherSection } from '../../components/TeacherSection/TeacherSection';
import { OtherCourses } from '../../components/OtherCourses/OtherCourses';

export const CoursePage = () => {
  return (
    <>
      <CoursePageInfo />
      <SectionInfo />
      <TeacherSection />
      <OtherCourses />
    </>
  );
};
