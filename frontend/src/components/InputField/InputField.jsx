/* eslint-disable no-useless-escape */
import React, {
  useCallback, useMemo, useRef, useState,
} from 'react';
import { classNames } from '../../helpers/classNames';
import cls from './InputField.module.scss';

export const InputField = ({
  type,
  placeholder,
  errors,
  isValid,
  handleChange,
  values,
  // className = '',
  ...props
}) => {
  const inputSettings = {
    email: {
      type: 'email',
      name: 'email',
      placeholder: 'E-MAIL*',
      pattern: '([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-]+)(\\.[a-zA-Z]{2,5}){1,2}',
      errorText: 'Введите корректный email',
      maxLength: '64',
      minLength: '2',
    },
    name: {
      type: 'text',
      name: 'name',
      placeholder: 'ИМЯ',
      pattern: '[ a-zA-Z\u0400-\u04ff]{2,}',
      errorText: 'Имя должно быть не менее 2-х символов',
      maxLength: '25',
      minLength: '2',
    },
    tel: {
      type: 'tel',
      name: 'phone',
      placeholder: 'Телефон*',
      pattern: '(\\+)([\\s\\(\\)\\-\\d]){10,20}$',
      errorText: 'Номер должен начинаться со знака "+" иметь от 10 до 15 символов',
      maxLength: '20',
      minLength: '2',
    },
  };
  return (
    <div className={cls.label}>
      <input
        value={values[inputSettings[type].name] || ''}
        onChange={handleChange}
        type={inputSettings[type].type}
        name={inputSettings[type].name}
        maxLength={inputSettings[type].maxLength || ''}
        minLength={inputSettings[type].minLength || ''}
        placeholder={placeholder || inputSettings[type].placeholder}
        required
        pattern={inputSettings[type].pattern}
        className={classNames(cls.input, {}, [errors[inputSettings[type].name] ? cls.invalid : ''])}
      />
      <span className={cls.error}>
        {errors[inputSettings[type].name]
          ? `${inputSettings[type].errorText}`
          : ''}
      </span>
    </div>
  );
};
