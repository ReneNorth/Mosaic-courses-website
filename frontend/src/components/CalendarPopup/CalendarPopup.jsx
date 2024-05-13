import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import calendarPopupStyles from './CalendarPopup.module.scss';
import timeIconPath from '../../images/time.svg';
import walletIconPath from '../../images/choise_icon-tenge.svg';
import teacherIconPath from '../../images/teacher-icon.svg';
import { ModalOverlay } from '../ModalOverlay/ModalOverlay';
import { useModalClose } from '../../hooks/useModalClose';
import { setIsCalendarPopupOpen } from '../../services/slices/popupSlice';

const CalendarPopup = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((store) => store.popup.isCalendarPopupOpen);
  const userName = useSelector((store) => store.auth.userName);

  function handleClose() {
    dispatch(setIsCalendarPopupOpen(false));
  }

  useModalClose(handleClose);

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <ModalOverlay>
      <div className={calendarPopupStyles.popup}>
        <h2 className={calendarPopupStyles.title}>Курс по Римской мозаике однодневный</h2>
        <button
          type="button"
          className={calendarPopupStyles.closeButton}
          aria-label="close"
          onClick={handleClose}
        />
        <div className={calendarPopupStyles.container}>
          {/* Тут будет календарь */}
          <div className={calendarPopupStyles.info}>
            <h3 className={calendarPopupStyles.infoTitle}>Информация о занятии</h3>
            <div className={calendarPopupStyles.iconContainer}>
              <img className={calendarPopupStyles.icon} src={walletIconPath} alt="Иконка кошелёк" />
              <p className={calendarPopupStyles.iconLabel}>7 000 ₽</p>
            </div>
            <div className={calendarPopupStyles.iconContainer}>
              <img className={calendarPopupStyles.icon} src={timeIconPath} alt="Иконка часы" />
              <p className={calendarPopupStyles.iconLabel}>3 часа</p>
            </div>
            <div className={calendarPopupStyles.iconContainer}>
              <img className={calendarPopupStyles.icon} src={teacherIconPath} alt="Иконка шапка" />
              <p className={calendarPopupStyles.iconLabel}>Антон Цветов</p>
            </div>
            {!userName && (
              <div className={calendarPopupStyles.notAuthorizedUserContainer}>
                <div className={calendarPopupStyles.linkContainer}>
                  <p className={calendarPopupStyles.linkText}>
                    Чтобы запись появилась в личном кабинете, вы также можете
                    <Link className={calendarPopupStyles.link} to="/login"> войти в аккаунт</Link>
                    или
                    <Link className={calendarPopupStyles.link} to="/login"> зарегистрироваться</Link>
                  </p>
                </div>
                <input
                  className={calendarPopupStyles.input}
                  type="text"
                  placeholder="Имя*"
                />
                <input
                  className={calendarPopupStyles.input}
                  type="tel"
                  placeholder="Телефон*"
                />
              </div>
            )}
            <button className={calendarPopupStyles.submitButton} type="submit">Записаться</button>
          </div>
        </div>
      </div>
    </ModalOverlay>,
    modalRoot,
  );
};

export default CalendarPopup;
