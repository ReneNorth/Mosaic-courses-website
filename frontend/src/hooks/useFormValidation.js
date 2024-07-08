import React, { useCallback, useState } from 'react';

export const useFormValidation = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: event.target.validationMessage });
    setIsValid(event.target.closest('form').checkValidity());
  };

  const toggleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  const handlePhoneChange = (value) => {
    setValues({ ...values, phone: value });
  };

  const handlePhoneValidation = (valid, ref) => {
    if (values.phone !== undefined) {
      if (valid) {
        setIsValid(ref.closest('form').checkValidity());
        setErrors({ ...errors, phone: '' });
      } else {
        setErrors({ ...errors, phone: 'Телефонный номер не валиден' });
        setIsValid(false);
      }
    }
  };

  const handleSecondPasswordChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: event.target.validationMessage });
    setIsValid(event.target.closest('form').checkValidity());
    if (value !== values.password) {
      setErrors({ ...errors, [name]: 'Пароли не совпали' });
      setIsValid(false);
    }
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setErrors({ ...errors, [name]: event.target.validationMessage });
  };

  const handleChangeInRealTime = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    setIsValid(event.target.closest('form').checkValidity());
    setErrors({ ...errors, [name]: event.target.validationMessage });
  };

  const resetForm = useCallback(() => {
    setErrors({});
    setValues({});
    setIsValid(false);
  }, [setValues, setIsValid, setErrors]);

  return {
    values,
    errors,
    isValid,
    isChecked,
    setValues,
    setIsChecked,
    setIsValid,
    handleChange,
    setErrors,
    handleBlur,
    handleChangeInRealTime,
    handleSecondPasswordChange,
    resetForm,
    handlePhoneChange,
    handlePhoneValidation,
  };
};
