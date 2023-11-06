import { classNames } from './classNames';

describe('classNames', () => {
  it('should concatenate class names correctly', () => {
    // Arrange
    const baseClass = 'base-class';
    const modifiers = {
      active: true,
      disabled: false,
      highlighted: true,
    };
    const additionalClasses = ['extra-class-1', 'extra-class-2'];

    // Act
    const result = classNames(baseClass, modifiers, additionalClasses);

    // Assert
    expect(result).toBe('base-class active highlighted extra-class-1 extra-class-2');
  });

  it('should handle empty modifiers and additional classes', () => {
    // Arrange
    const baseClass = 'base-class';
    const modifiers = {};
    const additionalClasses = [];

    // Act
    const result = classNames(baseClass, modifiers, additionalClasses);

    // Assert
    expect(result).toBe('base-class');
  });

  it('should ignore falsy modifiers', () => {
    // Arrange
    const baseClass = 'base-class';
    const modifiers = {
      active: true,
      disabled: false,
      highlighted: null,
    };
    const additionalClasses = ['extra-class-1', 'extra-class-2'];

    // Act
    const result = classNames(baseClass, modifiers, additionalClasses);

    // Assert
    expect(result).toBe('base-class active extra-class-1 extra-class-2');
  });
});
