import { useNavigate } from 'react-router-dom';
import cls from './LoginPopup.module.scss';
import formImg from '../../images/form_header.png';
import { Button } from '../Button/Button';
import { classNames } from '../../helpers/classNames';
import CloseIcon from '../../images/CloseIcon';
import { ENDPOINTS } from '../../utils/consts/constants';

export const LoginPopup = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const goToLogin = (e) => {
    e.preventDefault();
    navigate(ENDPOINTS.signIn);
  };

  const goToRegistration = (e) => {
    e.preventDefault();
    navigate(ENDPOINTS.register);
  };

  return (
    <div className={classNames(cls.popup, { [cls.popup_open]: isOpen }, [])}>
      <div className={cls.overlay} onClick={() => setIsOpen(!isOpen)} />
      <div className={cls.content}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          aria-label="close"
          className={cls.button__close}
        >
          <div className={cls.cancel_icon}>
            <CloseIcon />
          </div>
        </button>
        <img className={cls.image} src={formImg} alt="" />
        <div className={cls.content__wrapper}>
          <h2 className={cls.title}>Войти или зарегистрироваться</h2>
          <p className={cls.description}>
            Войдите в свой аккаунт или создайте новый
          </p>
          <div className={cls.linksWrapper}>
            <div className={cls.buttonRegistratonWrapper}>
              <Button
                onClick={(e) => goToRegistration(e)}
                type="button"
                className="fill"
              >
                Зарегистрироваться
              </Button>
            </div>
            <div className={cls.buttonLoginInWrapper}>
              <Button
                onClick={(e) => goToLogin(e)}
                type="button"
                className="outline"
              >
                У меня уже есть аккаунт
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
