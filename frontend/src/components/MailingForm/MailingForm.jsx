import { useState } from 'react';
import { Button } from '../Button/Button';
import { api } from '../../utils/api';
import { useFormValidation } from '../../hooks/useFormValidation';
import { InputField } from '../InputField/InputField';
import cls from './MailingForm.module.scss';
import { useResize } from '../../hooks/useResize';

export const MailingForm = () => {
  const { width } = useResize();
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
      <h3 className={`${cls.formTitle} ${width <= 876 ? cls.wide : ''}`}>
        {isSuccess ? 'Вы успешно подписаны на рассылку!'
          : 'Будь в курсе новостей студии и получи скидку 10% на первое зянятие'}
      </h3>
      {!isSuccess && (
        <form onSubmit={handleSubmit} className={cls.form} noValidate>
          <InputField
            type="email"
            errors={errors}
            isValid={isValid}
            handleChange={handleChange}
            values={values}
          />
          <div className={cls.btnWrapper}>
            <Button
              className="fill"
              decoration="black"
              type="submit"
              disabled={!isValid}
            >
              Подписаться на рассылку
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};
