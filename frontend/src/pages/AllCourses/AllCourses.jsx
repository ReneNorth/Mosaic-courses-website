import { useState } from 'react';
import {} from '../../components/CoursePageFinal/CoursePageFinal';
import { AllCoursesHeader } from '../../components/AllCoursesHeader/AllCoursesHeader';
import { MainCardsList } from '../../components/MainCardsList/MainCardsList';
import { RemainedQuestion } from '../../components/RemainedQuestion/RemainedQuestion';
import NewSettler from '../../components/NewSettler/NewSettler';
import cls from './AllCourses.module.scss';

export const AllCourses = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <NewSettler setIsOpen={setIsOpen} />
      <AllCoursesHeader />
      <div className={cls.courses__wrapper}>
        <MainCardsList type="all" />
      </div>
      <RemainedQuestion isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
