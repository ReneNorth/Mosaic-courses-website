/* eslint-disable jsx-a11y/control-has-associated-label */
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '../../helpers/classNames';
import cls from './ProfilePersonalDataPage.module.scss';
import {
  activateUser,
  getEmailByUID,
  resendActivationEmail,
} from '../../services/slices/authSlice';
import { ProfileCardMenu } from '../../components/ProfileCardMenu/ProfileCardMenu';
import { ProfileNavMenu } from '../../components/ProfileNavMenu/ProfileNavMenu';
import { ProfileEditField } from '../../components/ProfileEditField/ProfileEditField';
import { InputField } from '../../components/InputField/InputField';
import { InputFieldPhone } from '../../components/InputFieldPhone/InputFieldPhone';
import { useFormValidation } from '../../hooks/useFormValidation';
import { Button } from '../../components/Button/Button';
import { ProfileMobileSymbol } from '../../images/ProfileMobileSymbol';
import {
  fetchPersonalInfo,
  selectPersonalInfo,
  updatePersonalInfo,
} from '../../services/slices/personalInfoSlice';

export function ProfilePersonalDataPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toProfilePage = (e) => {
    e.preventDefault();
    navigate('/profile');
  };
  const {
    errors,
    isValid,
    handleSecondPasswordChange,
    setIsValid,
    setValues,
    handleChange,
    handlePhoneChange,
    handleBlur,
    handleChangeInRealTime,
    resetForm,
    values,
    handlePhoneValidation,
  } = useFormValidation();

  const personalInfo = useSelector(selectPersonalInfo);

  const handleUpdatePhone = (e) => {
    e.preventDefault();

    if (isValid) dispatch(updatePersonalInfo({ phone: values.phone }));
  };

  const handleUpdateName = (e) => {
    e.preventDefault();

    if (isValid) {
      dispatch(
        updatePersonalInfo({
          first_name: values.name,
          last_name: values.surname,
        }),
      );
    }
  };

  useEffect(() => {
    dispatch(fetchPersonalInfo());
  }, [dispatch]);

  useEffect(() => {
    if (personalInfo) {
      setValues({
        name: personalInfo.first_name || '',
        surname: personalInfo.last_name || '',
        phone: personalInfo.phone || '',
        email: personalInfo.email || '',
      });
    }
  }, [personalInfo, setValues]);

  return (
    <section className={cls.section}>
      <div className={cls.block}>
        <ProfileNavMenu />
        <div className={cls.content}>
          <div className={cls.titleWrapper}>
            <button
              onClick={(e) => toProfilePage(e)}
              className={cls.backButton}
              type="button"
            >
              <ProfileMobileSymbol />
            </button>
            <h2 className={cls.title}>Личная информация</h2>
          </div>
          <p className={cls.subTitle}>
            Обновите свои данные и контактный телефон
          </p>
          <ProfileEditField
            title="Имя и фамилия"
            fieldValue={`${personalInfo.first_name} ${personalInfo.last_name}`}
          >
            <form
              className={cls.formContainer}
              onSubmit={handleUpdateName}
              noValidate
            >
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
              <Button disabled={!isValid} className="fill" type="submit">
                Сохранить
              </Button>
            </form>
          </ProfileEditField>
          <ProfileEditField
            title="Номер телефона"
            fieldValue={personalInfo.phone}
          >
            <form
              className={cls.formContainer}
              onSubmit={(e) => handleUpdatePhone(e)}
              noValidate
            >
              <InputFieldPhone
                errors={errors}
                isValid={isValid}
                handleChange={handlePhoneChange}
                handlePhoneValidation={handlePhoneValidation}
                values={values}
              />
              <Button disabled={!isValid} className="fill" type="submit">
                Сохранить
              </Button>
            </form>
          </ProfileEditField>
          <ProfileEditField title="Почта" fieldValue={personalInfo.email}>
            <form className={cls.formContainer} noValidate>
              <InputField
                type="email"
                errors={errors}
                isValid={isValid}
                handleChange={handleChange}
                values={values}
              />
              <Button disabled={!isValid} className="fill">
                Сохранить
              </Button>
            </form>
          </ProfileEditField>
        </div>
      </div>
    </section>
  );
}
