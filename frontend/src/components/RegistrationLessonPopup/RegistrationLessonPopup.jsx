import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import CourseModalWrapper from '../CourseModalWrapper/CourseModalWrapper';
import registrationLessonPopupStyles from './RegistrationLessonPopup.module.scss';
import eyeImagePath from '../../images/eye-image.png';
import IconInfo from '../IconInfo/IconInfo';
import timeIconPath from '../../images/time.svg';
import walletIconPath from '../../images/choise_icon-tenge.svg';
import teacherIconPath from '../../images/teacher-icon.svg';
import calendarIconPath from '../../images/calendar-icon.svg';
import { setIsApplicationAcceptedPopupOpen, setIsRegistrationLessonPopupOpen } from '../../services/slices/popupSlice';
import { useModalClose } from '../../hooks/useModalClose';
import { Button } from '../Button/Button';
import { calculateLessonDuration } from '../../utils/functions/timeFunctions';

const RegistrationLessonPopup = () => {
  const dispatch = useDispatch();
  const currentCourse = useSelector((store) => store.courses.currentCourse);
  const selectedLesson = useSelector((store) => store.courses.selectedLesson);

  const handleClose = useCallback(() => {
    dispatch(setIsRegistrationLessonPopupOpen(false));
  }, [dispatch]);

  const handleBookClick = useCallback(() => {
    dispatch(setIsRegistrationLessonPopupOpen(false));
    dispatch(setIsApplicationAcceptedPopupOpen(true));
  }, [dispatch]);

  const getFormattedDate = (dateString) => {
    const date = new Date(dateString);
    const months = [
      'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
      'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${day} ${month} ${hours}:${minutes}`;
  };

  useModalClose(handleClose);

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <CourseModalWrapper handleClose={handleClose}>
      <h2 className={registrationLessonPopupStyles.title}>
        Запись на мастер-класс
      </h2>
      <p className={registrationLessonPopupStyles.subtitle}>
        Вы можете сразу оплатить мастер-класс онлайн или забронировать, и оплатить его в студии, наличными.
      </p>
      <div className={registrationLessonPopupStyles.container}>
        <img
          className={registrationLessonPopupStyles.image}
          src={eyeImagePath}
          alt="Изображение глаза из мозаики"
        />
        <div className={registrationLessonPopupStyles.info}>
          <h3 className={registrationLessonPopupStyles.infoTitle}>
            Мастер-класс по Римской мозаике
            <span>{` ${currentCourse?.title.toLowerCase()}`}</span>
          </h3>
          <IconInfo
            iconPath={walletIconPath}
            alt="Иконка кошелёк"
            text={`${selectedLesson?.price} ${selectedLesson?.currency}`}
            needQuestion={false}
          />
          <IconInfo
            iconPath={calendarIconPath}
            alt="Иконка календарь"
            text={getFormattedDate(selectedLesson?.time_start)}
            needQuestion={false}
          />
          <IconInfo
            iconPath={timeIconPath}
            alt="Иконка часы"
            text={calculateLessonDuration(selectedLesson.time_start, selectedLesson.time_end)}
            needQuestion={false}
          />
          <IconInfo
            iconPath={teacherIconPath}
            alt="Иконка шапка"
            text={`${selectedLesson.teacher_first_name} ${selectedLesson.teacher_last_name}`}
            needQuestion={false}
          />
          <div className={registrationLessonPopupStyles.buttonContainer}>
            <Button
              className="outline"
              fill
              onClick={handleBookClick}
            >
              Продолжить
            </Button>
            <Button
              className="fill"
              fill
            >
              Перейти к оплате
            </Button>
          </div>
        </div>
      </div>
    </CourseModalWrapper>,
    modalRoot,
  );
};

export default RegistrationLessonPopup;
