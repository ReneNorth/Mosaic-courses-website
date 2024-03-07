/* eslint-disable jsx-a11y/control-has-associated-label */
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '../../helpers/classNames';
import cls from './ProfileSecurityPage.module.scss';
import { activateUser, getEmailByUID, resendActivationEmail } from '../../services/slices/authSlice';
import { ProfileCardMenu } from '../../components/ProfileCardMenu/ProfileCardMenu';
import { cardInfo } from '../../utils/consts/constants';
import { ProfileNavMenu } from '../../components/ProfileNavMenu/ProfileNavMenu';
import { ProfileEditField } from '../../components/ProfileEditField/ProfileEditField';
import { InputField } from '../../components/InputField/InputField';
import { useFormValidation } from '../../hooks/useFormValidation';
import { Button } from '../../components/Button/Button';
import { ProfileMobileSymbol } from '../../images/ProfileMobileSymbol';
import { ProfilePopup } from '../../components/ProfilePopup/ProfilePopup';

export function ProfileSecurityPage() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toProfilePage = (e) => {
    e.preventDefault();
    navigate('/profile');
  };

  const [fieldPassword, setFieldPassword] = useState(false);
  const openToEditPassword = (e) => {
    e.preventDefault();
    setFieldPassword(!fieldPassword);
  };

  const [deleteField, setDeleteField] = useState(false);

  const openTodeleteAccount = (e) => {
    e.preventDefault();
    setDeleteField(!deleteField);
  };

  const deleteAccount = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <section className={cls.section}>
      <div className={cls.block}>
        <ProfileNavMenu />
        <ProfilePopup isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className={cls.content}>
          <div className={cls.titleWrapper}>
            <button onClick={(e) => toProfilePage(e)} className={cls.backButton} type="button">
              <ProfileMobileSymbol />
            </button>
            <h2 className={cls.title}>Вход и безопасность</h2>
          </div>
          <p className={cls.subTitle}>Обновите пароль, обеспечьте безопасность своего аккаунта</p>
          <div className={classNames(cls.line, { [cls.lineActive]: fieldPassword }, [])}>
            <div className={cls.dataWrapper}>
              <h3 className={classNames(cls.lineTitle, { [cls.lineTitleActive]: fieldPassword }, [])}>Пароль</h3>
              {fieldPassword && (
                <div className={cls.childrenContentWrapper}>
                  <p className={cls.childrenContentParagraf}>
                    Мы отправим письмо на почту для подтверждения сброса пароля
                  </p>
                  <Button
                    className="fill"
                  >
                    Отправить
                  </Button>
                </div>
              )}
            </div>
            <button
              type="button"
              className={classNames(cls.editButton, { [cls.editButtonActive]: fieldPassword }, [])}
              onClick={(e) => openToEditPassword(e)}
            >
              {!fieldPassword && ('Сбросить')}
              {fieldPassword && ('Отменить')}
            </button>
          </div>

          <div className={classNames(cls.line, { [cls.lineActive]: deleteField }, [])}>
            <div className={cls.dataWrapper}>
              <h3 className={classNames(cls.lineTitle, { [cls.lineTitleActive]: deleteField }, [])}>
                Удаление аккаунта
              </h3>
              {deleteField && (
                <div className={cls.childrenContentWrapper}>
                  <p className={cls.childrenContentParagraf}>
                    Вы уверены, что хотите удалить свой аккаунт?
                  </p>
                  <div className={cls.buttonWrapper}>
                    <Button
                      className="outline"
                      onClick={(e) => deleteAccount(e)}
                    >
                      Да, удалить
                    </Button>
                    <Button
                      className="fill"
                      onClick={(e) => openTodeleteAccount(e)}
                    >
                      Не удалять
                    </Button>
                  </div>
                </div>
              )}
            </div>
            <button
              type="button"
              className={classNames(cls.editButton, { [cls.editButtonActive]: deleteField }, [])}
              onClick={(e) => openTodeleteAccount(e)}
            >
              {!deleteField && ('Удалить')}
              {deleteField && ('Отменить')}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
