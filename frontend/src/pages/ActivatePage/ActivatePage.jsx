import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '../../helpers/classNames';
import cls from './ActivatePage.module.scss';
import { activateUser, getEmailByUID, resendActivationEmail } from '../../services/slices/authSlice';
import { LogInPageDecoration } from '../../components/LogInPageDecoration/LogInPageDecoration';
import { LogInPageDecorationImg } from '../../components/LogInPageDecorationImg/LogInPageDecorationImg';
import { Button } from '../../components/Button/Button';

export function ActivatePage() {
  const { uid, token } = useParams();
  const navigate = useNavigate();
  const {
    activateSucces,
    activateError,
    getEmailByUIDSucces,
    emailByUID,
  } = useSelector((state) => state.auth);
  const [disabledButton, setDisabledButton] = useState(false);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('Готово!');
  const [buttonText, setButtonText] = useState('Готово!');
  const dispatch = useDispatch();

  useEffect(() => {
    const data = {
      uid,
      token,
    };
    dispatch(activateUser(data));
  }, [dispatch, uid, token]);

  const goToLogin = (e) => {
    e.preventDefault();
    if (activateSucces) {
      navigate('/sign-in');
    }
    if (activateError) {
      const data = {
        uid,
        token,
      };
      dispatch(getEmailByUID(data));
    }
  };

  useEffect(() => {
    if (activateSucces) {
      setTitle('Готово!');
      setText('Вы подтвердили свою почту. Теперь вы можете войти в свой аккаунт.');
      setButtonText('Войти в аккаунт');
    }
    if (activateError) {
      setTitle('Что-то пошло не так');
      setText('Почта не подтверждена. Попробуйте отправить ссылку ещё раз.');
      setButtonText('Отправить заново');
    }
    if (getEmailByUIDSucces) {
      setTitle('');
      setText(`Мы отправили ссылку на указанную почту ${emailByUID}. 
      Перейдите по ссылке из письма для подтверждения своего аккаунта.`);
      setButtonText('Отправить заново');
      setDisabledButton(true);
      const sendData = {
        email: emailByUID,
      };
      dispatch(resendActivationEmail(sendData));
    }
  }, [activateSucces, activateError, getEmailByUIDSucces, emailByUID, dispatch]);

  return (
    <section className={cls.section}>
      <LogInPageDecoration />
      <div className={cls.block}>
        <div className={cls.formContainer}>
          <div className={cls.responseStep}>
            <div className={classNames(cls.list, {}, [])}>
              <div className={classNames(cls.step, {}, [])}>
                4/4
              </div>
            </div>
            <h3 className={cls.titleActivate}>{title}</h3>
            <p className={cls.text}>
              {text}
            </p>
            <div className={cls.activateButtonWrapper}>
              <Button
                type="button"
                onClick={(e) => goToLogin(e)}
                className="fill"
                decoration="black"
                disabled={disabledButton}
              >
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
        <LogInPageDecorationImg />
      </div>
    </section>
  );
}
