import giftIcon from '../../images/gift-outline.svg';
import share from '../../images/share.png';
import { PickDate } from '../PickDate/PickDate';
import cls from './SteakySidebar.module.scss';
import giftIcon from '../../images/gift-outline.svg';
import { PickDate } from '../PickDate/PickDate';
import share from '../../images/share.png';

export const SteakySidebar = () => {
  return (
    <div className={cls.sidebar}>
      <a href="!#" className={cls.shareItem}>
        <img className={cls.share} src={share} alt="ссылка" />
      </a>

      <div className={cls.innerBlock}>
        <h3 className={cls.title}> Курс по римской мозайке однодевный</h3>   
        <p className={cls.coursePrice}> 4 000 ₽ </p> 
        <p className={cls.duration}>  Продолжительность: 6 часов</p>
        <PickDate />
        <button className={cls.button} type="button">
          Записаться на курс
        </button>
        <button className={cls.buttonOutline} type="button">
          {' '}
          Забронировать курс
        </button>
        <div className={cls.giftContainer}>
          <img className={cls.giftIcon} src={giftIcon} alt="подарок" />
          <div className={cls.gift}> Подарить этот курс</div>
        </div>
      </div>
    </div>
  );
};
