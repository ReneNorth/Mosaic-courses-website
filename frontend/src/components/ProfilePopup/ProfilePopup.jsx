import { useNavigate } from 'react-router-dom';
import cls from './ProfilePopup.module.scss';
import formImg from '../../images/form_header.png';
import { Button } from '../Button/Button';
import { classNames } from '../../helpers/classNames';
import CloseIcon from '../../images/CloseIcon';
import { ENDPOINTS } from '../../utils/consts/constants';

export const ProfilePopup = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  const goToMain = (e) => {
    e.preventDefault();
    navigate(ENDPOINTS.MAIN);
  };

  return (
    <div className={classNames(cls.popup, { [cls.popup_open]: isOpen }, [])}>
      <div className={cls.overlay} onClick={() => setIsOpen(!isOpen)} />
      <div className={cls.content}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          aria-label="close"
          className={cls.buttonClose}
        >
          <div className={cls.cancelIcon}>
            <CloseIcon />
          </div>
        </button>
        <img className={cls.image} src={formImg} alt="" />
        <div className={cls.contentWrapper}>
          <h2 className={cls.title}>Ваш аккаунт удалён</h2>
          <div className={cls.linksWrapper}>
            <div className={cls.buttonWrapper}>
              <Button
                onClick={(e) => goToMain(e)}
                type="button"
                className="fill"
                decoration="black"
              >
                Вернуться на главную
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
