import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '../../helpers/classNames';
import cls from './ProfilePage.module.scss';
import { activateUser, getEmailByUID, resendActivationEmail } from '../../services/slices/authSlice';
import { RectangularPageDecoration } from '../../components/RectangularPageDecoration/RectangularPageDecoration';
import { ProfileCardMenu } from '../../components/ProfileCardMenu/ProfileCardMenu';
import { cardInfo } from '../../utils/consts/constants';

export function ProfilePage() {
  return (
    <section className={cls.section}>
      <RectangularPageDecoration />
      <div className={cls.block}>
        <div className={cls.titleWrapper}>
          <h1 className={cls.title}>Аккаунт</h1>
          <h2 className={cls.profileName}>Иван Петров</h2>
        </div>
        <ul className={cls.cardsWrapper}>
          {cardInfo.map((card) => (
            <li className={cls.item} key={card.cardId}>
              <Link to={card.cardRoute}>
                <ProfileCardMenu
                  cardIcon={card.cardIcon}
                  cardTitle={card.cardTitle}
                  cardText={card.cardText}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
