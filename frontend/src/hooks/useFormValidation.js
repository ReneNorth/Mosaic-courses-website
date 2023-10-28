import React, { useCallback, useState } from 'react';

const useFormValidation = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setIsValid(e.target.closest('form').checkValidity());
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
  };
};

export default useFormValidation;
