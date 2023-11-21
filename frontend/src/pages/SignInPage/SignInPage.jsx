import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cls from './SignInPage.module.scss';
import { Button } from '../../components/Button/Button';
import { classNames } from '../../helpers/classNames';
import { InputField } from '../../components/InputField/InputField';
import { SignHeaderLinks } from '../../components/SignHeaderLinks/SignHeaderLinks';
import useFormValidation from '../../hooks/useFormValidation';
import { loginUser } from '../../services/slices/authSlice';
import { LogInPageDecoration } from '../../components/LogInPageDecoration/LogInPageDecoration';
import { LogInPageDecorationImg } from '../../components/LogInPageDecorationImg/LogInPageDecorationImg';

export function SignInPage() {
  const {
    errors, isValid, handleChange, values,
  } = useFormValidation();

  const navigate = useNavigate();

  const {
    loginSucces,
    loginError,
  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const login = (e) => {
    e.preventDefault();
    const sendData = {
      email: values.email,
      password: values.password,
    };
    dispatch(loginUser(sendData));
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
          {loginError && (<span className={cls.errorMessage}>Неверный логин или пароль</span>)}
          <h3 className={classNames(cls.title, { [cls.titleError]: loginError }, [])}>Войдите в свой профиль</h3>
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
            <Link to="/password-reset">
              <p className={cls.linkText}>Не помню пароль</p>
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
