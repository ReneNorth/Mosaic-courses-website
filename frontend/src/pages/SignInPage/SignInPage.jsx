import { NavLink, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cls from './SignInPage.module.scss';
import { Button } from '../../components/Button/Button';
import { classNames } from '../../helpers/classNames';
import { InputField } from '../../components/InputField/InputField';
import { CheckBoxField } from '../../components/CheckBoxField/CheckBoxField';
import { SignHeaderLinks } from '../../components/SignHeaderLinks/SignHeaderLinks';
import useFormValidation from '../../hooks/useFormValidation';
import { registerUser, loginUser } from '../../services/slices/authSlice';
import { LogInPageDecoration } from '../../components/LogInPageDecoration/LogInPageDecoration';
import { LogInPageDecorationImg } from '../../components/LogInPageDecorationImg/LogInPageDecorationImg';

export function SignInPage() {
  const {
    errors, isValid, handleSecondPasswordChange, setIsValid,
    handleChange, handleBlur, handleChangeInRealTime, resetForm, values,
  } = useFormValidation();

  const {
    userName, userEmail, userPhone, userId, isSending, sendDataSucces, registerSucces, registerError,
  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // const [formTitle, setTitle] = useState('Зарегистрируйте аккаунт');

  const login = (e) => {
    e.preventDefault();
    const sendData = {
      email: values.email,
      password: values.password,
    };
    console.log(sendData);
    dispatch(loginUser(sendData));
  };

  // const sendData = (e) => {
  //   e.preventDefault();
  //   const sendData = {
  //     email: values.email,
  //     first_name: values.name,
  //     password: values.password,
  //     phone: values.phone,
  //     general_agreement: !!values.agree,
  //     markcomm_agreement: !!values.mailing,
  //   };
  //   console.log(sendData);
  //   dispatch(registerUser(sendData));
  //   setDataEntryStep(false);
  //   setDataResponseStep(true);
  //   setStepIndex('3');
  //   // setTitle('Что-то пошло не так');
  // };

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
    console.log(sendData);
    dispatch(registerUser(sendData));
  };

  return (
    <section className={cls.section}>
      <LogInPageDecoration />
      <div className={cls.block}>
        <form className={cls.formContainer} noValidate>
          <ul className={classNames(cls.list, {}, [])}>
            <SignHeaderLinks />
          </ul>
          <h3 className={cls.title}>Войдите в свой профиль</h3>
          <div className={cls.inputsWrapper}>
            <InputField
              type="email"
              placeholder="Email*"
              errors={errors}
              isValid={isValid}
              handleChange={handleChange}
              values={values}
            />
            <InputField
              type="password"
              placeholder="Пароль*"
              errors={errors}
              isValid={isValid}
              handleChange={handleChange}
              values={values}
            />
            <Link to="/password">
              <p className={cls.text}>Не помню пароль</p>
            </Link>
          </div>
          <div className={cls.buttonWrapper}>
            <Button
              type="button"
              onClick={(e) => login(e)}
              disabled={!isValid}
              className="fill"
              decoration="black"
            >
              Войти в профиль
            </Button>
          </div>

        </form>
        <LogInPageDecorationImg />
      </div>
    </section>
  );
}
