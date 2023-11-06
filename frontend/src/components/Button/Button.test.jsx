import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';
import '@testing-library/jest-dom';

describe('Button component', () => {
  it('renders the button with children, button is button', () => {
    render(<Button data-testid="button">Click me</Button>);
    const buttonElement = screen.getByTestId('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.tagName).toBe('BUTTON');
  });

  it('applies the provided class name', () => {
    render(<Button data-testid="button" className="custom-class">Click me</Button>);
    const buttonElement = screen.getByTestId('button');
    expect(buttonElement).toHaveClass('custom-class');
  });

  it('applies the decoration class for "black" decoration', () => {
    render(<Button data-testid="button" decoration="black">Click me</Button>);
    const buttonElement = screen.getByTestId('button');
    expect(buttonElement).toHaveClass('decoration');
  });

  it('applies the decorationWhite class for "white" decoration', () => {
    render(<Button data-testid="button" decoration="white">Click me</Button>);
    const buttonElement = screen.getByTestId('button');
    expect(buttonElement).toHaveClass('decorationWhite');
  });

  it('fires the click event when clicked', () => {
    const onClickMock = jest.fn();
    render(<Button data-testid="button" onClick={onClickMock}>Click me</Button>);
    const buttonElement = screen.getByTestId('button');
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });
});
