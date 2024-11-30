/* eslint-disable max-len */
/* eslint-disable no-plusplus */
export const generateDays = (date) => {
  // Начало и конец месяца
  const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  // Дни предыдущего месяца до ближайшего понедельника
  const daysInPreviousMonth = (startOfMonth.getDay() + 6) % 7; // Дни из предыдущего месяца
  const previousMonth = new Date(date.getFullYear(), date.getMonth(), 0);
  const previousDays = Array.from({ length: daysInPreviousMonth }, (_, i) => previousMonth.getDate() - daysInPreviousMonth + i + 1);

  // Дни текущего месяца
  const currentDays = Array.from({ length: endOfMonth.getDate() }, (_, i) => i + 1);

  // Дни следующего месяца до ближайшего воскресенья
  const daysInNextMonth = (7 - (endOfMonth.getDay())) % 7; // Дни из следующего месяца
  const nextDays = Array.from({ length: daysInNextMonth }, (_, i) => i + 1);

  return {
    previous: previousDays,
    current: currentDays,
    next: nextDays,
  };
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
