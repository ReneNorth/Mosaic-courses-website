// Import the getCookie function from your source code
import { getCookie } from './getCookie';

// Mock document.cookie
let originalCookie;
beforeAll(() => {
  originalCookie = document.cookie;
  document.cookie = 'csrftoken=12345; session=abcdefg;';
});

afterAll(() => {
  // Restore the original document.cookie after testing
  document.cookie = originalCookie;
});

// Test the getCookie function
describe('getCookie', () => {
  it('should retrieve the value of an existing cookie', () => {
    expect(getCookie('csrftoken')).toBe('12345');
  });

  it('should return null for a non-existing cookie', () => {
    expect(getCookie('nonexistent')).toBe(null);
  });
});
