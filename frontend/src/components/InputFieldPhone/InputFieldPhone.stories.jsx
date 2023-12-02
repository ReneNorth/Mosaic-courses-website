import React from 'react';
import { InputFieldPhone } from './InputFieldPhone';
import { Button } from '../Button/Button';
import useFormValidation from '../../hooks/useFormValidation';
import cls from './InputFieldPhone.module.scss';

/**
 * ddf
 */
export default {
  title: 'UI-kit/InputFieldPhone',
  component: InputFieldPhone,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      type: 'string',
      description: 'Заполнитель для поля ввода данных.',
      control: 'text',
      table: {
        defaultValue: { summary: 'Для каждого типа свое' },
      },
    },
  },
};

export function MaskPhoneInputField(args) {
  const {
    errors, isValid, handlePhoneValidation, values, handlePhoneChange,
  } = useFormValidation();
  return (
    <form className={cls.formContainer} noValidate>
      <InputFieldPhone
        {...args}
        errors={errors}
        isValid={isValid}
        handleChange={handlePhoneChange}
        handlePhoneValidation={handlePhoneValidation}
        values={values}
      />
      <Button
        disabled={!isValid}
        className="fill"
        decoration="black"
      >
        Дальше
      </Button>
    </form>
  );
}

MaskPhoneInputField.args = {
  type: 'email',
};
