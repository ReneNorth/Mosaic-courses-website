/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useEffect, useRef } from 'react';
import cls from './MasterclassCard.module.scss';

export const MasterclassCard = ({
  masterclass,
  isModalOpen,
  openModal,
  closeModal,
}) => {
  const popupRef = useRef(null);

  // Close modal if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      if (isModalOpen) {
        document.removeEventListener('mousedown', handleClickOutside);
      }
    };
  }, [isModalOpen, closeModal]);

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
              <div ref={popupRef} className={cls.popup}>
                <button type="button" className={cls.changeCourseButton}>
                  Перенести
                </button>
                <button type="button" className={cls.changeCourseButton}>
                  Отменить
                </button>
              </div>
            )}
          </div>
          <p className={cls.teacher}>{masterclass.teacher}</p>
        </div>
      </div>
    </div>
  );
};
