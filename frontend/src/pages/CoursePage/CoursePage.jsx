import { CoursePageInfo } from '../../components/CoursePageInfo/CoursePageInfo';
import { SectionInfo } from '../../components/SectionInfo/SectionInfo';
import { TeacherSection } from '../../components/TeacherSection/TeacherSection';

export const CoursePage = () => {
  return (
    <>
      <CoursePageInfo />
      <SectionInfo />
      <TeacherSection />
    </>
  );
};
