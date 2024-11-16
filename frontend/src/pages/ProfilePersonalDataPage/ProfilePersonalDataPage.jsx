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
  const [isChangingNameAndPhone, setIsChangingNameAndPhone] = useState(false);
  const [isChangingEmail, setIsChangingEmail] = useState(false);

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

  const personalInfo = useSelector(selectPersonalInfo);

  const handleUpdateName = (e) => {
    e.preventDefault();
    if (isValid) {
      dispatch(
        updatePersonalInfo({
          first_name: values.name,
          last_name: values.surname,
        }),
      ).then(() => setIsChangingNameAndPhone(false));
    }
  };

  const handleUpdatePhone = (e) => {
    e.preventDefault();
    if (isValid) {
      dispatch(updatePersonalInfo({ phone: values.phone })).then(() => setIsChangingNameAndPhone(false));
    }
  };

  const handleUpdateEmail = (e) => {
    e.preventDefault();
    if (isValid) {
      console.log('Submitting email update:', values.email);
      dispatch(
        updateEmail({
          new_email: values.email,
          current_password: values.password,
        }),
      ).then(() => {
        setIsChangingEmail(false);
        dispatch(fetchPersonalInfo());
      });
    }
  };

  useEffect(() => {
    dispatch(fetchPersonalInfo());
  }, [dispatch]);

  const [initialValues, setInitialValues] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
  });

  useEffect(() => {
    if (personalInfo) {
      setValues({
        name: personalInfo.first_name || '',
        surname: personalInfo.last_name || '',
        phone: personalInfo.phone || '',
        email: personalInfo.email || '',
      });
      setInitialValues({
        name: personalInfo.first_name || '',
        surname: personalInfo.last_name || '',
        phone: personalInfo.phone || '',
        email: personalInfo.email || '',
      });
    }
  }, [personalInfo, setValues]);

  const hasChangedName = () => {
    return (
      values.name !== initialValues.name
      || values.surname !== initialValues.surname
    );
  };

  const hasChangedPhone = () => {
    return values.phone !== initialValues.phone;
  };

  const hasChanges = () => {
    return hasChangedName() || hasChangedPhone();
  };

  const hasChangedMail = () => {
    return values.email !== initialValues.email;
  };

  const handleChangeNameAndPhone = (e) => {
    e.preventDefault();
    if (hasChangedName() && hasChangedPhone()) {
      handleUpdateName(e);
      handleUpdatePhone(e);
    } else if (hasChangedPhone()) {
      handleUpdatePhone(e);
    } else if (hasChangedName()) {
      handleUpdateName(e);
    }
  };

  const resetCheges = () => {
    if (personalInfo) {
      setValues(initialValues);
    }
  };

  const resetErrors = () => {
    setErrors({});
  };

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
            isChanging={isChangingNameAndPhone}
            setIsChanging={setIsChangingNameAndPhone}
            secondTitle="Номер телефона"
            secondFieldValue={`${personalInfo.phone}`}
            resetCheges={resetCheges}
            resetErrors={resetErrors}
            isDisabled={isChangingEmail}
            handleSubmit={handleChangeNameAndPhone}
            isValid={isValid}
            disabledSave={!hasChanges() || !isValid}
          >
            <form
              className={cls.formContainer}
              noValidate
            >
              <div className={cls.namesRow}>
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
              </div>
              <h3 className={cls.lineTitleActive}>Номер телефона</h3>
              <InputFieldPhone
                errors={errors}
                isValid={isValid}
                handleChange={(value) => handleChangeByValue('phone', value)}
                handlePhoneValidation={handlePhoneValidation}
                values={values}
              />
            </form>
          </ProfileEditField>
          <ProfileEditField
            title="Почта"
            fieldValue={personalInfo.email}
            isChanging={isChangingEmail}
            setIsChanging={setIsChangingEmail}
            resetCheges={resetCheges}
            resetErrors={resetErrors}
            isDisabled={isChangingNameAndPhone}
            handleSubmit={handleUpdateEmail}
            isValid={isValid}
            disabledSave={!hasChangedMail() || !isValid}
          >
            <p className={cls.fieldPlaceholder}>{personalInfo.email}</p>
            <h3 className={cls.lineTitleActiveEmail}>Новая почта</h3>
            <form
              className={cls.formContainer}
              noValidate
            >
              <InputField
                type="email"
                errors={errors}
                isValid={isValid}
                handleChange={handleChange}
                values={values}
              />
              <InputField
                type="password"
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
