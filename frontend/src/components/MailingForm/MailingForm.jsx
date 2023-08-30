import { useState } from 'react';

import { Button } from '../Button/Button';
import { api } from '../../utils/api';

import useFormValidation from '../../hooks/useFormValidation';
import cls from './MailingForm.module.scss';

export const MailingForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    errors, isValid, handleChange, resetForm, values,
  } = useFormValidation();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (values.email !== '' || !errors) {
      await api.postSubscriptionEmail(values.email);
      resetForm();
      setIsSuccess(true);
    }
  };

  return (
    <div className={cls.formWrapper}>
      <h3 className={cls.formTitle}>
        {isSuccess ? 'Вы успешно подписаны на рассылку!'
          : 'Будь в курсе новостей студии и получи скидку 10% на первое зянятие'}
      </h3>
      {!isSuccess && (
        <form onSubmit={handleSubmit} className={cls.form} noValidate>
          <div className={cls.label}>
            <input
              value={values.email || ''}
              onChange={handleChange}
              className={cls.input}
              type="email"
              name="email"
              maxLength="256"
              placeholder="E-MAIL"
              pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$"
            />
            <span>
              {errors.email
                ? 'Введите корректный email'
                : ''}
            </span>
          </div>
          <div className={cls.btnWrapper}>
            <Button className="fill" decoration="black" type="submit" disabled={!isValid}>
              Подписаться на рассылку
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};
