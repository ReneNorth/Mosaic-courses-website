import { useEffect, useState } from 'react';
import calendarStyles from './CalendarUserAccount.module.scss';
import CalendarDay from '../CalendarDay/CalendarDay';
import { generateDays, generateDaysForWeek } from '../../helpers/generateDays.js';
import { MONTHS } from '../../utils/consts/constants.js';

const CalendarUserAccount = ({ daysMasterclasses }) => {
  const [date, setDate] = useState(new Date());
  const [closestDate] = useState(new Date());
  const [activeDays, setActiveDays] = useState({});
  const [days, setDays] = useState({ previous: [], current: [], next: [] });

  const isNarrowWidth = window.innerWidth >= 360 && window.innerWidth <= 720;

  const convertDateToKey = (date) => `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

  useEffect(() => {
    setDays(isNarrowWidth ? generateDaysForWeek(date) : generateDays(date));

    const uniqueActiveDays = [...new Set(daysMasterclasses.map((d) => d.split('T')[0]))];
    setActiveDays(uniqueActiveDays);

    const handleResize = () => {
      setDays(isNarrowWidth ? generateDaysForWeek(date) : generateDays(date));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [date, daysMasterclasses, isNarrowWidth]);

  const changeDate = (delta) => {
    setDate(new Date(date.getFullYear(), date.getMonth() + delta, isNarrowWidth ? date.getDate() : 1));
  };

  const isActiveDay = (day, monthOffset = 0) => {
    const checkDate = new Date(date.getFullYear(), date.getMonth() + monthOffset, day);
    return activeDays.includes(convertDateToKey(checkDate));
  };

  const monthAndYear = `${MONTHS[date.getMonth()]} ${date.getFullYear()}`;

  return (
    <div className={calendarStyles.container}>
      <div className={calendarStyles.menu}>
        <p className={calendarStyles.currentDate}>{monthAndYear}</p>
        <div className={calendarStyles.buttonContainer}>
          <button
            className={calendarStyles.backwardButton}
            type="button"
            aria-label="Кнопка назад"
            onClick={() => changeDate(isNarrowWidth ? -7 : -1)}
          />
          <button
            className={calendarStyles.forwardButton}
            type="button"
            aria-label="Кнопка вперёд"
            onClick={() => changeDate(isNarrowWidth ? 7 : 1)}
          />
        </div>
      </div>
      <ul className={calendarStyles.weeks}>
        {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
      <ul className={calendarStyles.days}>
        {days.previous.map((day) => (
          <CalendarDay
            key={day}
            monthDay={day}
            isGrey
            isActive={false}
            isSelected={false}
          />
        ))}
        {days.current.map((day) => (
          <CalendarDay
            key={day}
            monthDay={day}
            isGrey={false}
            isActive={isActiveDay(day)}
            isSelected={
              closestDate.getDate() === day
              && closestDate.getMonth() === date.getMonth()
              && closestDate.getFullYear() === date.getFullYear()
            }
          />
        ))}
        {days.next.map((day) => (
          <CalendarDay
            key={day}
            monthDay={day}
            isGrey
            isActive={false}
            isSelected={false}
          />
        ))}
      </ul>
    </div>
  );
};

export default CalendarUserAccount;
