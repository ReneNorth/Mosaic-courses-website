import { useState } from 'react';
import {} from '../../components/CoursePageFinal/CoursePageFinal';
import { AllCoursesHeader } from '../../components/AllCoursesHeader/AllCoursesHeader';
import { MainCardsList } from '../../components/MainCardsList/MainCardsList';
import { RemainedQuestion } from '../../components/RemainedQuestion/RemainedQuestion';
import NewSettler from '../../components/NewSettler/NewSettler';

import './AllCourses.module.scss';

export const AllCourses = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <NewSettler setIsOpen={setIsOpen} />
      <AllCoursesHeader />
      <MainCardsList type="all" />
      <RemainedQuestion isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
