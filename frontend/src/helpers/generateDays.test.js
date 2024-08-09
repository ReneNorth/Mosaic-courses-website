import { generateDays } from './generateDays';

describe('generateDays', () => {
  it('should generate days correctly for January 2024', () => {
    const date = new Date(2024, 0, 1);
    const result = generateDays(date);

    // There are 31 days in January 2024, the first day of the week is Monday (7 according to the given daysOfWeek array)
    expect(result.previous).toEqual([]);
    expect(result.current).toEqual([...Array(31).keys()].map((i) => i + 1));
    expect(result.next.length).toBe(42 - 31);
  });

  it('should generate days correctly for February 2024 (leap year)', () => {
    const date = new Date(2024, 1, 1);
    const result = generateDays(date);

    // There are 29 days in February 2024, the first day of the week is Thursday (4 according to the given daysOfWeek array)
    expect(result.previous).toEqual([29, 30, 31]);
    expect(result.current).toEqual([...Array(29).keys()].map((i) => i + 1));
    expect(result.next.length).toBe(42 - 29 - 3);
  });

  it('should generate days correctly for March 2024', () => {
    const date = new Date(2024, 2, 1);
    const result = generateDays(date);

    // There are 31 days in March 2024, the first day of the week is Friday (5 according to the given daysOfWeek array)
    expect(result.previous).toEqual([26, 27, 28, 29]);
    expect(result.current).toEqual([...Array(31).keys()].map((i) => i + 1));
    expect(result.next.length).toBe(42 - 31 - 4);
  });

  it('should generate days correctly for December 2023', () => {
    const date = new Date(2023, 11, 1);
    const result = generateDays(date);
    console.log(date.getDay());

    // There are 31 days in December 2023, the first day of the week is Friday (5 according to the given daysOfWeek array)
    expect(result.previous).toEqual([27, 28, 29, 30]);
    expect(result.current).toEqual([...Array(31).keys()].map((i) => i + 1));
    expect(result.next.length).toBe(42 - 31 - 4);
  });
});
