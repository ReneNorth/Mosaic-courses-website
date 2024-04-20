import cls from './AllCoursesMobileSortModal.module.scss';
import { classNames } from '../../helpers/classNames';

export const AllCoursesMobileSortModal = ({
  isOpen, setIsOpen, sortingStatus, setSortingStatus,
}) => {
  const handlerRecommended = (e) => {
    e.preventDefault();
    setSortingStatus('recommended');
    setIsOpen(false);
  };

  const handlerForBeginners = (e) => {
    e.preventDefault();
    setSortingStatus('forBeginners');
    setIsOpen(false);
  };

  const handlerDefault = (e) => {
    e.preventDefault();
    setSortingStatus('default');
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
            onClick={(e) => handlerRecommended(e)}
            type="button"
            className={classNames(cls.button, {}, [sortingStatus === 'recommended' && cls.active])}
          >
            Рекомендованные
          </button>
          <button
            onClick={(e) => handlerForBeginners(e)}
            type="button"
            className={classNames(cls.button, {}, [sortingStatus === 'forBeginners' && cls.active])}
          >
            Для начинающих
          </button>
          <button
            onClick={(e) => handlerDefault(e)}
            type="button"
            className={classNames(cls.button, {}, [sortingStatus === 'default' && cls.active])}
          >
            По умолчанию
          </button>
        </div>
      </div>
    </>
  );
};
