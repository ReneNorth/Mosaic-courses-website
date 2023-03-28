import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import cls from './PickDate.module.scss';

export const PickDate = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div>
      <DatePicker
        wrapperClassName="picker"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        minDate={new Date()}
        isClearable
        placeholderText="Выберите дату и время"
      />
    </div>
  );
};
