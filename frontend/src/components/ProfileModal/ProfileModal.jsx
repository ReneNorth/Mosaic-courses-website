import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import cls from './ProfileModal.module.scss';
import { classNames } from '../../helpers/classNames';
import IconSettings from '../../images/profile_modal_settings.svg';
import IconSignIn from '../../images/profile_modal_sign_in_course.svg';
import IconLogOut from '../../images/profile_modal_log_out_profile.svg';

export const ProfileModal = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div
        className={classNames(cls.overlay, { [cls.overlayOpen]: isOpen }, [])}
        onClick={() => setIsOpen(!isOpen)}
        data-testid="overlay"
      />
      <div className={classNames(cls.popup, { [cls.popupOpen]: isOpen }, [])} data-testid="popup">
        <div className={cls.contentWrapper}>
          <NavLink
            className={cls.link}
            to="/profile"
          >
            <img src={IconSettings} alt="В настройки профиля" />
            Настройки аккаунта
          </NavLink>
          <NavLink
            className={cls.link}
            to="/course-registration"
          >
            <img src={IconSignIn} alt="Записаться на курс" />
            Записи на курсы
          </NavLink>
          <button className={cls.button} type="button">
            <img src={IconLogOut} alt="Выйти из профиля" />
            Выйти
          </button>
        </div>
      </div>
    </>
  );
};
