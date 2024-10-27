/* eslint-disable no-plusplus */
export const generateDays = (date) => {
  const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  const startDay = startOfMonth.getDay();
  const lastDay = endOfMonth.getDay();

  const previousMonthDays = startDay === 0 ? 6 : startDay - 1;

  let nextMonthDays = 0;
  if (lastDay !== 0) {
    nextMonthDays = 7 - lastDay;
  }

  if (startDay === 1 || lastDay === 0) {
    nextMonthDays = 0;
  }

  const previousMonth = new Date(date.getFullYear(), date.getMonth(), 0);
  const days = {
    previous: Array.from({ length: previousMonthDays }, (_, i) => previousMonth.getDate() - previousMonthDays + i + 1),
    current: Array.from({ length: endOfMonth.getDate() }, (_, i) => i + 1),
    next: Array.from({ length: nextMonthDays }, (_, i) => i + 1),
  };

  return days;
};

export const generateDaysForWeek = (date) => {
  const startOfWeek = new Date(date);
  startOfWeek.setDate(date.getDate() - date.getDay() + 1);
  const weekDays = [];

  for (let i = 0; i < 7; i++) {
    weekDays.push(startOfWeek.getDate());
    startOfWeek.setDate(startOfWeek.getDate() + 1);
  }

  return {
    previous: [],
    current: weekDays,
    next: [],
  };
};
