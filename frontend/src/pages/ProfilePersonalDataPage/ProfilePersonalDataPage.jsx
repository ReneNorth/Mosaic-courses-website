/* eslint-disable jsx-a11y/control-has-associated-label */
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '../../helpers/classNames';
import cls from './ProfilePersonalDataPage.module.scss';
import { activateUser, getEmailByUID, resendActivationEmail } from '../../services/slices/authSlice';
import { ProfileCardMenu } from '../../components/ProfileCardMenu/ProfileCardMenu';
import { ProfileNavMenu } from '../../components/ProfileNavMenu/ProfileNavMenu';
import { ProfileEditField } from '../../components/ProfileEditField/ProfileEditField';
import { InputField } from '../../components/InputField/InputField';
import { InputFieldPhone } from '../../components/InputFieldPhone/InputFieldPhone';
import { useFormValidation } from '../../hooks/useFormValidation';
import { Button } from '../../components/Button/Button';
import { ProfileMobileSymbol } from '../../images/ProfileMobileSymbol';

export function ProfilePersonalDataPage() {
  const navigate = useNavigate();

  const toProfilePage = (e) => {
    e.preventDefault();
    navigate('/profile');
  };
  const {
    errors,
    setErrors,
    isValid,
    setValues,
    handleChange,
    handlePhoneChange,
    values,
    handlePhoneValidation,
  } = useFormValidation();

  useEffect(() => {
    setValues({
      ...values, name: 'Иван', surname: 'Петрович', phone: '+7 912 123-45-67', email: 'mymail@fjdskl.ru',
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={cls.section}>
      <div className={cls.block}>
        <ProfileNavMenu />
        <div className={cls.content}>
          <div className={cls.titleWrapper}>
            <button onClick={(e) => toProfilePage(e)} className={cls.backButton} type="button">
              <ProfileMobileSymbol />
            </button>
            <h2 className={cls.title}>Личная информация</h2>
          </div>
          <p className={cls.subTitle}>Обновите свои данные и контактный телефон</p>
          <ProfileEditField title="Имя и фамилия" fieldValue="Иван Петров">
            <form className={cls.formContainer} noValidate>
              <InputField
                type="name"
                errors={errors}
                isValid={isValid}
                handleChange={handleChange}
                values={values}
              />
              <InputField
                type="surname"
                errors={errors}
                isValid={isValid}
                handleChange={handleChange}
                values={values}
              />
              <Button
                disabled={!isValid}
                className="fill"
              >
                Сохранить
              </Button>
            </form>
          </ProfileEditField>
          <ProfileEditField title="Номер телефона" fieldValue="+7 912 123-45-67">
            <form className={cls.formContainer} noValidate>
              <InputFieldPhone
                errors={errors}
                isValid={isValid}
                handleChange={(value) => handleChangeByValue('phone', value)}
                handlePhoneValidation={handlePhoneValidation}
                values={values}
              />
              <Button
                disabled={!isValid}
                className="fill"
              >
                Сохранить
              </Button>
            </form>
          </ProfileEditField>
          <ProfileEditField title="Почта" fieldValue="mymail@fjdskl.ru">
            <form className={cls.formContainer} noValidate>
              <InputField
                type="email"
                errors={errors}
                isValid={isValid}
                handleChange={handleChange}
                values={values}
              />
              <Button
                disabled={!isValid}
                className="fill"
              >
                Сохранить
              </Button>
            </form>
          </ProfileEditField>
        </div>
      </div>
    </section>
  );
}
