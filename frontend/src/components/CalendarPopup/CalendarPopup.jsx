import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState, useCallback } from 'react';
import calendarPopupStyles from './CalendarPopup.module.scss';
import timeIconPath from '../../images/time.svg';
import walletIconPath from '../../images/choise_icon-tenge.svg';
import teacherIconPath from '../../images/teacher-icon.svg';
import { useModalClose } from '../../hooks/useModalClose';
import { setIsCalendarPopupOpen, setIsRegistrationLessonPopupOpen } from '../../services/slices/popupSlice';
import { InputField } from '../InputField/InputField';
import { useFormValidation } from '../../hooks/useFormValidation';
import Calendar from '../Calendar/Calendar';
import { useResize } from '../../hooks/useResize';
import CourseModalWrapper from '../CourseModalWrapper/CourseModalWrapper';
import IconInfo from '../IconInfo/IconInfo';

const CalendarPopup = () => {
  const dispatch = useDispatch();
  const { width } = useResize();

  const userName = useSelector((store) => store.auth.userName);
  const userEmail = useSelector((store) => store.auth.userEmail);
  // const userName = true;
  // const userEmail = true;

  const {
    errors, handleChange, values,
  } = useFormValidation();

  const handleClose = useCallback(() => {
    dispatch(setIsCalendarPopupOpen(false));
  }, [dispatch]);

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(setIsCalendarPopupOpen(false));
    dispatch(setIsRegistrationLessonPopupOpen(true));
  }

  useModalClose(handleClose);

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <CourseModalWrapper handleClose={handleClose}>
      <h2 className={calendarPopupStyles.title}>Курс по Римской мозаике однодневный</h2>
      <div className={calendarPopupStyles.container}>
        <Calendar />
        <div className={calendarPopupStyles.info}>
          <h3 className={calendarPopupStyles.infoTitle}>Информация о занятии</h3>
          <div className={calendarPopupStyles.iconContainersWrapper}>
            <IconInfo
              iconPath={walletIconPath}
              alt="Иконка кошелёк"
              text="7 000 ₽"
              needQuestion
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
          </div>
          <form className={calendarPopupStyles.form} onSubmit={handleSubmit}>
            {!userName && !userEmail && (
              <div className={calendarPopupStyles.notAuthorizedUserContainer}>
                <div className={calendarPopupStyles.linkContainer}>
                  <p className={calendarPopupStyles.linkText}>
                    Чтобы запись появилась в личном кабинете, вы также можете
                    <br />
                    <Link className={calendarPopupStyles.link} to="/sign-in"> войти в аккаунт </Link>
                    или
                    <Link className={calendarPopupStyles.link} to="/register"> зарегистрироваться</Link>
                  </p>
                </div>
                <InputField
                  type="name"
                  placeholder="Имя*"
                  errors={errors}
                  handleChange={handleChange}
                  values={values}
                />
                <InputField
                  type="tel"
                  placeholder="Телефон*"
                  errors={errors}
                  handleChange={handleChange}
                  values={values}
                />
              </div>
            )}
            <button
              className={calendarPopupStyles.submitButton}
              type="submit"
              style={(userName && userEmail && width >= 744 && width < 1320) ? { marginTop: 9 } : {}}
            >
              Записаться
            </button>
          </form>
        </div>
      </div>
    </CourseModalWrapper>,
    modalRoot,
  );
};

export default CalendarPopup;
