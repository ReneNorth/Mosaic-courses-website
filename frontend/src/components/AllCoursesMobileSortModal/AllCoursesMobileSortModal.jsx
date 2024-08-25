import { useDispatch, useSelector } from 'react-redux';
import cls from './AllCoursesMobileSortModal.module.scss';
import { classNames } from '../../helpers/classNames';
import { setCurrentSortingStatus } from '../../services/slices/coursesFiltersSlice.js';

export const AllCoursesMobileSortModal = ({ isOpen, setIsOpen }) => {
  const { sorting, activeSortingStatus } = useSelector((state) => state.coursesFilters);
  const dispatch = useDispatch();

  const handlerClick = (e, sort) => {
    e.preventDefault();
    dispatch(setCurrentSortingStatus(sort));
    setIsOpen(false);
  };

  const ordersButtons = sorting.map((el) => {
    return (
      <button
        key={crypto.randomUUID()}
        onClick={(e) => handlerClick(e, el.slug)}
        type="button"
        className={classNames(cls.button, {}, [activeSortingStatus === el.slug && cls.active])}
      >
        {el.name}
      </button>
    );
  });

  return (
    <>
      <div
        className={classNames(cls.overlay, { [cls.overlayOpen]: isOpen }, [])}
        onClick={() => setIsOpen(!isOpen)}
      />
      <div className={classNames(cls.popup, { [cls.popupOpen]: isOpen }, [])}>
        <div className={cls.contentWrapper}>
          { ordersButtons }
        </div>
      </div>
    </>
  );
};
