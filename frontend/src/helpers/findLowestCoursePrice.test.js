import { findLowestCoursePrice } from './findLowestCoursePrice';

describe('findLowestCoursePrice function', () => {
  it('should return the minimum price when it is the first element', () => {
    const pricesArray = [
      [10, 'Course A'],
      [20, 'Course B'],
      [30, 'Course C'],
    ];

    const result = findLowestCoursePrice(pricesArray);

    expect(result).toEqual([10, 'Course A']);
  });

  it('should return the minimum price when it is in the middle', () => {
    const pricesArray = [
      [30, 'Course C'],
      [10, 'Course A'],
      [20, 'Course B'],
    ];

    const result = findLowestCoursePrice(pricesArray);

    expect(result).toEqual([10, 'Course A']);
  });

  it('should return the minimum price when it is the last element', () => {
    const pricesArray = [
      [30, 'Course C'],
      [20, 'Course B'],
      [10, 'Course A'],
    ];

    const result = findLowestCoursePrice(pricesArray);

    expect(result).toEqual([10, 'Course A']);
  });

  it('should handle empty array gracefully', () => {
    const pricesArray = [];

    const result = findLowestCoursePrice(pricesArray);

    expect(result).toBeUndefined();
  });

  it('should handle arrays with a single element', () => {
    const pricesArray = [[10, 'Course A']];

    const result = findLowestCoursePrice(pricesArray);

    expect(result).toEqual([10, 'Course A']);
  });
});
