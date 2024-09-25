import { useState } from 'react';
import cls from './MasterclassList.module.scss';
import { MasterclassCard } from '../MasterclassCard/MasterclassCard';

const MasterclassList = ({
  masterclasses,
  message,
  showPopupButton,
  isEventPast,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [openModalIndex, setOpenModalIndex] = useState(null);

  const totalPages = Math.ceil(masterclasses.length / itemsPerPage);
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const currentMasterclasses = masterclasses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const openModal = (index) => {
    setOpenModalIndex(index);
  };

  const closeModal = () => {
    setOpenModalIndex(null);
  };

  return (
    <div>
      {masterclasses.length === 0 ? (
        <p className={cls.text}>{message}</p>
      ) : (
        <>
          {currentMasterclasses.map((masterclass, index) => (
            <MasterclassCard
              key={masterclass.id}
              masterclass={masterclass}
              isModalOpen={openModalIndex === index}
              openModal={() => openModal(index)}
              closeModal={closeModal}
              showPopupButton={showPopupButton}
              isEventPast={isEventPast}
            />
          ))}
          {masterclasses.length > itemsPerPage && (
            <div className={cls.pagination}>
              {currentPage === totalPages ? (
                <button
                  type="button"
                  className={cls.buttonChangeCurrentPage}
                  disabled={currentPage === 1}
                  onClick={handlePreviousPage}
                >
                  ← Назад
                </button>
              ) : null}
              {[...Array(totalPages)].map((_, idx) => (
                <button
                  // eslint-disable-next-line react/no-array-index-key
                  key={idx + 1}
                  type="button"
                  className={
                    currentPage === idx + 1 ? cls.activePage : cls.numberPage
                  }
                  onClick={() => setCurrentPage(idx + 1)}
                >
                  {idx + 1}
                </button>
              ))}
              {currentPage < totalPages && (
                <button
                  type="button"
                  className={cls.buttonChangeCurrentPage}
                  disabled={currentPage === totalPages}
                  onClick={handleNextPage}
                >
                  Дальше →
                </button>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MasterclassList;
