import { useDispatch, useSelector } from 'react-redux';
import cls from './AllCoursesMobileSortModal.module.scss';
import { classNames } from '../../helpers/classNames';
import { setCurrentSortingStatus } from '../../services/slices/coursesFiltersSlice.js';

export const AllCoursesMobileSortModal = ({ isOpen, setIsOpen }) => {
  const { activeSortingStatus } = useSelector((state) => state.coursesFilters);
  const dispatch = useDispatch();

  const handlerClick = (e, sort) => {
    e.preventDefault();
    dispatch(setCurrentSortingStatus(sort));
    setIsOpen(false);
  };
  return (
    <>
      <div
        className={classNames(cls.overlay, { [cls.overlayOpen]: isOpen }, [])}
        onClick={() => setIsOpen(!isOpen)}
      />
      <div className={classNames(cls.popup, { [cls.popupOpen]: isOpen }, [])}>
        <div className={cls.contentWrapper}>
          <button
            onClick={(e) => handlerClick(e, 'recommended')}
            type="button"
            className={classNames(cls.button, {}, [activeSortingStatus === 'recommended' && cls.active])}
          >
            Рекомендуемые
          </button>
          <button
            onClick={(e) => handlerClick(e, 'date')}
            type="button"
            className={classNames(cls.button, {}, [activeSortingStatus === 'date' && cls.active])}
          >
            Ближайшие
          </button>
          <button
            onClick={(e) => handlerClick(e, 'price')}
            type="button"
            className={classNames(cls.button, {}, [activeSortingStatus === 'price' && cls.active])}
          >
            По цене
          </button>
          <button
            onClick={(e) => handlerClick(e, '')}
            type="button"
            className={classNames(cls.button, {}, [activeSortingStatus === '' && cls.active])}
          >
            По умолчанию
          </button>
        </div>
      </div>
    </>
  );
};
