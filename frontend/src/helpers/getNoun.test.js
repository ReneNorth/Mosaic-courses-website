import { getNoun } from './getNoun';

describe('getNoun function', () => {
  it('should return the correct noun for 1 item', () => {
    expect(getNoun(1, 'слон', 'слона', 'слонов')).toBe('слон');
  });

  it('should return the correct noun for 2 items', () => {
    expect(getNoun(2, 'слон', 'слона', 'слонов')).toBe('слона');
  });

  it('should return the correct noun for 5 items', () => {
    expect(getNoun(5, 'слон', 'слона', 'слонов')).toBe('слонов');
  });

  it('should return the correct noun for 11 items', () => {
    expect(getNoun(11, 'слон', 'слона', 'слонов')).toBe('слонов');
  });

  it('should return the correct noun for 21 items', () => {
    expect(getNoun(21, 'слон', 'слона', 'слонов')).toBe('слон');
  });
});
