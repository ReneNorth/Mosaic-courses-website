import {} from '../../components/CoursePageFinal/CoursePageFinal';
import { AllCoursesHeader } from '../../components/AllCoursesHeader/AllCoursesHeader';
import { ChoiseCourse } from '../../components/ChoiseCourse/ChoiseCourse';
import { RemainedQuestion } from '../../components/RemainedQuestion/RemainedQuestion';

import './AllCourses.module.scss';

export const AllCourses = () => {
  return (
    <>
      <AllCoursesHeader />
      <ChoiseCourse />
      <RemainedQuestion />
    </>
  );
};
