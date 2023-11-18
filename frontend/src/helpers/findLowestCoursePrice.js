// finds the minimum in array of touples by the 1st element

export const findLowestCoursePrice = (pricesArray) => {
  if (pricesArray.length === 0) return undefined;
  return pricesArray.reduce((prev, curr) => {
    return prev[0] > curr[0] ? curr : prev;
  });
};
