import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '../../helpers/classNames';
import cls from './PasswordResetConfirm.module.scss';
import { resetPasswordConfirm } from '../../services/slices/authSlice';
import { LogInPageDecorationImg } from '../../components/LogInPageDecorationImg/LogInPageDecorationImg';
import { Button } from '../../components/Button/Button';
import { useFormValidation } from '../../hooks/useFormValidation';
import { InputField } from '../../components/InputField/InputField';

export function PasswordResetConfirm() {
  const {
    errors, isValid, handleSecondPasswordChange, handleChange, values,
  } = useFormValidation();
  const { uid, token } = useParams();
  const navigate = useNavigate();
  const {
    passwordResetConfirm,
  } = useSelector((state) => state.auth);
  const [title, setTitle] = useState('Придумайте новый пароль');
  const [text, setText] = useState('');
  const [buttonText, setButtonText] = useState('Дальше');
  const dispatch = useDispatch();

  const onClickSendNewPassword = (e) => {
    e.preventDefault();
    const sendData = {
      uid,
      token,
      new_password: values.password,
    };
    if (!passwordResetConfirm) {
      dispatch(resetPasswordConfirm(sendData));
    }
    if (passwordResetConfirm) {
      navigate('/sign-in');
    }
  };

  useEffect(() => {
    if (passwordResetConfirm) {
      setTitle('Готово!');
      setText('Вы сменили пароль. Теперь вы можете войти в свой аккаунт.');
      setButtonText('Войти в аккаунт');
    }
  }, [passwordResetConfirm]);

  return (
    <section className={cls.section}>
      <div className={cls.block}>
        <form className={cls.formContainer} noValidate>
          <div className={classNames(cls.responseStep, { activeResponseStep: passwordResetConfirm }, [])}>
            <h3 className={classNames(cls.title, { activeTitle: passwordResetConfirm }, [])}>{title}</h3>
            <p className={cls.text}>
              {text}
            </p>
            {!passwordResetConfirm && (
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
            )}
            <div className={classNames(cls.buttonWrapper, { activeButtonWrapper: passwordResetConfirm }, [])}>
              <Button
                type="button"
                onClick={(e) => onClickSendNewPassword(e)}
                disabled={!isValid}
                className="fill"
                decoration="black"
              >
                {buttonText}
              </Button>
            </div>
          </div>
        </form>
        <LogInPageDecorationImg />
      </div>
    </section>
  );
}
