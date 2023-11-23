import React from 'react';
import { render, screen } from '@testing-library/react';
import { LogInPageDecoration } from './LogInPageDecoration';
import '@testing-library/jest-dom';

describe('LogInPageDecoration Component', () => {
  test('renders LogInPageDecoration component', () => {
    render(<LogInPageDecoration data-testid="pageDecoration" />);
    expect(screen.getByTestId('pageDecoration')).toBeInTheDocument();
  });
  test('applies the correct CSS class', () => {
    render(<LogInPageDecoration data-testid="pageDecoration" />);
    const decorationElement = screen.getByTestId('pageDecoration');
    expect(decorationElement).toHaveClass('decoration');
  });
});
