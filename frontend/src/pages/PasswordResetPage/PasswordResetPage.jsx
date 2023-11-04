import { NavLink, Link, useNavigate } from 'react-router-dom';
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

export function PasswordResetPage() {
  const {
    errors, isValid, handleSecondPasswordChange, setIsValid,
    handleChange, handleBlur, handleChangeInRealTime, resetForm, values,
  } = useFormValidation();

  const [title, setTitle] = useState('Восстановление пароля');
  const [text, setText] = useState('Мы пришлём ссылку для сброса пароля');
  const [buttonText, setButtonText] = useState('Найти мой аккаунт');
  const navigate = useNavigate();

  const {
    userName, userEmail, userPhone, userId, isSending, sendDataSucces, registerSucces, registerError, loginSucces,
    loginError,
  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const login = (e) => {
    e.preventDefault();
    const sendData = {
      email: values.email,
    };
    console.log(sendData);
    dispatch(passwordReset(sendData));
  };

  useEffect(() => {
    if (loginSucces) {
      navigate('/profile');
    }
  }, [loginSucces, navigate]);

  return (
    <section className={cls.section}>
      <LogInPageDecoration />
      <div className={cls.block}>
        <form className={cls.formContainer} noValidate>
          <ul className={classNames(cls.list, {}, [])}>
            <SignHeaderLinks />
          </ul>
          <h3 className={cls.title}>{title}</h3>
          <p className={cls.text}>
            {text}
          </p>
          <div className={cls.inputsWrapper}>
            <InputField
              type="email"
              placeholder="Email*"
              errors={errors}
              isValid={isValid}
              handleChange={handleChange}
              values={values}
            />
          </div>
          <div className={cls.buttonWrapper}>
            <Button
              type="button"
              onClick={(e) => login(e)}
              disabled={!isValid}
              className="fill"
              decoration="black"
            >
              {buttonText}
            </Button>
          </div>
        </form>
        <LogInPageDecorationImg />
      </div>
    </section>
  );
}
