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

const RegistrationLessonPopup = () => {
  const dispatch = useDispatch();
  const userName = useSelector((store) => store.auth.userName);
  const userEmail = useSelector((store) => store.auth.userEmail);
  // const userName = 'kdjvnsjv';
  // const userEmail = 'flvjnsl';

  const handleClose = useCallback(() => {
    dispatch(setIsRegistrationLessonPopupOpen(false));
  }, [dispatch]);

  const handleBookClick = useCallback(() => {
    dispatch(setIsRegistrationLessonPopupOpen(false));
    dispatch(setIsApplicationAcceptedPopupOpen(true));
  }, [dispatch]);

  useModalClose(handleClose);

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <CourseModalWrapper handleClose={handleClose}>
      <h2 className={registrationLessonPopupStyles.title}>
        {userName && userEmail ? 'Мы записали вас на занятие' : 'Мы получили вашу заявку'}
      </h2>
      <p className={`${registrationLessonPopupStyles.subtitle} ${
        !userEmail && !userName ? registrationLessonPopupStyles.center : ''
      }`}
      >
        {userName && userEmail
          ? 'Вы можете сразу оплатить занятие онлайн или забронировать, и оплатить в студии наличными'
          : 'Оператор вам перезвонит для уточнения записи'}
      </p>
      <div className={registrationLessonPopupStyles.container}>
        <img
          className={registrationLessonPopupStyles.image}
          src={eyeImagePath}
          alt="Изображение глаза из мозаики"
        />
        <div className={registrationLessonPopupStyles.info}>
          <h3 className={registrationLessonPopupStyles.infoTitle}>
            Курс по Римской мозаике однодневный
          </h3>
          <IconInfo
            iconPath={walletIconPath}
            alt="Иконка кошелёк"
            text="7 000 ₽"
            needQuestion={false}
          />
          <IconInfo
            iconPath={calendarIconPath}
            alt="Иконка календарь"
            text="17 июня 12:00"
            needQuestion={false}
          />
          <IconInfo
            iconPath={timeIconPath}
            alt="Иконка часы"
            text="3 часа"
            needQuestion={false}
          />
          <IconInfo
            iconPath={teacherIconPath}
            alt="Иконка шапка"
            text="Антон Цветов"
            needQuestion={false}
          />
          <div className={`${registrationLessonPopupStyles.buttonContainer} ${
            !userEmail && !userName ? registrationLessonPopupStyles.right : ''
          }`}
          >
            {userName && userEmail && (
              <Button
                className="outline"
                fill
                onClick={handleBookClick}
              >
                Забронировать
              </Button>
              // <button
              //   className={registrationLessonPopupStyles.button}
              //   type="submit"
              //   onClick={handleBookClick}
              // >
              //   Забронировать
              // </button>
            )}
            <Button
              className="fill"
              fill
            >
              {userName && userEmail ? 'Перейти к оплате' : 'Вернуться на главную'}
            </Button>
            {/* <button
              className={registrationLessonPopupStyles.button}
              type="button"
            >
              {userName && userEmail ? 'Перейти к оплате' : 'Вернуться на главную'}
            </button> */}
          </div>
        </div>
      </div>
    </CourseModalWrapper>,
    modalRoot,
  );
};

export default RegistrationLessonPopup;
