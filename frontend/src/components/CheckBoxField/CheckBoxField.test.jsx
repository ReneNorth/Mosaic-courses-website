import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { CheckBoxField } from './CheckBoxField';
import '@testing-library/jest-dom';

describe('CheckBoxField component', () => {
  it('should render the checkbox and label correctly', () => {
    const type = 'agreement';
    const handleChange = jest.fn();

    render(
      <CheckBoxField type={type} handleChange={handleChange} data-testid="checkBoxField" />,
    );

    // Find the label and checkbox elements
    const inputElement = screen.getByTestId('checkBoxField');
    const label = screen.getByText('Даю согласие на обработку персональных данных');
    const checkbox = screen.getByRole('checkbox');

    // Assert that the label and checkbox are rendered correctly
    expect(inputElement).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
    expect(inputElement).not.toBeChecked();

    // Simulate a user clicking the checkbox
    fireEvent.click(inputElement);

    // Assert that the handleChange function was called when the checkbox is clicked
    expect(handleChange).toHaveBeenCalled();
  });
});
