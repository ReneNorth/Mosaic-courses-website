/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, useNavigate, MemoryRouter } from 'react-router-dom';
import { LoginPopup } from './LoginPopup';
import '@testing-library/jest-dom';

// Mock the react-router-dom module to control the behavior of useNavigate
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // Use the actual module for everything except useNavigate
  useNavigate: jest.fn(),
}));

describe('LoginPopup Component', () => {
  it('renders LoginPopup component', () => {
    render(
      <BrowserRouter>
        <LoginPopup isOpen={true} setIsOpen={() => {}} />
      </BrowserRouter>,
    );
    // Check that the component is rendered
    expect(screen.getByLabelText('close')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText('Войти или зарегистрироваться')).toBeInTheDocument();
    expect(screen.getByText('Войдите в свой аккаунт или создайте новый')).toBeInTheDocument();
    expect(screen.getByText('Зарегистрироваться')).toBeInTheDocument();
    expect(screen.getByText('У меня уже есть аккаунт')).toBeInTheDocument();
  });

  it('invokes setIsOpen when close button is clicked', () => {
    const setIsOpenMock = jest.fn();

    render(
      <BrowserRouter>
        <LoginPopup isOpen={true} setIsOpen={setIsOpenMock} />
      </BrowserRouter>,
    );

    // Click the close button
    fireEvent.click(screen.getByLabelText('close'));

    // Check that setIsOpen was called
    expect(setIsOpenMock).toHaveBeenCalledWith(false);
  });

  it('navigates to the correct route when "У меня уже есть аккаунт" button is clicked', () => {
    const navigateMock = jest.fn();
    // Set the mock implementation for useNavigate
    useNavigate.mockImplementation(() => navigateMock);

    render(
      <MemoryRouter>
        <LoginPopup isOpen={true} setIsOpen={() => {}} />
      </MemoryRouter>,
    );

    const loginButton = screen.getByText('У меня уже есть аккаунт');

    // Click the "У меня уже есть аккаунт" button
    fireEvent.click(loginButton);

    // Check that useNavigate was called with the correct argument
    expect(navigateMock).toHaveBeenCalledWith('/sign-in');
  });

  it('navigates to the correct route when "Зарегистрироваться" button is clicked', () => {
    const navigateMock = jest.fn();
    // Set the mock implementation for useNavigate
    useNavigate.mockImplementation(() => navigateMock);

    render(
      <MemoryRouter>
        <LoginPopup isOpen={true} setIsOpen={() => {}} />
      </MemoryRouter>,
    );

    const registerButton = screen.getByText('Зарегистрироваться');

    // Click the "Зарегистрироваться" button
    fireEvent.click(registerButton);

    // Check that useNavigate was called with the correct argument
    expect(navigateMock).toHaveBeenCalledWith('/register');
  });
});
