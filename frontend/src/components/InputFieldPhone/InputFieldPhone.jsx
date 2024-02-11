import React, { useEffect, useRef } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import { classNames } from '../../helpers/classNames';
import cls from './InputFieldPhone.module.scss';

export const InputFieldPhone = ({
  placeholder,
  errors,
  handleChange,
  values,
  handlePhoneValidation,
  ...props
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const error = values.phone && isValidPhoneNumber(values.phone);
    handlePhoneValidation(error, ref.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.phone]);

  return (
    <div className={cls.label}>
      <PhoneInput
        ref={ref}
        international
        defaultCountry="RU"
        countryCallingCodeEditable={false}
        value={values.phone || ''}
        onChange={handleChange}
        type="tel"
        name="phone"
        maxLength={'20' || ''}
        minLength={'2' || ''}
        placeholder={placeholder || 'Телефон*'}
        required
        className={classNames(cls.input, {}, [errors.phone ? cls.invalid : '',
          errors.phone === '' ? cls.valid : '', cls.phoneBorder])}
        {...props}
      />
      <span className={cls.error}>
        {errors.phone ? 'Номер должен начинаться со знака "+" иметь от 10 до 20 символов' : ''}
      </span>
    </div>
  );
};
