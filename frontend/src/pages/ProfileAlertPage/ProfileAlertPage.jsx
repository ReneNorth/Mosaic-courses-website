/* eslint-disable jsx-a11y/control-has-associated-label */
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '../../helpers/classNames';
import cls from './ProfileAlertPage.module.scss';
import { activateUser, getEmailByUID, resendActivationEmail } from '../../services/slices/authSlice';
import { ProfileCardMenu } from '../../components/ProfileCardMenu/ProfileCardMenu';
import { cardInfo } from '../../utils/consts/constants';
import { ProfileNavMenu } from '../../components/ProfileNavMenu/ProfileNavMenu';
import { ProfileEditField } from '../../components/ProfileEditField/ProfileEditField';
import { InputField } from '../../components/InputField/InputField';
import { useFormValidation } from '../../hooks/useFormValidation';
import { Button } from '../../components/Button/Button';
import { SwitchButton } from '../../components/SwitchButton/SwitchButton';
import { ProfileMobileSymbol } from '../../images/ProfileMobileSymbol';

export function ProfileAlertPage() {
  const [subscribeField, setSubscribeField] = useState(true);
  const navigate = useNavigate();

  const toProfilePage = (e) => {
    e.preventDefault();
    navigate('/profile');
  };

  return (
    <section className={cls.section}>
      <div className={cls.block}>
        <ProfileNavMenu />
        <div className={cls.content}>
          <div className={cls.titleWrapper}>
            <button onClick={(e) => toProfilePage(e)} className={cls.backButton} type="button">
              <ProfileMobileSymbol />
            </button>
            <h2 className={cls.title}>Уведомления</h2>
          </div>
          <p className={cls.subTitle}>Укажите, хотите ли получать уведомления</p>
          <div className={cls.line}>
            <div className={cls.dataWrapper}>
              <h3 className={cls.lineTitle}>Получать маркетинговые рассылки</h3>
            </div>
            <SwitchButton
              isOn={subscribeField}
              handleToggle={() => setSubscribeField(!subscribeField)}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
