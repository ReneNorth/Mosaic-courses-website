const options = { month: 'long', day: 'numeric' };

export const formatCourseDate = (date) => date.toLocaleDateString('ru-RU', options);
