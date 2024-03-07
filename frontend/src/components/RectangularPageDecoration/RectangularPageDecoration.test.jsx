import React from 'react';
import { render, screen } from '@testing-library/react';
import { RectangularPageDecoration } from './RectangularPageDecoration';
import '@testing-library/jest-dom';

describe('RectangularPageDecoration Component', () => {
  test('renders RectangularPageDecoration component', () => {
    render(<RectangularPageDecoration data-testid="pageDecoration" />);
    expect(screen.getByTestId('pageDecoration')).toBeInTheDocument();
  });
  test('applies the correct CSS class', () => {
    render(<RectangularPageDecoration data-testid="pageDecoration" />);
    const decorationElement = screen.getByTestId('pageDecoration');
    expect(decorationElement).toHaveClass('decoration');
  });
});
