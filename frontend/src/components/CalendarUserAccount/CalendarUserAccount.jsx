import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import calendarStyles from './CalendarUserAccount.module.scss';
import CalendarDay from '../CalendarDay/CalendarDay';
import { setSelectedLesson } from '../../services/slices/coursesSlice.js';
import { generateDays, generateDaysForWeek } from '../../helpers/generateDays.js';
import { MONTHS } from '../../utils/consts/constants.js';

const Calendar = () => {
  const dispatch = useDispatch();
  const currentCourse = useSelector((store) => store.courses.currentCourse);
  const [date, setDate] = useState(new Date());
  const [closestDate, setClosestDate] = useState(new Date());
  const [activeDays, setActiveDays] = useState({});
  const [days, setDays] = useState({ previous: [], current: [], next: [] });

  function convertDateToKey(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }

  useEffect(() => {
    const futureDates = Object.keys(activeDays).map((dateKey) => new Date(dateKey)).sort((a, b) => a - b);
    if (futureDates.length) {
      const closestDate = futureDates[0];
      setClosestDate(closestDate);
      const closestLesson = activeDays[convertDateToKey(closestDate)]
        .filter((masterclass) => new Date(masterclass.time_start) >= new Date())
        .sort((a, b) => new Date(a.time_start) - new Date(b.time_start))[0];
      if (closestLesson) {
        dispatch(setSelectedLesson(closestLesson));
      }
    }
  }, [activeDays, dispatch]);

  useEffect(() => {
    const activeDates = {};
    // currentCourse.masterclasses.forEach((masterclass) => {
    //   const masterclassDate = new Date(masterclass.time_start);
    //   if (masterclassDate >= new Date()) {
    //     const key = convertDateToKey(masterclassDate);
    //     if (!activeDates[key]) {
    //       activeDates[key] = [];
    //     }
    //     activeDates[key].push(masterclass);
    //   }
    // });
    setActiveDays(activeDates);
  }, [currentCourse]);

  useEffect(() => {
    const updateDays = () => {
      const isNarrowWidth = window.innerWidth >= 360 && window.innerWidth <= 720;
      if (isNarrowWidth) {
        setDays(generateDaysForWeek(date));
      } else {
        setDays(generateDays(date));
      }
    };

    updateDays();
    window.addEventListener('resize', updateDays);
    return () => window.removeEventListener('resize', updateDays);
  }, [date]);

  const goToPrevious = () => {
    const isNarrowWidth = window.innerWidth >= 360 && window.innerWidth <= 720;
    if (isNarrowWidth) {
      setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7));
    } else {
      setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
    }
  };

  const goToNext = () => {
    const isNarrowWidth = window.innerWidth >= 360 && window.innerWidth <= 719;
    if (isNarrowWidth) {
      setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7));
    } else {
      setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
    }
  };

  const isActiveDay = (day, monthOffset = 0) => {
    const checkDate = new Date(date.getFullYear(), date.getMonth() + monthOffset, day);
    return convertDateToKey(checkDate) in activeDays;
  };

  const handleDayClick = (day) => {
    const selectedDate = new Date(date.getFullYear(), date.getMonth(), day);
    const selectedDateKey = convertDateToKey(selectedDate);
    if (selectedDateKey in activeDays) {
      setClosestDate(selectedDate);
      const lessonsForTheDay = activeDays[selectedDateKey]
        .sort((a, b) => new Date(a.time_start) - new Date(b.time_start));
      if (lessonsForTheDay.length > 0) {
        dispatch(setSelectedLesson(lessonsForTheDay[0]));
      }
    }
  };

  // const handleTimeClick = (lesson) => {
  //   dispatch(setSelectedLesson(lesson));
  // };

  const monthAndYear = `${MONTHS[date.getMonth()]} ${date.getFullYear()}`;

  return (
    <div className={calendarStyles.container}>
      {/* <h3 className={calendarStyles.title}>Выберите дату и время занятия</h3> */}
      <div className={calendarStyles.menu}>
        <p className={calendarStyles.currentDate}>{monthAndYear}</p>
        <div className={calendarStyles.buttonContainer}>
          <button
            className={calendarStyles.backwardButton}
            type="button"
            aria-label="Кнопка назад"
            onClick={goToPrevious}
          />
          <button
            className={calendarStyles.forwardButton}
            type="button"
            aria-label="Кнопка вперёд"
            onClick={goToNext}
          />
        </div>
      </div>
      <ul className={calendarStyles.weeks}>
        <li>Пн</li>
        <li>Вт</li>
        <li>Ср</li>
        <li>Чт</li>
        <li>Пт</li>
        <li>Сб</li>
        <li>Вс</li>
      </ul>
      <ul className={calendarStyles.days}>
        {days.previous.map((day) => (
          <CalendarDay key={crypto.randomUUID()} monthDay={day} isGrey isActive={false} isSelected={false} />
        ))}
        {days.current.map((day) => (
          <CalendarDay
            key={crypto.randomUUID()}
            monthDay={day}
            isGrey={false}
            isActive={isActiveDay(day)}
            isSelected={
              closestDate.getDate() === day
              && closestDate.getMonth() === date.getMonth()
              && closestDate.getFullYear() === date.getFullYear()
            }
            handleClick={() => handleDayClick(day)}
          />
        ))}
        {days.next.map((day) => (
          <CalendarDay key={crypto.randomUUID()} monthDay={day} isGrey isActive={false} isSelected={false} />
        ))}
      </ul>
      {/* <div className={calendarStyles.time}>
        <p className={calendarStyles.timeTitle}>Время</p>
        <div className={calendarStyles.timeAndPriceContainer}>
          {activeDays[convertDateToKey(closestDate)] ? activeDays[convertDateToKey(closestDate)]
            .sort((a, b) => new Date(a.time_start) - new Date(b.time_start))
            .map((lesson) => (
              <TimeAndPrice
                key={lesson.id}
                time={new Date(lesson.time_start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                price={`${lesson.price} ${lesson.currency}`}
                isSelected={selectedLesson.time_start === lesson.time_start}
                handleClick={() => handleTimeClick(lesson)}
              />
            )) : <p> </p>}
        </div>
      </div> */}
    </div>
  );
};

export default Calendar;
