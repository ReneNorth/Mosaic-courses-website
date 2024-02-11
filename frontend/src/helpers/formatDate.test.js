import { formatCourseDate } from './formatDate';

describe('formatCourseDate function', () => {
  it('should format a date correctly', () => {
    // Mock a date for testing purposes (e.g., January 15th)
    const mockDate = new Date('2023-01-15');

    // Call the function with the mock date
    const formattedDate = formatCourseDate(mockDate);

    // Assert that the formatted date matches the expected result
    expect(formattedDate).toBe('15 января');
  });
});
