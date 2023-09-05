export const findEarliestDate = (datesArray) => {
  return datesArray.reduce((prev, curr) => {
    return Date.parse(prev) > Date.parse(curr) ? curr : prev;
  });
};
