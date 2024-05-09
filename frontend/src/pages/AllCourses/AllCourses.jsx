import { useState } from 'react';
import NewSettler from '../../components/NewSettler/NewSettler';
import { RemainedQuestion } from '../../components/RemainedQuestion/RemainedQuestion';
import { MainCardsList } from '../../components/MainCardsList/MainCardsList';
import { AllCoursesHeader } from '../../components/AllCoursesHeader/AllCoursesHeader';
import cls from './AllCourses.module.scss';
import { SelectField } from '../../components/SelectField/SelectField';

export const AllCourses = () => {
  const [isOpen, setIsOpen] = useState(true);
  const sort = [
    'Для начинающих',
    'По умолчанию',
  ];
  const forWho = [
    'Группа',
    'Индивидуально',
    'Общий набор',
  ];
  const time = [
    'Будни',
    'Выходные',
  ];
  const names = [
    'Начинающий',
    'Продолжающий',
  ];
  const type = [
    'Современная',
    'Классическая',
  ];

  return (
    <>
      <NewSettler setIsOpen={setIsOpen} />
      <AllCoursesHeader />
      <div className={cls.filterWrapper}>
        <div className={cls.filterBlock}>
          <SelectField placeholder="Сортировка" valuesArray={sort} />
          <SelectField placeholder="Для кого" valuesArray={forWho} />
          <SelectField placeholder="По времени" valuesArray={time} />
          <SelectField placeholder="Тип занятий" valuesArray={names} />
          <SelectField placeholder="Тип мозаики" valuesArray={type} />
        </div>
      </div>
      <div className={cls.coursesWrapper}>
        <MainCardsList type="all" />
      </div>
      <RemainedQuestion isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
