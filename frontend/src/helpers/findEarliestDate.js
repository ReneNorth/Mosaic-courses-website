export const findEarliestDate = (datesArray) => {
  return datesArray.reduce((prev, curr) => {
    return Date.parse(prev) > Date.parse(curr) ? curr : prev;
  });
};

export const parseDate = (datesArray) => {
  const date = new Date(findEarliestDate(datesArray));
  const options = { day: 'numeric', month: 'long' };
  const formattedDate = date.toLocaleString('ru-RU', options);
  return formattedDate;
};
