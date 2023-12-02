import React from 'react';
import { InputField } from './InputField';
import { Button } from '../Button/Button';
import useFormValidation from '../../hooks/useFormValidation';
import cls from './InputField.module.scss';

/**
 * Для использования поля ввода данных, компонент `InputField` помещается в форму и подключается через `props` к функции `useFormValidation`. Данная функция осуществляет валидацию поля ввода с выводом булевого значения в переменную `isValid` которую можно подключить к кнопке, что и показанно в данных историях .
 */
export default {
  title: 'UI-kit/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      type: 'string',
      description: 'Тип поля ввода данных.',
      options: ['email', 'name', 'tel', 'password'],
      table: {
        type: { summary: ['email', 'name', 'tel', 'password'] },
        defaultValue: { summary: '-' },
      },
      control: {
        type: 'radio',
      },
    },
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

export function EmailInputField(args) {
  const {
    errors, isValid, handleChange, values,
  } = useFormValidation();
  return (
    <form className={cls.formContainer} noValidate>
      <InputField
        {...args}
        errors={errors}
        isValid={isValid}
        handleChange={handleChange}
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

EmailInputField.args = {
  type: 'email',
};

export function NameInputField(args) {
  const {
    errors, isValid, handleChange, values,
  } = useFormValidation();
  return (
    <form className={cls.formContainer} noValidate>
      <InputField
        {...args}
        errors={errors}
        isValid={isValid}
        handleChange={handleChange}
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

NameInputField.args = {
  type: 'name',
};

export function PhoneInputField(args) {
  const {
    errors, isValid, handleChange, values,
  } = useFormValidation();
  return (
    <form className={cls.formContainer} noValidate>
      <InputField
        {...args}
        errors={errors}
        isValid={isValid}
        handleChange={handleChange}
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

PhoneInputField.args = {
  type: 'tel',
};

export function PasswordInputField(args) {
  const {
    errors, isValid, handleChange, values,
  } = useFormValidation();
  return (
    <form className={cls.formContainer} noValidate>
      <InputField
        {...args}
        errors={errors}
        isValid={isValid}
        handleChange={handleChange}
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

PasswordInputField.args = {
  type: 'password',
};

/**
 * В форме регистрации используется двойное поле ввода пароля которое осуществляет проверку точности ввода пароля пользователем. Для данной реализации необходимо первое поле пароля вывести стандартным способом, а во второй компонент `InputField` передать `props` с типом: `type=”repeatPassword”`.
 */
export function DoublePasswordInputField(args) {
  const {
    errors, isValid, handleChange, values, handleSecondPasswordChange,
  } = useFormValidation();
  return (
    <form className={`${cls.formContainer} ${cls.doublePassword}`} noValidate>
      <InputField
        type="password"
        errors={errors}
        isValid={isValid}
        handleChange={handleChange}
        values={values}
      />
      <InputField
        {...args}
        errors={errors}
        isValid={isValid}
        handleChange={handleSecondPasswordChange}
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

DoublePasswordInputField.args = {
  type: 'repeatPassword',
};
