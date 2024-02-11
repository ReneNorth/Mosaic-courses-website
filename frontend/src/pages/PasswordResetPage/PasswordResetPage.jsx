import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cls from './PasswordResetPage.module.scss';
import { Button } from '../../components/Button/Button';
import { classNames } from '../../helpers/classNames';
import { InputField } from '../../components/InputField/InputField';
import { SignHeaderLinks } from '../../components/SignHeaderLinks/SignHeaderLinks';
import useFormValidation from '../../hooks/useFormValidation';
import { passwordReset } from '../../services/slices/authSlice';
import { LogInPageDecoration } from '../../components/LogInPageDecoration/LogInPageDecoration';
import { LogInPageDecorationImg } from '../../components/LogInPageDecorationImg/LogInPageDecorationImg';
import { ButtonCounter } from '../../components/ButtonCounter/ButtonCounter';

export function PasswordResetPage() {
  const {
    errors, isValid, handleChange, values,
  } = useFormValidation();

  const [title, setTitle] = useState('Восстановление пароля');
  const [text, setText] = useState('Мы пришлём ссылку для сброса пароля');
  const [buttonText, setButtonText] = useState('Найти мой аккаунт');
  const [disabledButtonCounter, setDisabledButtonCounter] = useState(true);
  const [counter, setCounter] = useState(30);

  const {
    passwordResetError, passwordResetSucces,

  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onClickPasswordReset = (e) => {
    e.preventDefault();
    const sendData = {
      email: values.email,
    };
    dispatch(passwordReset(sendData));
    setCounter(30);
    setDisabledButtonCounter(true);
  };

  useEffect(() => {
    if (passwordResetSucces) {
      setText(`Мы отправили ссылку на создание нового пароля на ${values.email}`);
      setButtonText('');
    }
  }, [passwordResetSucces, values.email]);

  return (
    <section className={cls.section}>
      <LogInPageDecoration />
      <div className={cls.block}>
        <form className={cls.formContainer} noValidate>
          <ul className={classNames(cls.list, {}, [])}>
            <SignHeaderLinks />
          </ul>
          {passwordResetError && (<span className={cls.errorMessage}>Аккаунт не найден</span>)}
          <h3 className={cls.title}>{title}</h3>
          <p className={cls.text}>
            {text}
          </p>
          {!passwordResetSucces && (
            <div className={cls.inputsWrapper}>
              <InputField
                type="email"
                placeholder="Email"
                errors={errors}
                isValid={isValid}
                handleChange={handleChange}
                values={values}
              />
            </div>
          )}
          <div className={cls.buttonWrapper}>
            {!passwordResetSucces && (
              <Button
                type="button"
                onClick={(e) => onClickPasswordReset(e)}
                disabled={!isValid}
                className="fill"
                decoration="black"
              >
                {buttonText}
              </Button>
            )}
            {passwordResetSucces && (
              <Button
                type="button"
                onClick={(e) => onClickPasswordReset(e)}
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
            )}
          </div>
        </form>
        <LogInPageDecorationImg />
      </div>
    </section>
  );
}
