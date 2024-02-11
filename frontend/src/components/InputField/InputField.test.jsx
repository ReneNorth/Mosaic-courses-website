import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { InputField } from './InputField';
import '@testing-library/jest-dom';

describe('InputField component', () => {
  it('should render input email field and called handleChange, add error message', () => {
    const type = 'email';
    const handleChange = jest.fn();
    const values = {};
    const errors = { email: 'mock error message' };
    render(
      <InputField
        data-testid="inputField"
        type={type}
        handleChange={handleChange}
        values={values}
        errors={errors}
      />,
    );
    const inputElement = screen.getByTestId('inputField');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'email');
    expect(inputElement).toHaveAttribute('name', 'email');
    expect(inputElement).toHaveAttribute('placeholder', 'Email*');

    // Simulate user input and check if handleChange is called
    fireEvent.change(inputElement, { target: { value: 'test@example.com' } });
    expect(handleChange).toHaveBeenCalled();

    // Simulate add error message
    const errorText = screen.getByText('Введите корректный email');
    expect(errorText).toBeInTheDocument();
  });

  // it('should render input phone field with mask', () => {
  //   const type = 'tel';
  //   const placeholder = 'Phone Number';
  //   const handleChange = jest.fn();
  //   const values = {};
  //   const errors = { phone: 'mock error message' };
  //   render(
  //     <InputField
  //       data-testid="inputField"
  //       type={type}
  //       placeholder={placeholder}
  //       handleChange={handleChange}
  //       values={values}
  //       errors={errors}
  //     />,
  //   );
  //   const inputElement = screen.getByTestId('inputField');
  //   expect(inputElement).toBeInTheDocument();
  //   expect(inputElement).toHaveAttribute('type', 'tel');
  //   expect(inputElement).toHaveAttribute('name', 'phone');
  //   expect(inputElement).toHaveAttribute('placeholder', 'Phone Number');
  //   expect(inputElement).toHaveClass('invalid');
  //   // Simulate user input and check if mask was applied
  //   fireEvent.change(inputElement, { target: { value: '12345678901' } });
  //   expect(inputElement.value).toBe('+1(234) 567-89-01');
  // });
});
