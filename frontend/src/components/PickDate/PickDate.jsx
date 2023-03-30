import React, { useState } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const PickDate = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div>
      <DatePicker
        placeholderText="Выберите дату и время"
        selected={selectedDate}
        onChange={setSelectedDate}
        dateFormat="dd/
      MM/yyyy/"
        minDate={new Date()}
        isClearable
        showYearDropdown
      />
    </div>
  );
};
