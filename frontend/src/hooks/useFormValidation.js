import React, { useCallback, useState } from 'react';

export const useFormValidation = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const {
      name, type, value, checked,
    } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setValues({ ...values, [name]: newValue });
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setIsValid(e.target.closest('form').checkValidity());
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

  const handleChangeByValue = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const updateLocalStorage = (key, name, value) => {
    let stored = JSON.parse(localStorage.getItem(key));
    stored = { ...stored, [name]: value };
    localStorage.setItem(key, JSON.stringify(stored));
  };

  const handleChangeCheckbox = (e, key) => {
    const { name, checked } = e.target;
    updateLocalStorage(key, name, checked);
    handleChangeByValue(name, checked);
  };

  const handleChangeStorageByValue = (key, name, value, callback) => {
    updateLocalStorage(key, name, value);
    callback(name, value);
  };

  const handleChangeStorageByEvent = (e, key, callback) => {
    const { name, value } = e.target;
    updateLocalStorage(key, name, value);
    callback(e);
  };

  const handleSecondPasswordChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setIsValid(e.target.closest('form').checkValidity());
    if (value !== values.password) {
      setErrors({ ...errors, [name]: 'Пароли не совпали' });
      setIsValid(false);
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setErrors({ ...errors, [name]: e.target.validationMessage });
  };

  const handleChangeInRealTime = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setIsValid(e.target.closest('form').checkValidity());
    setErrors({ ...errors, [name]: e.target.validationMessage });
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
    setValues,
    setIsValid,
    handleChange,
    setErrors,
    handleBlur,
    handleChangeInRealTime,
    handleSecondPasswordChange,
    resetForm,
    handlePhoneChange,
    handlePhoneValidation,
    handleChangeByValue,
    handleChangeStorageByEvent,
    handleChangeStorageByValue,
    handleChangeCheckbox,
  };
};
