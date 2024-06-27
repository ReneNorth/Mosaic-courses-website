import calendarDayStyles from './CalendarDay.module.scss';

const CalendarDay = ({
  monthDay, isActive, isGrey, isSelected, handleClick,
}) => {
  return (
    <li
      className={`
        ${calendarDayStyles.day} 
        ${isActive ? calendarDayStyles.active : ''} 
        ${isGrey ? calendarDayStyles.grey : ''}
        ${isSelected ? calendarDayStyles.selected : ''}
      `}
    >
      {isActive ? (
        <button
          className={calendarDayStyles.button}
          onClick={handleClick}
          type="button"
        >
          {monthDay}
        </button>
      ) : (
        monthDay
      )}
    </li>
  );
};

export default CalendarDay;
