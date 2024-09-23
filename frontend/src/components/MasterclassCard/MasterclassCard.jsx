/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from 'react';
import cls from './MasterclassCard.module.scss';

export const MasterclassCard = ({ masterclasses }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const openModal = () => {
    setModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const totalPages = Math.ceil(masterclasses.length / itemsPerPage);
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentMasterclasses = masterclasses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  // изменить функцию тк на бэке два метода для возврата будущих и прошлых событий
  const isPastEvent = (eventDate) => {
    console.log(eventDate);
    return true;
  };

  return (
    <>
      <div>
        {currentMasterclasses.map((masterclass, i) => (
          <div className={cls.flexContainer} key={i}>
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
              </div>
              <p className={cls.teacher}>{masterclass.teacher}</p>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className={cls.container} onClick={closeModal}>
          <div className={cls.popup} onClick={(e) => e.stopPropagation()}>
            <button type="button" className={cls.popupButton}>Перенести</button>
            <button type="button" className={cls.popupButton}>Отменить</button>
          </div>
        </div>
      )}

      {masterclasses.length > itemsPerPage && (
        <div className={cls.pagination}>
          {[...Array(totalPages)].map((_, index) => (
            <button
              // eslint-disable-next-line react/no-array-index-key
              key={index + 1}
              type="button"
              className={currentPage === index + 1 ? cls.activePage : cls.numberPage}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
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
    </>
  );
};
