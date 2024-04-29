import cls from './AllCoursesMobileFilterModal.module.scss';
import { classNames } from '../../helpers/classNames';
import { AllCoursesCloseFilterIcon } from '../../images/AllCoursesCloseFilterIcon';
import { Chip } from '../Chip/Chip';
import { Button } from '../Button/Button';
import { ButtonReset } from '../ButtonReset/ButtonReset';

export const AllCoursesMobileFilterModal = ({
  isOpen, setIsOpen, filterStatus, setFilterStatus, filters, saveFilterStatus,
}) => {
  const handlerFilterClick = (e, filter) => {
    e.preventDefault();
    if (filterStatus.includes(filter)) {
      const newArray = filterStatus.filter((el) => el !== filter);
      setFilterStatus(newArray);
    } else {
      setFilterStatus([...filterStatus, filter]);
    }
  };
  return (
    <div className={classNames(cls.popup, { [cls.popupOpen]: isOpen }, [])}>
      <button
        onClick={() => { setFilterStatus(saveFilterStatus); setIsOpen(!isOpen); }}
        aria-label="close"
        type="button"
        className={cls.closeButton}
      >
        <AllCoursesCloseFilterIcon />
      </button>
      <div className={cls.contentWrapper}>
        <h2 className={cls.filterTitle}>Для кого</h2>
        <div className={cls.filtersWrapper}>
          {filters.forWho.map((filter) => {
            return (
              <Chip
                onClick={(e) => handlerFilterClick(e, filter)}
                active={filterStatus.includes(filter)}
                key={crypto.randomUUID()}
              >
                {filter}
              </Chip>
            );
          })}
        </div>
      </div>
      <div className={cls.contentWrapper}>
        <h2 className={cls.filterTitle}>По времени</h2>
        <div className={cls.filtersWrapper}>
          {filters.time.map((filter) => {
            return (
              <Chip
                onClick={(e) => handlerFilterClick(e, filter)}
                active={filterStatus.includes(filter)}
                key={crypto.randomUUID()}
              >
                {filter}
              </Chip>
            );
          })}
        </div>
      </div>
      <div className={cls.contentWrapper}>
        <h2 className={cls.filterTitle}>Тип занятия</h2>
        <div className={cls.filtersWrapper}>
          {filters.names.map((filter) => {
            return (
              <Chip
                onClick={(e) => handlerFilterClick(e, filter)}
                active={filterStatus.includes(filter)}
                key={crypto.randomUUID()}
              >
                {filter}
              </Chip>
            );
          })}
        </div>
      </div>
      <div className={cls.contentWrapper}>
        <h2 className={cls.filterTitle}>Тип мозаики</h2>
        <div className={cls.filtersWrapper}>
          {filters.type.map((filter) => {
            return (
              <Chip
                onClick={(e) => handlerFilterClick(e, filter)}
                active={filterStatus.includes(filter)}
                key={crypto.randomUUID()}
              >
                {filter}
              </Chip>
            );
          })}
        </div>
      </div>
      <div className={cls.buttonsWrapper}>
        <ButtonReset
          placeholder="Очистить"
          disabled={!filterStatus.length}
          onClick={() => setFilterStatus([])}
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
