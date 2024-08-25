export const calculateLessonDuration = (timeStart, timeEnd) => {
  const diffMs = new Date(timeEnd) - new Date(timeStart);

  let diffHours = diffMs / (1000 * 60 * 60);

  diffHours = Math.round(diffHours);

  if (diffHours > 12) {
    diffHours = 12;
  }

  let hoursWord;
  if (diffHours === 1) {
    hoursWord = 'час';
  } else if (diffHours >= 2 && diffHours <= 4) {
    hoursWord = 'часа';
  } else {
    hoursWord = 'часов';
  }

  return `${diffHours} ${hoursWord}`;
};
