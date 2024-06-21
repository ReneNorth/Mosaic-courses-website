import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import TimeAndPrice from '../TimeAndPrice/TimeAndPrice';
import calendarStyles from './Calendar.module.scss';

const Calendar = () => {
  const currentCourse = useSelector((store) => store.courses.currentCourse);
  const [monthAndYear, setMonthAndYear] = useState('');
  const [previousMonthDays, setPreviousMonthDays] = useState([]);
  const [currentMonthDays, setCurrentMonthDays] = useState([]);
  const [nextMonthDays, setNextMonthDays] = useState([]);

  useEffect(() => {
    const findNearestFutureDate = () => {
      const now = new Date();
      let nearestDate = null;

      currentCourse.masterclasses.forEach((masterclass) => {
        const startDate = new Date(masterclass.time_start);
        if (startDate > now && (!nearestDate || startDate < nearestDate)) {
          nearestDate = startDate;
        }
      });

      if (nearestDate) {
        const months = [
          'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
          'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',
        ];
        const month = months[nearestDate.getMonth()];
        const year = nearestDate.getFullYear();
        setMonthAndYear(`${month} ${year}`);
      } else {
        setMonthAndYear('Нет доступных дат');
      }
    };

    if (currentCourse?.masterclasses) {
      findNearestFutureDate();
    }
  }, [currentCourse]);

  useEffect(() => {

  }, []);

  return (
    <div className={calendarStyles.container}>
      <h3 className={calendarStyles.title}>Выберите дату и время занятия</h3>
      <div className={calendarStyles.menu}>
        <p className={calendarStyles.currentDate}>{monthAndYear}</p>
        <div className={calendarStyles.buttonContainer}>
          <button className={calendarStyles.backwardButton} type="button" aria-label="Кнопка назад" />
          <button className={calendarStyles.forwardButton} type="button" aria-label="Кнопка вперёд" />
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
        <li><span>29</span></li>
        <li><span>30</span></li>
        <li><span>1</span></li>
        <li><span>2</span></li>
        <li><span>3</span></li>
        <li><span>4</span></li>
        <li><span>5</span></li>
        <li><span>6</span></li>
        <li><span>7</span></li>
        <li><span>8</span></li>
        <li><span>9</span></li>
        <li><span>10</span></li>
        <li><span>11</span></li>
        <li><span>12</span></li>
        <li><span>13</span></li>
        <li><span>14</span></li>
        <li><span>15</span></li>
        <li><span>16</span></li>
        <li><span>17</span></li>
        <li><span>18</span></li>
        <li><span>19</span></li>
        <li><span>20</span></li>
        <li><span>21</span></li>
        <li><span>22</span></li>
        <li><span>23</span></li>
        <li><span>24</span></li>
        <li><span>25</span></li>
        <li><span>26</span></li>
        <li><span>27</span></li>
        <li><span>28</span></li>
        <li><span>29</span></li>
        <li><span>30</span></li>
        <li><span>31</span></li>
        <li><span>1</span></li>
        <li><span>2</span></li>
      </ul>
      <div className={calendarStyles.time}>
        <p className={calendarStyles.timeTitle}>Время</p>
        <div className={calendarStyles.timeAndPriceContainer}>
          <TimeAndPrice time="12:00" price="5 000 ₽" />
          <TimeAndPrice time="14:00" price="5 000 ₽" />
          <TimeAndPrice time="16:00" price="7 000 ₽" />
          <TimeAndPrice time="18:00" price="7 000 ₽" />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
