import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import giftIcon from '../../images/gift-outline.svg';
import share from '../../images/share.png';
import cls from './StickySidebar.module.scss';
import { setIsCalendarPopupOpen } from '../../services/slices/popupSlice';
import { Button } from '../Button/Button';

export const StickySidebar = () => {
  const dispatch = useDispatch();

  const handlePopupOpen = useCallback(() => {
    dispatch(setIsCalendarPopupOpen(true));
  }, [dispatch]);

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
          <div className={cls.buttonContainer}>
            <Button
              className="fill"
              fill
              onClick={handlePopupOpen}
            >
              Записаться на курс
            </Button>
          </div>
          <div className={cls.giftContainer}>
            <img className={cls.giftIcon} src={giftIcon} alt="подарок" />
            <div className={cls.gift}> Подарить этот курс</div>
          </div>
        </div>
      </div>
    </div>
  );
};
