import cls from './ProfileCardMenu.module.scss';
import { classNames } from '../../helpers/classNames';

export const ProfileCardMenu = ({
  cardIcon, cardTitle, cardText,
}) => {
  return (
    <div className={cls.cardWrapper} data-testid="profile-card">
      <div className={cls.icon}>
        {cardIcon}
      </div>
      <h4 className={cls.title}>{cardTitle}</h4>
      <p className={cls.cardText}>{cardText}</p>
    </div>
  );
};
