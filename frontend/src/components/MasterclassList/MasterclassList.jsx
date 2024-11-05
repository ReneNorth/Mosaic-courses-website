import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import cls from './MasterclassList.module.scss';
import { MasterclassCard } from '../MasterclassCard/MasterclassCard';
import { formatCourseDate } from '../../helpers/formatDate';

const MasterclassList = ({
  masterclasses,
  message,
  showPopupButton,
  isEventPast,
}) => {
  const path = '/my-masterclasses';
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [openModalIndex, setOpenModalIndex] = useState(null);

  const totalPages = Math.ceil(masterclasses.length / itemsPerPage);

  const currentMasterclasses = masterclasses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const sortCurrentMasterclasses = currentMasterclasses.sort((a, b) => new Date(a.time_start) - new Date(b.time_start));

  const today = new Date();
  const todayDate = formatCourseDate(today);

  const todayStart = new Date(today.setHours(0, 0, 0, 0));
  const todayEnd = new Date(today.setHours(23, 59, 59, 999));

  const todayMasterclasses = masterclasses.filter((masterclass) => {
    const masterclassDate = new Date(masterclass.time_start);
    return masterclassDate >= todayStart && masterclassDate <= todayEnd;
  });

  const todayMasterclassIds = new Set(todayMasterclasses.map((masterclass) => masterclass.id));

  const uniqueCurrentMasterclasses = sortCurrentMasterclasses
    .filter((masterclass) => !todayMasterclassIds.has(masterclass.id))
    .sort((a, b) => new Date(a.time_start) - new Date(b.time_start));

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      scrollToTop();
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      scrollToTop();
    }
  };

  const openModal = (index) => {
    setOpenModalIndex(index);
  };

  const closeModal = () => {
    setOpenModalIndex(null);
  };

  const renderMasterclassCards = (masterclassArray) => {
    return masterclassArray.map((masterclass, index) => {
      const currentDate = masterclass.time_start.split('T')[0];
      const previousDate = masterclassArray[index - 1] ? masterclassArray[index - 1].time_start.split('T')[0] : null;
      const nextDate = masterclassArray[index + 1] ? masterclassArray[index + 1].time_start.split('T')[0] : null;
      const isSameDate = currentDate === nextDate;
      const isSameNextDate = previousDate && currentDate === previousDate;

      return (
        <MasterclassCard
          key={masterclass.id}
          todayDate={todayDate}
          masterclass={masterclass}
          isModalOpen={openModalIndex === index}
          openModal={() => openModal(index)}
          closeModal={closeModal}
          showPopupButton={showPopupButton}
          isEventPast={isEventPast}
          isSameDate={isSameDate}
          isSameNextDate={isSameNextDate}
        />
      );
    });
  };

  return (
    <div className={cls.cardContainer}>
      {masterclasses.length === 0 && (
        <p className={cls.text}>{message}</p>
      )}

      {masterclasses.length > 0 && path === location.pathname && todayMasterclasses.length > 0 && (
        <>
          {currentPage === 1 && renderMasterclassCards(todayMasterclasses)}
          {renderMasterclassCards(uniqueCurrentMasterclasses)}
        </>
      )}

      {masterclasses.length > 0 && path === location.pathname && todayMasterclasses.length === 0 && (
        <>
          {currentPage === 1
          && (
            <>
              <p className={cls.date}>Сегодня</p>
              <p className={cls.text}>{`Нет занятий сегодня, ${todayDate}`}</p>
            </>
          )}
          {renderMasterclassCards(sortCurrentMasterclasses)}
        </>
      )}

      {masterclasses.length > 0 && path !== location.pathname && (
        renderMasterclassCards(sortCurrentMasterclasses)
      )}

      {masterclasses.length > itemsPerPage && (
        <div className={cls.pagination}>
          {currentPage > 1 && (
            <button
              type="button"
              className={cls.buttonChangeCurrentPage}
              onClick={handlePreviousPage}
            >
              ← Назад
            </button>
          )}

          {[...Array(totalPages)].map((_, idx) => (
            <button
              // eslint-disable-next-line react/no-array-index-key
              key={idx + 1}
              type="button"
              className={
                currentPage === idx + 1 ? cls.activePage : cls.numberPage
              }
              onClick={() => {
                setCurrentPage(idx + 1);
                scrollToTop();
              }}
            >
              {idx + 1}
            </button>
          ))}
          {currentPage < totalPages && (
            <button
              type="button"
              className={cls.buttonChangeCurrentPage}
              onClick={handleNextPage}
            >
              Дальше →
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default MasterclassList;
