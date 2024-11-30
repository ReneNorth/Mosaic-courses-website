import { generateDays } from './generateDays';

describe('generateDays', () => {
  it('should generate days correctly for January 2024', () => {
    const date = new Date(2024, 0, 1);
    const result = generateDays(date);

    expect(result.previous).toEqual([]);
    expect(result.current).toEqual([...Array(31).keys()].map((i) => i + 1));
    expect(result.next).toEqual([1, 2, 3, 4]);
  });

  it('should generate days correctly for February 2024 (leap year)', () => {
    const date = new Date(2024, 1, 1);
    const result = generateDays(date);

    expect(result.previous).toEqual([29, 30, 31]);
    expect(result.current).toEqual([...Array(29).keys()].map((i) => i + 1));
    expect(result.next).toEqual([1, 2, 3]);
  });

  it('should generate days correctly for March 2024', () => {
    const date = new Date(2024, 2, 1);
    const result = generateDays(date);

    expect(result.previous).toEqual([26, 27, 28, 29]);
    expect(result.current).toEqual([...Array(31).keys()].map((i) => i + 1));
    expect(result.next).toEqual([]);
  });

  it('should generate days correctly for December 2023', () => {
    const date = new Date(2023, 11, 1);
    const result = generateDays(date);

    expect(result.previous).toEqual([27, 28, 29, 30]);
    expect(result.current).toEqual([...Array(31).keys()].map((i) => i + 1));
    expect(result.next).toEqual([]);
  });
});
