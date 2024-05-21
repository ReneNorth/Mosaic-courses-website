import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import calendarPopupStyles from './CalendarPopup.module.scss';
import timeIconPath from '../../images/time.svg';
import walletIconPath from '../../images/choise_icon-tenge.svg';
import teacherIconPath from '../../images/teacher-icon.svg';
import { useModalClose } from '../../hooks/useModalClose';
import { setIsCalendarPopupOpen } from '../../services/slices/popupSlice';
import { InputField } from '../InputField/InputField';
import { useFormValidation } from '../../hooks/useFormValidation';
import Calendar from '../Calendar/Calendar';
import { useResize } from '../../hooks/useResize';

const CalendarPopup = () => {
  const dispatch = useDispatch();
  const { width } = useResize();

  const userName = useSelector((store) => store.auth.userName);
  const userEmail = useSelector((store) => store.auth.userEmail);
  // const userName = true;
  // const userEmail = true;

  const [isHintVisible, setIsHintVisible] = useState(false);

  const {
    errors, handleChange, values,
  } = useFormValidation();

  console.log('calendar values', values);

  function handleClose() {
    dispatch(setIsCalendarPopupOpen(false));
  }

  function handleHintVisibility() {
    setIsHintVisible(!isHintVisible);
  }

  useModalClose(handleClose);

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <div className={calendarPopupStyles.overlay}>
      <div className={calendarPopupStyles.popup}>
        <h2 className={calendarPopupStyles.title}>Курс по Римской мозаике однодневный</h2>
        <button
          type="button"
          className={calendarPopupStyles.closeButton}
          aria-label="close"
          onClick={handleClose}
        />
        <div className={calendarPopupStyles.container}>
          <Calendar />
          <div className={calendarPopupStyles.info}>
            <h3 className={calendarPopupStyles.infoTitle}>Информация о занятии</h3>
            <div className={calendarPopupStyles.iconContainersWrapper}>
              <div className={calendarPopupStyles.iconContainer}>
                <img className={calendarPopupStyles.icon} src={walletIconPath} alt="Иконка кошелёк" />
                <p className={calendarPopupStyles.iconLabel}>7 000 ₽</p>
                <button
                  type="button"
                  className={calendarPopupStyles.question}
                  aria-label="Иконка вопрос"
                  onClick={handleHintVisibility}
                />
                {isHintVisible && width > 1320
                  && (
                    <div className={calendarPopupStyles.hintContainer}>
                      <p className={calendarPopupStyles.hint}>
                        Стоимость меняется в зависимости от курса и преподавателя
                      </p>
                    </div>
                  )}
              </div>
              {isHintVisible && width <= 1320 && (
                <div className={calendarPopupStyles.hintContainer}>
                  <p className={calendarPopupStyles.hint}>
                    Стоимость меняется в зависимости от курса и преподавателя
                  </p>
                </div>
              )}
              <div className={calendarPopupStyles.iconContainer}>
                <img className={calendarPopupStyles.icon} src={timeIconPath} alt="Иконка часы" />
                <p className={calendarPopupStyles.iconLabel}>3 часа</p>
              </div>
              <div className={calendarPopupStyles.iconContainer}>
                <img className={calendarPopupStyles.icon} src={teacherIconPath} alt="Иконка шапка" />
                <p className={calendarPopupStyles.iconLabel}>Антон Цветов</p>
              </div>
            </div>
            <form className={calendarPopupStyles.form}>
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
      </div>
    </div>,
    modalRoot,
  );
};

export default CalendarPopup;
