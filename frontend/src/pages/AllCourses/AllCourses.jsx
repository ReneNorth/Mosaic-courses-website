import { useState } from 'react';
import * as React from 'react';
import NewSettler from '../../components/NewSettler/NewSettler';
import { RemainedQuestion } from '../../components/RemainedQuestion/RemainedQuestion';
import { MainCardsList } from '../../components/MainCardsList/MainCardsList';
import { AllCoursesHeader } from '../../components/AllCoursesHeader/AllCoursesHeader';
import { RectangularPageDecoration } from '../../components/RectangularPageDecoration/RectangularPageDecoration';
import cls from './AllCourses.module.scss';
import { SelectField } from '../../components/SelectField/SelectField';
import { ButtonReset } from '../../components/ButtonReset/ButtonReset';
import { SelectFieldSingle } from '../../components/SelectFieldSingle/SelectFieldSingle';
import { Chip } from '../../components/Chip/Chip';
import { Arrows } from '../../images/Arrows';

export const AllCourses = () => {
  const [isOpen, setIsOpen] = useState(false);

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
  const sortSingle = [
    { name: 'Без фильтра', value: '' },
    { name: 'Для начинающих', value: 'for novice' },
    { name: 'По умолчанию', value: 'default' },
  ];

  return (
    <>
      <RectangularPageDecoration />
      <NewSettler isOpen={isOpen} setIsOpen={setIsOpen} />
      <AllCoursesHeader />
      <div className={cls.filterWrapper}>
        <div className={cls.filterBlock}>
          <SelectFieldSingle placeholder="Сортировка" valuesArray={sortSingle} />
          <SelectField placeholder="Для кого " valuesArray={forWho} />
          <SelectField placeholder="По времени " valuesArray={time} />
          <SelectField placeholder="Тип занятий " valuesArray={names} />
          <SelectField placeholder="Тип мозаики " valuesArray={type} />
          <ButtonReset placeholder="Очистить " disabled />
        </div>
        <div className={cls.filterBlockMobile}>
          <Chip fill>
            <Arrows />
            {' '}
            Сортировка
          </Chip>
          <Chip fill>Фильтры</Chip>
        </div>
      </div>
      <div className={cls.coursesWrapper}>
        <MainCardsList PageSize={4} />
      </div>
      <RemainedQuestion isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
