import calendarDayStyles from './CalendarDay.module.scss';

const CalendarDay = ({ monthDay, isActive, isGrey }) => {
  return (
    <li
      className={`
        ${calendarDayStyles.day} 
        ${!isActive ? calendarDayStyles.active : ''} 
        ${isGrey ? calendarDayStyles.grey : ''}
      `}
    >
      {monthDay}
    </li>
  );
};

export default CalendarDay;
