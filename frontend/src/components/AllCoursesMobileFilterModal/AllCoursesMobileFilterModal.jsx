import { useDispatch, useSelector } from 'react-redux';
import cls from './AllCoursesMobileFilterModal.module.scss';
import { classNames } from '../../helpers/classNames';
import { AllCoursesCloseFilterIcon } from '../../images/AllCoursesCloseFilterIcon';
import { Chip } from '../Chip/Chip';
import { Button } from '../Button/Button';
import { ButtonReset } from '../ButtonReset/ButtonReset';
import { setCurrentFilter } from '../../services/slices/coursesFiltersSlice.js';

export const AllCoursesMobileFilterModal = ({
  isOpen, setIsOpen, saveFilterStatus, filters, activeFilters,
}) => {
  // const { filters, activeFilters } = useSelector((state) => state.coursesFilters);
  const dispatch = useDispatch();

  const handlerFilterClick = (e, filter) => {
    e.preventDefault();
    if (activeFilters.includes(filter)) {
      const newArray = activeFilters.filter((el) => el !== filter);
      dispatch(setCurrentFilter(newArray));
    } else {
      dispatch(setCurrentFilter([...activeFilters, filter]));
    }
  };

  const createFilters = (filters, filterTitles) => {
    const filtersButtons = [];

    Object.keys(filters).forEach((filterArr) => {
      filtersButtons.push(
        <div key={`${filterArr}`} className={cls.contentWrapper}>
          <h2 className={cls.filterTitle}>
            {filterTitles[filterArr]}
          </h2>
          <div className={cls.filtersWrapper}>
            {filters[filterArr].map((elementFilter) => {
              return (
                <Chip
                  onClick={(e) => handlerFilterClick(e, elementFilter.slug)}
                  active={activeFilters.includes(elementFilter.slug)}
                  key={crypto.randomUUID()}
                >
                  {elementFilter.name}
                </Chip>
              );
            })}
          </div>
        </div>,
      );
    });

    return filtersButtons;
  };

  const filterTitles1 = {
    EXP: 'Для кого',
    DURATION: 'По времени',
    STYLE: 'Тип мозаики',
    TARGET_AUDIENCE: 'Тип занятия',
  };

  const filterTitles2 = {
    author: 'Автор',
    availability: 'Наличие',
    typesMosaic: 'Тип мозаики',
  };

  const filtersButtons1 = createFilters(filters, filterTitles1);
  const filtersButtons2 = createFilters(filters, filterTitles2);

  return (
    <div className={classNames(cls.popup, { [cls.popupOpen]: isOpen }, [])}>
      <button
        onClick={() => { dispatch(setCurrentFilter(saveFilterStatus)); setIsOpen(!isOpen); }}
        aria-label="close"
        type="button"
        className={cls.closeButton}
      >
        <AllCoursesCloseFilterIcon />
      </button>
      {filtersButtons1}
      {filtersButtons2}
      <div className={cls.buttonsWrapper}>
        <ButtonReset
          placeholder="Очистить"
          disabled={!activeFilters.length}
          onClick={() => dispatch(setCurrentFilter([]))}
        />
        <Button
          className="fill"
          fill
          onClick={() => setIsOpen(!isOpen)}
        >
          Применить
        </Button>
      </div>
    </div>
  );
};
