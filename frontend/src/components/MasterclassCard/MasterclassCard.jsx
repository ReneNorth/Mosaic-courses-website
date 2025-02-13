/* eslint-disable no-nested-ternary */
import { useEffect, useRef } from 'react';
import cls from './MasterclassCard.module.scss';
import { calculateLessonDuration } from '../../utils/functions/timeFunctions';
import { formatCourseDate } from '../../helpers/formatDate';
import { formatCourseWeekDay } from '../../helpers/formatWeekDay';

export const MasterclassCard = ({
  todayDate,
  masterclass,
  isModalOpen,
  openModal,
  closeModal,
  showPopupButton,
  isEventPast,
  isSameDate,
  isSameNextDate,
}) => {
  const popupRef = useRef(null);

  const yesterdayDate = new Date();
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  const formattedYesterday = formatCourseDate(yesterdayDate);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedOutside = popupRef.current && !popupRef.current.contains(event.target);
      if (clickedOutside) {
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

  const formatMasterclassDate = (masterclassTimeStart) => {
    const courseDate = new Date(masterclassTimeStart);
    const formattedDate = formatCourseDate(courseDate);

    if (formattedDate === todayDate) {
      return `Сегодня, ${formattedDate}`;
    }

    if (formattedDate === formattedYesterday) {
      return `Вчера, ${formattedDate}`;
    }

    return `${formatCourseWeekDay(courseDate)}, ${formattedDate}`;
  };

  return (
    <div className={cls.wrapper}>
      <p className={`${isSameNextDate ? cls.hidden : cls.date}`}>
        {formatMasterclassDate(masterclass.time_start)}
      </p>
      <div className={`${cls.borderContainer} ${!isSameDate ? cls.borderActive : ''}`}>
        <div className={cls.flexContainer}>
          <p className={cls.description}>{masterclass.title}</p>
          <div className={cls.flexContainerForPrice}>
            <p className={cls.price}>
              {masterclass.price && masterclass.currency
                ? `${masterclass?.price} ${masterclass?.currency}`
                : ''}
            </p>
            {showPopupButton && (
              <button
                type="button"
                onClick={openModal}
                className={cls.buttonPopup}
              >
                ⋮
              </button>
            )}
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
        </div>
        <div className={cls.schedule}>
          <span>{formatCourseDate(new Date(masterclass.time_start))}</span>
          <span>
            {new Date(masterclass.time_start).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </span>
          <span>
            {masterclass.time_start && masterclass.time_end
              ? calculateLessonDuration(
                masterclass?.time_start,
                masterclass?.time_end,
              )
              : ''}
          </span>
        </div>
        <div className={`${cls.flexContainerWithLine} ${!isSameDate ? '' : cls.borderActive}`}>
          <p className={cls.teacher}>
            {masterclass.teacher_first_name && masterclass.teacher_last_name
              ? `${masterclass?.teacher_first_name} ${masterclass.teacher_last_name}`
              : ''}
          </p>
          {isEventPast ? (
            <p className={cls.status}>Завершено</p>
          ) : masterclass.pay ? (
            <p className={cls.status}>Оплачено</p>
          ) : (
            <button type="button" className={cls.buttonPay}>
              Оплатить
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
