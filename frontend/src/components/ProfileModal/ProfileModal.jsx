import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import cls from './ProfileModal.module.scss';
import { classNames } from '../../helpers/classNames';
import IconSettings from '../../images/profile_modal_settings.svg';
import IconSignIn from '../../images/profile_modal_sign_in_course.svg';
import IconLogOut from '../../images/profile_modal_log_out_profile.svg';
import Calendar from '../../images/calendar.svg';
import { logout as sliceLogout } from '../../services/slices/authSlice';

export const ProfileModal = ({ isOpen, onClose }) => {
  const popup = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

    dispatch(sliceLogout());

    navigate('/sign-in');
  }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popup.current && !popup.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isAuthenticated = !!localStorage.getItem('accessToken');

  return (
    <div
      className={classNames(cls.popup, { [cls.popupOpen]: isOpen }, [])}
      ref={popup}
      data-testid="popup"
    >
      <div className={cls.contentWrapper}>
        {!isAuthenticated ? (
          <NavLink className={cls.link} to="/register">
            <img src={IconSignIn} alt="Регистрация/логин" />
            Регистрация/логин
          </NavLink>
        ) : (
          <>
            <NavLink className={cls.link} to="/my-masterclasses">
              <img src={Calendar} alt="Записаться" />
              Мои мастер-классы
            </NavLink>
            <NavLink className={cls.link} to="/profile">
              <img src={IconSettings} alt="В настройки профиля" />
              Настройки аккаунта
            </NavLink>
            <button className={cls.button} type="button" onClick={logout}>
              <img src={IconLogOut} alt="Выйти из профиля" />
              Выйти
            </button>
          </>
        )}
      </div>
    </div>
  );
};
