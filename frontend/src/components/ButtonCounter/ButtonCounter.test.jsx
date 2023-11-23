import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { ButtonCounter } from './ButtonCounter';
import '@testing-library/jest-dom';

jest.useFakeTimers();

describe('ButtonCounter Component', () => {
  test('renders ButtonCounter component', () => {
    render(<ButtonCounter counter={10} setCounter={() => {}} changeStatus={() => {}} data-testid="counter" />);
    expect(screen.getByTestId('counter')).toBeInTheDocument();
  });

  test('decreases counter after a certain period', () => {
    const setCounterMock = jest.fn();
    const changeStatusMock = jest.fn();

    render(<ButtonCounter counter={10} setCounter={setCounterMock} changeStatus={changeStatusMock} />);

    act(() => {
      jest.advanceTimersByTime(1000); // Fast-forward timer by 1 second
    });

    expect(setCounterMock).toHaveBeenCalledWith(9);
  });

  test('changes status when counter reaches 0', () => {
    const setCounterMock = jest.fn();
    const changeStatusMock = jest.fn();

    render(<ButtonCounter counter={0} setCounter={setCounterMock} changeStatus={changeStatusMock} />);

    expect(changeStatusMock).toHaveBeenCalledWith(false);
  });
});
