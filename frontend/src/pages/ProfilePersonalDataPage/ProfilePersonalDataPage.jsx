/* eslint-disable jsx-a11y/control-has-associated-label */
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cls from './ProfilePersonalDataPage.module.scss';
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
  updateEmail,
  updatePersonalInfo,
} from '../../services/slices/personalInfoSlice';

export function ProfilePersonalDataPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isChangingName, setIsChangingName] = useState(false);
  const [isChangingPhone, setIsChangingPhone] = useState(false);
  const [isChangingEmail, setIsChangingEmail] = useState(false);

  const toProfilePage = (e) => {
    e.preventDefault();
    navigate('/profile');
  };
  const {
    errors,
    isValid,
    setValues,
    handleChange,
    handlePhoneChange,
    values,
    handlePhoneValidation,
  } = useFormValidation();

  const personalInfo = useSelector(selectPersonalInfo);

  const handleUpdateName = (e) => {
    e.preventDefault();
    if (isValid) {
      dispatch(
        updatePersonalInfo({
          first_name: values.name,
          last_name: values.surname,
        }),
      ).then(() => setIsChangingName(false));
    }
  };

  const handleUpdatePhone = (e) => {
    e.preventDefault();
    if (isValid) {
      dispatch(updatePersonalInfo({ phone: values.phone })).then(() => setIsChangingPhone(false));
    }
  };

  const handleUpdateEmail = (e) => {
    e.preventDefault();
    if (isValid) {
      dispatch(updateEmail({ email: values.email })).then(() => setIsChangingEmail(false));
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
            isChanging={isChangingName}
            setIsChanging={setIsChangingName}
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
            isChanging={isChangingPhone}
            setIsChanging={setIsChangingPhone}
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
          <ProfileEditField
            title="Почта"
            fieldValue={personalInfo.email}
            isChanging={isChangingEmail}
            setIsChanging={setIsChangingEmail}
          >
            <form
              className={cls.formContainer}
              onSubmit={(e) => handleUpdateEmail(e)}
              noValidate
            >
              <InputField
                type="email"
                errors={errors}
                isValid={isValid}
                handleChange={handleChange}
                values={values}
              />
            </form>
          </ProfileEditField>
        </div>
      </div>
    </section>
  );
}
