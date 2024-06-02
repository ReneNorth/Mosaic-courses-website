import { useState, useEffect } from 'react';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewSettler from '../../components/NewSettler/NewSettler';
import { RemainedQuestion } from '../../components/RemainedQuestion/RemainedQuestion';
import { MainCardsList } from '../../components/MainCardsList/MainCardsList';
import { AllCoursesHeader } from '../../components/AllCoursesHeader/AllCoursesHeader';
import cls from './AllCourses.module.scss';
import { SelectField } from '../../components/SelectField/SelectField';
import { ButtonReset } from '../../components/ButtonReset/ButtonReset';
import { SelectFieldSingle } from '../../components/SelectFieldSingle/SelectFieldSingle';
import { Chip } from '../../components/Chip/Chip';
import { Arrows } from '../../images/Arrows';
import { AllCoursesMobileSortModal } from '../../components/AllCoursesMobileSortModal/AllCoursesMobileSortModal';
import { AllCoursesMobileFilterModal } from '../../components/AllCoursesMobileFilterModal/AllCoursesMobileFilterModal';
import {
  setCurrentSortingStatus,
  getFilters, setCurrentFilter, setfiltersSlugs,
} from '../../services/slices/coursesFiltersSlice.js';

export const AllCourses = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [sortSelectFieldPlaceholder, setSortSelectFieldPlaceholder] = useState('Сортировка');

  const [activeSortingSelect, setActiveSortingSelect] = useState('');
  const [activeFilterSelect, setActiveFilterSelect] = useState([]);

  const [resetFilterSelect, setResetFilterSelect] = useState('reset');

  const [sortMobileModalOpen, setSortMobileModalOpen] = useState(false);
  const [filterMobileModalOpen, setFilterMobileModalOpen] = useState(false);
  const [saveFilterStatus, setSaveFilterStatus] = useState([]);

  const {
    sorting, activeSortingStatus, filters, activeFilters, filtersSlugs,
  } = useSelector((state) => state.coursesFilters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilters());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlerSortMobileButton = (e) => {
    e.preventDefault();
    setSortMobileModalOpen(true);
  };

  const handlerFilterMobileButton = (e) => {
    e.preventDefault();
    setFilterMobileModalOpen(true);
    setSaveFilterStatus(activeFilters);
  };

  const handlerResetButton = (e) => {
    e.preventDefault();
    setResetFilterSelect(`${resetFilterSelect}+`);
    dispatch(setCurrentFilter([]));
    setActiveSortingSelect('');
  };

  useEffect(() => {
    sorting.forEach((el) => {
      if (el.slug === activeSortingStatus) {
        if (activeSortingStatus === '') { setSortSelectFieldPlaceholder('Сортировка'); } else {
          setSortSelectFieldPlaceholder(el.name);
        }
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSortingStatus]);

  useEffect(() => {
    dispatch(setCurrentSortingStatus(activeSortingSelect));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSortingSelect]);

  useEffect(() => {
    const filtersSlugsArray = { ...filtersSlugs };
    const filtersSending = [];
    Object.keys(activeFilterSelect).forEach((key) => {
      filtersSlugsArray[key] = activeFilterSelect[key];
    });

    dispatch(setfiltersSlugs(filtersSlugsArray));
    Object.keys(filtersSlugsArray).forEach((key) => {
      if (filtersSlugsArray[key]) {
        filtersSending.push(key);
      }
    });
    dispatch(setCurrentFilter(filtersSending));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilterSelect]);

  return (
    <>
      <NewSettler setIsOpen={setIsOpen} />
      <AllCoursesHeader />
      <div className={cls.filterWrapper}>
        <div className={cls.filterBlock}>
          <SelectFieldSingle
            placeholder="Сортировка"
            valuesArray={sorting}
            selectValue={activeSortingSelect}
            setSelectValue={setActiveSortingSelect}
          />
          <SelectField
            placeholder="Для кого "
            resetValue={resetFilterSelect}
            valuesArray={filters.EXP}
            setActiveSelectors={setActiveFilterSelect}
          />
          <SelectField
            placeholder="По времени "
            resetValue={resetFilterSelect}
            valuesArray={filters.DURATION}
            setActiveSelectors={setActiveFilterSelect}
          />
          <SelectField
            placeholder="Тип занятий "
            resetValue={resetFilterSelect}
            valuesArray={filters.TARGET_AUDIENCE}
            setActiveSelectors={setActiveFilterSelect}
          />
          <SelectField
            placeholder="Тип мозаики "
            valuesArray={filters.STYLE}
            resetValue={resetFilterSelect}
            setActiveSelectors={setActiveFilterSelect}
          />
          <ButtonReset
            placeholder="Очистить "
            disabled={!activeFilters.length && (activeSortingSelect === '')}
            onClick={(e) => handlerResetButton(e)}
          />
        </div>
        <div className={cls.filterBlockMobile}>
          <Chip
            border
            active={activeSortingStatus !== ''}
            onClick={(e) => handlerSortMobileButton(e)}
            fill
          >
            <Arrows />
            {sortSelectFieldPlaceholder}
          </Chip>
          <Chip
            border
            number={activeFilters.length}
            active={activeFilters.length}
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
        <AllCoursesMobileFilterModal
          isOpen={filterMobileModalOpen}
          setIsOpen={setFilterMobileModalOpen}
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
