// finds the minimum in array of touples by the 1st element

export const findLowestCoursePrice = (pricesArray) => {
  return pricesArray.reduce((prev, curr) => {
    return prev[0] > curr[0] ? curr : prev;
  });
};
