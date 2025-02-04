const options = { weekday: 'long' };

export const formatCourseWeekDay = (date) => {
  const weekDay = date.toLocaleDateString('ru-RU', options);
  return weekDay.charAt(0).toUpperCase() + weekDay.slice(1);
};
