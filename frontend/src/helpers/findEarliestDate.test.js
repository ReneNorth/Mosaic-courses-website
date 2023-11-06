import { findEarliestDate } from './findEarliestDate';

describe('findEarliestDate function', () => {
  it('should return the earliest date when it is the first element', () => {
    const datesArray = ['2023-01-15', '2023-02-20', '2023-03-10'];

    const result = findEarliestDate(datesArray);

    expect(result).toBe('2023-01-15');
  });

  it('should return the earliest date when it is in the middle', () => {
    const datesArray = ['2023-02-20', '2023-01-15', '2023-03-10'];

    const result = findEarliestDate(datesArray);

    expect(result).toBe('2023-01-15');
  });

  it('should return the earliest date when it is the last element', () => {
    const datesArray = ['2023-03-10', '2023-02-20', '2023-01-15'];

    const result = findEarliestDate(datesArray);

    expect(result).toBe('2023-01-15');
  });

  it('should handle empty array gracefully', () => {
    const datesArray = [];

    const result = findEarliestDate(datesArray);

    expect(result).toBeUndefined();
  });

  it('should handle arrays with a single date', () => {
    const datesArray = ['2023-01-15'];

    const result = findEarliestDate(datesArray);

    expect(result).toBe('2023-01-15');
  });
});
