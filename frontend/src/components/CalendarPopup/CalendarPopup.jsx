import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useCallback } from 'react';
import calendarPopupStyles from './CalendarPopup.module.scss';
import timeIconPath from '../../images/time.svg';
import walletIconPath from '../../images/choise_icon-tenge.svg';
import teacherIconPath from '../../images/teacher-icon.svg';
import { useModalClose } from '../../hooks/useModalClose';
import { setIsCalendarPopupOpen, setIsRegistrationLessonPopupOpen } from '../../services/slices/popupSlice';
import { InputField } from '../InputField/InputField';
import { useFormValidation } from '../../hooks/useFormValidation';
import Calendar from '../Calendar/Calendar';
import CourseModalWrapper from '../CourseModalWrapper/CourseModalWrapper';
import IconInfo from '../IconInfo/IconInfo';
import { Button } from '../Button/Button';

const CalendarPopup = () => {
  const dispatch = useDispatch();
  const currentCourse = useSelector((store) => store.courses.currentCourse);
  const selectedLesson = useSelector((store) => store.courses.selectedLesson);

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

  const calculateLessonDuration = (timeStart, timeEnd) => {
    const diffMs = new Date(timeEnd) - new Date(timeStart);

    let diffHours = diffMs / (1000 * 60 * 60);

    diffHours = Math.round(diffHours);

    if (diffHours > 12) {
      diffHours = 12;
    }

    let hoursWord;
    if (diffHours === 1) {
      hoursWord = 'час';
    } else if (diffHours >= 2 && diffHours <= 4) {
      hoursWord = 'часа';
    } else {
      hoursWord = 'часов';
    }

    return `${diffHours} ${hoursWord}`;
  };

  useModalClose(handleClose);

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <CourseModalWrapper handleClose={handleClose}>
      <h2 className={calendarPopupStyles.title}>
        {`Мастеркласс по Римской мозаике ${currentCourse?.title?.toLowerCase()}`}
      </h2>
      <div className={calendarPopupStyles.container}>
        <Calendar />
        <div className={calendarPopupStyles.info}>
          <h3 className={calendarPopupStyles.infoTitle}>Информация о занятии</h3>
          <div className={calendarPopupStyles.iconContainersWrapper}>
            <IconInfo
              iconPath={walletIconPath}
              alt="Иконка кошелёк"
              text={`${selectedLesson.price} ${selectedLesson.currency}`}
              needQuestion
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
          </div>
          <form className={calendarPopupStyles.form} onSubmit={handleSubmit} noValidate>
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
            <div className={calendarPopupStyles.buttonContainer}>
              <Button
                className="fill"
                fill
                type="submit"
              >
                Записаться
              </Button>
            </div>
          </form>
        </div>
      </div>
    </CourseModalWrapper>,
    modalRoot,
  );
};

export default CalendarPopup;
