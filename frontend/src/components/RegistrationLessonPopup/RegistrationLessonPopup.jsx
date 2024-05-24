import { useSelector } from 'react-redux';
import CourseModalWrapper from '../CourseModalWrapper/CourseModalWrapper';
import registrationLessonPopupStyles from './RegistrationLessonPopup.module.scss';
import eyeImagePath from '../../images/eye-image.png';
import IconInfo from '../IconInfo/IconInfo';
import timeIconPath from '../../images/time.svg';
import walletIconPath from '../../images/choise_icon-tenge.svg';
import teacherIconPath from '../../images/teacher-icon.svg';
import calendarIconPath from '../../images/calendar-icon.svg';
import { useResize } from '../../hooks/useResize';

const RegistrationLessonPopup = () => {
  const { width } = useResize();
  const userName = useSelector((store) => store.auth.userName);
  const userEmail = useSelector((store) => store.auth.userEmail);

  return (
    <CourseModalWrapper>
      <h2 className={registrationLessonPopupStyles.title}>
        {userName && userEmail ? 'Мы записали вас на занятие' : 'Мы получили вашу заявку'}
      </h2>
      <p className={registrationLessonPopupStyles.subtitle}>
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
        </div>
        <div className={registrationLessonPopupStyles.buttonContainer}>
          {userName && userEmail && (
            <button
              className={registrationLessonPopupStyles.button}
              type="submit"
            >
              Забронировать
            </button>
          )}
          <button
            className={registrationLessonPopupStyles.button}
            type="button"
          >
            {userName && userEmail ? 'Перейти к оплате' : 'вернуться на главную'}
          </button>
        </div>
      </div>
    </CourseModalWrapper>
  );
};

export default RegistrationLessonPopup;
