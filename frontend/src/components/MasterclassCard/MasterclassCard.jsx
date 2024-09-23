/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from 'react';
import cls from './MasterclassCard.module.scss';

export const MasterclassCard = ({
  masterclass,
  isModalOpen,
  openModal,
  closeModal,
}) => {
  // изменить функцию тк на бэке два метода для возврата будущих и прошлых событий
  const isPastEvent = (eventDate) => {
    return true;
  };

  return (
    <div>
      <div className={cls.flexContainer}>
        <div className={cls.leftContainer}>
          <p className={cls.date}>{masterclass.date}</p>
          <p className={cls.description}>{masterclass.description}</p>
          <div className={cls.schedule}>
            <span>{masterclass.date}</span>
            <span>{masterclass.time}</span>
            <span>{masterclass.duration}</span>
          </div>
          {isPastEvent(masterclass.date) ? (
            <p className={cls.status}>Завершено</p>
          ) : masterclass.pay ? (
            <p className={cls.status}>Оплачено</p>
          ) : (
            <button type="button" className={cls.buttonPay}>
              Оплатить
            </button>
          )}
        </div>
        <div className={cls.rightContainer}>
          <div className={cls.flexContainerForPrice}>
            <p className={cls.price}>
              {masterclass.price}
              ₽
            </p>
            <button
              type="button"
              onClick={openModal}
              className={cls.buttonPopup}
            >
              ⋮
            </button>
            {isModalOpen && (
              // <div className={cls.container} onClick={closeModal}>
              <div className={cls.popup} onClick={(e) => e.stopPropagation()}>
                <button type="button" className={cls.changeCourseButton}>
                  Перенести
                </button>
                <button type="button" className={cls.changeCourseButton}>
                  Отменить
                </button>
              </div>
              // </div>
            )}
          </div>
          <p className={cls.teacher}>{masterclass.teacher}</p>
        </div>
      </div>
    </div>
  );
};

const MasterclassList = ({ masterclasses }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [openModalIndex, setOpenModalIndex] = useState(null);

  const totalPages = Math.ceil(masterclasses.length / itemsPerPage);
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
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
    console.log('click');
  };

  return (
    <div>
      {currentMasterclasses.map((masterclass, index) => (
        <MasterclassCard
          key={masterclass.id}
          masterclass={masterclass}
          isModalOpen={openModalIndex === index}
          openModal={() => openModal(index)}
          closeModal={closeModal}
        />
      ))}
      {masterclasses.length > itemsPerPage && (
        <div className={cls.pagination}>
          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx + 1}
              type="button"
              className={currentPage === idx + 1 ? cls.activePage : cls.numberPage}
              onClick={() => setCurrentPage(idx + 1)}
            >
              {idx + 1}
            </button>
          ))}
          <button
            type="button"
            className={cls.buttonFurther}
            disabled={currentPage === totalPages}
            onClick={handleNextPage}
          >
            Дальше →
          </button>
        </div>
      )}
    </div>
  );
};

export default MasterclassList;
