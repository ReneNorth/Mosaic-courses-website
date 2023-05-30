import {} from '../../components/CoursePageFinal/CoursePageFinal';
import { AllCoursesHeader } from '../../components/AllCoursesHeader/AllCoursesHeader';
import { MainCardsList } from '../../components/MainCardsList/MainCardsList';
import { RemainedQuestion } from '../../components/RemainedQuestion/RemainedQuestion';

import './AllCourses.module.scss';

export const AllCourses = () => {
  return (
    <>
      <AllCoursesHeader />
      <MainCardsList type="all" />
      <RemainedQuestion />
    </>
  );
};
