import { useState, useEffect } from 'react';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { setCurrentSortingStatus, getFilters } from '../../services/slices/coursesFiltersSlice.js';

export const AllCourses = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [sortSelectField, setSortSelectField] = useState('');

  const [sortMobileModalOpen, setSortMobileModalOpen] = useState(false);
  const [filterMobileModalOpen, setFilterMobileModalOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState([]);
  const [saveFilterStatus, setSaveFilterStatus] = useState([]);

  const { sorting, activeSortingStatus, filters } = useSelector((state) => state.coursesFilters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilters());
  }, [dispatch]);

  const handlerSortMobileButton = (e) => {
    e.preventDefault();
    setSortMobileModalOpen(true);
  };

  const handlerFilterMobileButton = (e) => {
    e.preventDefault();
    setFilterMobileModalOpen(true);
    setSaveFilterStatus(filterStatus);
  };

  return (
    <>
      <RectangularPageDecoration />
      <NewSettler isOpen={isOpen} setIsOpen={setIsOpen} />
      <AllCoursesHeader />
      <div className={cls.filterWrapper}>
        <div className={cls.filterBlock}>
          <SelectFieldSingle
            placeholder="Сортировка"
            valuesArray={sorting}
            selectValue={activeSortingStatus}
            setSelectValue={setCurrentSortingStatus}
          />
          <SelectField placeholder="Для кого " valuesArray={filters.EXP} />
          <SelectField placeholder="По времени " valuesArray={filters.DURATION} />
          <SelectField placeholder="Тип занятий " valuesArray={filters.TARGET_AUDIENCE} />
          <SelectField placeholder="Тип мозаики " valuesArray={filters.STYLE} />
          <ButtonReset placeholder="Очистить " disabled />
        </div>
        <div className={cls.filterBlockMobile}>
          <Chip
            border
            active={activeSortingStatus !== ''}
            onClick={(e) => handlerSortMobileButton(e)}
            fill
          >
            <Arrows />
            {' '}
            {activeSortingStatus === '' && 'Сортировка'}
            {activeSortingStatus === 'recommended' && 'Рекомендуемые'}
            {activeSortingStatus === 'date' && 'Ближайшие' }
            {activeSortingStatus === 'price' && 'По цене' }
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
        />
        {/* <AllCoursesMobileFilterModal
          isOpen={filterMobileModalOpen}
          setIsOpen={setFilterMobileModalOpen}
          filters={filters}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
          saveFilterStatus={saveFilterStatus}
        /> */}
      </div>
      <div className={cls.coursesWrapper}>
        <MainCardsList PageSize={4} infiniteScroll showPagination />
      </div>
      <RemainedQuestion isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
