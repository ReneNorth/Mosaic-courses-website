import { useDispatch } from 'react-redux';
import giftIcon from '../../images/gift-outline.svg';
import share from '../../images/share.png';

import cls from './StickySidebar.module.scss';
import { setIsCalendarPopupOpen } from '../../services/slices/popupSlice';

export const StickySidebar = () => {
  const dispatch = useDispatch();

  function handlePopupOpen() {
    dispatch(setIsCalendarPopupOpen(true));
  }

  return (
    <div>
      <div className={cls.sidebar}>
        <a href="!#" className={cls.shareItem}>
          <img className={cls.share} src={share} alt="ссылка" />
        </a>

        <div className={cls.innerBlock}>
          <h3 className={cls.title}> Курс по римской мозайке однодевный</h3>
          <h2 className={cls.coursePrice}>от 4 000₽</h2>
          <p className={cls.duration}> Продолжительность: 6 часов</p>

          <button className={cls.button} type="button" onClick={handlePopupOpen}>
            Записаться на курс
          </button>
          <div className={cls.giftContainer}>
            <img className={cls.giftIcon} src={giftIcon} alt="подарок" />
            <div className={cls.gift}> Подарить этот курс</div>
          </div>
        </div>
      </div>
    </div>
  );
};
