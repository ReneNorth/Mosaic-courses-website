export const findEarliestDate = (datesArray) => {
  if (datesArray.length === 0) {
    return undefined;
  }
  return datesArray.reduce((prev, curr) => {
    return Date.parse(prev) > Date.parse(curr) ? curr : prev;
  });
};
