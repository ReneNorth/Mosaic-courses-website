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
import { AllCoursesMobileFilterModal } from '../../components/AllCoursesMobileFilterModal/AllCoursesMobileFilterModal';

export const AllCourses = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [sortMobileModalOpen, setSortMobileModalOpen] = useState(false);
  const [sortingStatus, setSortingStatus] = useState('default');
  const [filterMobileModalOpen, setFilterMobileModalOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState([]);
  const [saveFilterStatus, setSaveFilterStatus] = useState([]);

  const filters = {
    forWho: [
      'Группа',
      'Индивидуально',
      'Общий набор'],
    time: [
      'Будни',
      'Выходные'],
    names: [
      'Начинающий',
      'Продолжающий'],
    type: [
      'Современная',
      'Классическая'],
  };
  const sortSingle = [
    { name: 'Без фильтра', value: '' },
    { name: 'Для начинающих', value: 'for novice' },
    { name: 'По умолчанию', value: 'default' },
  ];

  const handlerSortMobileButton = (e) => {
    e.preventDefault();
    setSortMobileModalOpen(true);
    // const sendData = {
    //   email: values.email,
    // };
    // dispatch(resendActivationEmail(sendData));
    // setCounter(30);
    // setDisabledButtonCounter(true);
  };

  const handlerFilterMobileButton = (e) => {
    e.preventDefault();
    setFilterMobileModalOpen(true);
    setSaveFilterStatus(filterStatus);
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
          <SelectField placeholder="Для кого " valuesArray={filters.forWho} />
          <SelectField placeholder="По времени " valuesArray={filters.time} />
          <SelectField placeholder="Тип занятий " valuesArray={filters.names} />
          <SelectField placeholder="Тип мозаики " valuesArray={filters.type} />
          <ButtonReset placeholder="Очистить " disabled />
        </div>
        <div className={cls.filterBlockMobile}>
          <Chip
            border
            active={sortingStatus !== 'default'}
            onClick={(e) => handlerSortMobileButton(e)}
            fill
          >
            <Arrows />
            {' '}
            {sortingStatus === 'default' ? 'Сортировка' : ''}
            {sortingStatus === 'recommended' ? 'Рекомендованные' : ''}
            {sortingStatus === 'forBeginners' ? 'Для начинающих' : ''}
          </Chip>
          <Chip
            border
            number={filterStatus.length}
            active={filterStatus.length}
            onClick={(e) => handlerFilterMobileButton(e)}
            fill
          >
            Фильтры
          </Chip>
        </div>
        <AllCoursesMobileSortModal
          isOpen={sortMobileModalOpen}
          setIsOpen={setSortMobileModalOpen}
          sortingStatus={sortingStatus}
          setSortingStatus={setSortingStatus}
        />
        <AllCoursesMobileFilterModal
          isOpen={filterMobileModalOpen}
          setIsOpen={setFilterMobileModalOpen}
          filters={filters}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
          saveFilterStatus={saveFilterStatus}
        />
      </div>
      <div className={cls.coursesWrapper}>
        <MainCardsList PageSize={4} infiniteScroll showPagination />
      </div>
      <RemainedQuestion isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
