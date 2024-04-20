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
import { AllCoursesMobileSortModal } from '../../components/AllCoursesMobileSortModal/AllCoursesMobileSortModal';

export const AllCourses = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [sortMobileButtonActive, setSortMobileButton] = useState(false);
  const [sortMobileButtonOpen, setSortMobileButtonOpen] = useState(false);
  const [sortingStatus, setSortingStatus] = useState('default');
  const [filterMobileButtonActive, setFilterMobileButton] = useState(false);

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

  const handlerSortMobileButton = (e) => {
    e.preventDefault();
    setSortMobileButtonOpen(true);
    // const sendData = {
    //   email: values.email,
    // };
    // dispatch(resendActivationEmail(sendData));
    // setCounter(30);
    // setDisabledButtonCounter(true);
  };

  const handlerFilterMobileButton = (e) => {
    e.preventDefault();
    // const sendData = {
    //   email: values.email,
    // };
    // dispatch(resendActivationEmail(sendData));
    // setCounter(30);
    // setDisabledButtonCounter(true);
  };

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
          <Chip
            active={sortingStatus !== 'default'}
            onClick={(e) => handlerSortMobileButton(e)}
            fill
          >
            <Arrows />
            {' '}
            Сортировка
          </Chip>
          <Chip
            active={filterMobileButtonActive}
            onClick={(e) => handlerFilterMobileButton(e)}
            fill
          >
            Фильтры
          </Chip>
        </div>
        <AllCoursesMobileSortModal
          isOpen={sortMobileButtonOpen}
          setIsOpen={setSortMobileButtonOpen}
          sortingStatus={sortingStatus}
          setSortingStatus={setSortingStatus}
        />
      </div>
      <div className={cls.coursesWrapper}>
        <MainCardsList PageSize={4} />
      </div>
      <RemainedQuestion isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
