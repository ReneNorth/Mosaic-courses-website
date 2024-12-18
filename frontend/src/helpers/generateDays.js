export const generateDays = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const daysOfWeek = [7, 1, 2, 3, 4, 5, 6];
  const firstWeekDay = daysOfWeek[firstDay.getDay()];

  const previousDays = Array.from({ length: firstWeekDay - 1 }, (_, i) => new Date(year, month, -i)
    .getDate()).reverse();
  const currentDays = Array.from({ length: lastDay.getDate() }, (_, i) => i + 1);
  const nextDays = Array.from({ length: 42 - previousDays.length - currentDays.length }, (_, i) => i + 1);

  return { previous: previousDays, current: currentDays, next: nextDays };
};
