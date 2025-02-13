import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cls from './RegisterPage.module.scss';
import { Button } from '../../components/Button/Button';
import { classNames } from '../../helpers/classNames';
import { InputField } from '../../components/InputField/InputField';
import { InputFieldPhone } from '../../components/InputFieldPhone/InputFieldPhone';
import { CheckBoxField } from '../../components/CheckBoxField/CheckBoxField';
import { SignHeaderLinks } from '../../components/SignHeaderLinks/SignHeaderLinks';
import { useFormValidation } from '../../hooks/useFormValidation';
import {
  registerUser,
  resendActivationEmail,
} from '../../services/slices/authSlice';
import { ButtonCounter } from '../../components/ButtonCounter/ButtonCounter';
import { LogInPageDecorationImg } from '../../components/LogInPageDecorationImg/LogInPageDecorationImg';

export function RegisterPage() {
  const {
    errors,
    isValid,
    handleSecondPasswordChange,
    setIsValid,
    handleChange,
    handleBlur,
    handleChangeByValue,
    handleChangeInRealTime,
    resetForm,
    values,
    handlePhoneValidation,
    handleChangeStorageByEvent,
    handleChangeStorageByValue,
    setValues,
    handleChangeCheckbox,
  } = useFormValidation();

  const {
    userName,
    userEmail,
    userPhone,
    userId,
    isSending,
    sendDataSucces,
    registerSucces,
    registerError,
  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [formTitle, setTitle] = useState('Зарегистрируйте аккаунт');
  const [stepIndex, setStepIndex] = useState('1');
  const [disabledButtonCounter, setDisabledButtonCounter] = useState(true);
  const [dataEntryStep, setDataEntryStep] = useState(true);
  const [dataResponseStep, setDataResponseStep] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [counter, setCounter] = useState(30);
  const nextStep = useCallback((e) => {
    e.preventDefault();
    setIsValid(false);
    setStepIndex('2');
    setTitle('Придумайте пароль');
  }, [setIsValid]);
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter') {
      const areAllFieldsFilled = values.email && values.name && values.phone;

      if (areAllFieldsFilled) {
        setInputError(false);
        nextStep(e);
      } else {
        setInputError(true);
      }
    }
  }, [values, nextStep]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const sendData = (e) => {
    e.preventDefault();
    const sendData = {
      email: values.email,
      first_name: values.name,
      password: values.password,
      phone: values.phone,
      general_agreement: !!values.agree,
      markcomm_agreement: !!values.mailing,
    };
    dispatch(registerUser(sendData));
    setDataEntryStep(false);
    setDataResponseStep(true);
    setStepIndex('3');
    setTitle('Что-то пошло не так');
  };

  const onClickErrorButton = (e) => {
    e.preventDefault();
    const sendData = {
      email: values.email,
      first_name: values.name,
      password: values.password,
      phone: values.phone,
      general_agreement: !!values.agree,
      markcomm_agreement: !!values.mailing,
    };
    dispatch(registerUser(sendData));
  };

  const onClickResendActivation = (e) => {
    e.preventDefault();
    const sendData = {
      email: values.email,
    };
    dispatch(resendActivationEmail(sendData));
    setCounter(30);
    setDisabledButtonCounter(true);
  };

  const storageKey = 'register';
  useEffect(() => {
    try {
      const savedValues = JSON.parse(localStorage.getItem(storageKey)) || {};
      setValues(savedValues);
    } catch (error) {
      console.error('Ошибка при разборе сохраненных значений:', error);
      setValues({});
    }
  }, [setValues]);

  const subStepsDataEntry = (step) => {
    if (step === '2') {
      return (
        <>
          <div className={cls.inputsWrapper}>
            <InputField
              type="password"
              errors={errors}
              isValid={isValid}
              handleChange={handleChange}
              values={values}
            />
            <InputField
              type="repeatPassword"
              errors={errors}
              isValid={isValid}
              handleChange={handleSecondPasswordChange}
              values={values}
            />
          </div>
          <div className={cls.buttonWrapper}>
            <Button
              type="submit"
              onClick={(e) => sendData(e)}
              disabled={!isValid}
              className="fill"
              decoration="black"
            >
              Дальше
            </Button>
          </div>
        </>
      );
    }
    return (
      <>
        <div className={cls.inputsWrapper}>
          <div className={cls.inputsFieldMargin}>
            <InputField
              type="name"
              errors={errors}
              isValid={isValid}
              handleChange={(e) => handleChangeStorageByEvent(e, storageKey, handleChange)}
              values={values}
            />
            <InputField
              type="email"
              errors={errors}
              isValid={isValid}
              handleChange={(e) => handleChangeStorageByEvent(e, storageKey, handleChange)}
              values={values}
            />
            <InputFieldPhone
              errors={errors}
              isValid={isValid}
              handleChange={(value) => handleChangeStorageByValue(storageKey, 'phone', value, handleChangeByValue)}
              handlePhoneValidation={handlePhoneValidation}
              values={values}
            />
          </div>
          <CheckBoxField
            type="agreement"
            handleChange={(e) => handleChangeCheckbox(e, storageKey)}
            values={values}
          />
          <CheckBoxField
            type="mailing"
            handleChange={(e) => handleChangeCheckbox(e, storageKey)}
            values={values}
          />
        </div>
        <div className={cls.buttonWrapper}>
          <Button
            type="button"
            onClick={(e) => nextStep(e)}
            disabled={!isValid}
            className="fill"
            decoration="black"
          >
            Дальше
          </Button>
        </div>
      </>
    );
  };

  return (
    <section className={cls.section}>
      <div className={cls.block}>
        <form className={cls.formContainer} noValidate>
          {dataEntryStep && (
            <>
              <ul className={classNames(cls.list, {}, [])}>
                <SignHeaderLinks />
                <div className={classNames(cls.step, {}, [])}>
                  {stepIndex}
                  /4
                </div>
              </ul>
              {inputError && <span className={cls.errorMessage}>Пожалуйста, заполните все поля!</span>}
              <h3 className={cls.title}>{formTitle}</h3>
              {subStepsDataEntry(stepIndex)}
            </>
          )}
          {dataResponseStep && (
            <div className={cls.responseStep}>
              <div className={classNames(cls.list, {}, [])}>
                <div className={classNames(cls.step, {}, [])}>
                  {stepIndex}
                  /4
                </div>
              </div>
              {registerError && (
                <>
                  <h3 className={cls.titleError}>{formTitle}</h3>
                  <p
                    className={classNames(
                      cls.text,
                      { [cls.textError]: registerError },
                      [],
                    )}
                  >
                    Во время отправки данных возникла ошибка. Попробуйте
                    отправить данные ещё раз.
                  </p>
                  <div className={cls.errorButtonWrapper}>
                    <Button
                      type="button"
                      onClick={(e) => onClickErrorButton(e)}
                      disabled={!isValid}
                      className="fill"
                      decoration="black"
                    >
                      Отправить заново
                    </Button>
                  </div>
                </>
              )}
              {sendDataSucces && (
                <>
                  <p className={classNames(cls.text, {}, [cls.textSendData])}>
                    Мы отправили ссылку на указанную почту
                    {' '}
                    {values.email}
                    . Перейдите по ссылке из письма для подтверждения своего аккаунта.
                  </p>
                  <div className={cls.errorButtonWrapper}>
                    <Button
                      type="button"
                      onClick={(e) => onClickResendActivation(e)}
                      disabled={disabledButtonCounter}
                      className="fill"
                      decoration="black"
                    >
                      <ButtonCounter
                        counter={counter}
                        setCounter={setCounter}
                        changeStatus={setDisabledButtonCounter}
                      />
                    </Button>
                  </div>
                </>
              )}
            </div>
          )}
        </form>
        <LogInPageDecorationImg />
      </div>
    </section>
  );
}
