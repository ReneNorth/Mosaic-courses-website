import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import giftIcon from '../../images/gift-outline.svg';
import share from '../../images/share.png';
import cls from './StickySidebar.module.scss';
import { setIsCalendarPopupOpen } from '../../services/slices/popupSlice';
import { Button } from '../Button/Button';

export const StickySidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentCourse = useSelector((store) => store.courses.currentCourse);

  const handlePopupOpen = useCallback(() => {
    dispatch(setIsCalendarPopupOpen(true));
  }, [dispatch]);

  const minPrice = useMemo(() => {
    if (currentCourse?.masterclasses?.length > 0) {
      const coursePrices = currentCourse.masterclasses.map((masterclass) => masterclass.price);
      return Math.min(...coursePrices);
    }
    return 0;
  }, [currentCourse]);

  const duration = useMemo(() => {
    if (currentCourse?.masterclasses?.length > 0) {
      const courseDurations = currentCourse.masterclasses
        .map((masterclass) => {
          const dateStart = new Date(masterclass.time_start);
          const dateEnd = new Date(masterclass.time_end);
          return (dateEnd - dateStart) / 1000 / 60 / 60;
        });

      if (courseDurations.length === 0) return 'от 0 часов';

      const minDuration = Math.min(...courseDurations);
      const clampedDuration = Math.min(Math.floor(minDuration), 12);

      if (clampedDuration === 1) {
        return 'от 1 часа';
      }
      return `от ${clampedDuration} часов`;
    }
    return 'от 0 часов';
  }, [currentCourse]);

  return (
    <div>
      <div className={cls.sidebar}>
        <Button
          href="/courses"
          className={cls.shareItem}
          type="button"
          onClick={() => navigate(-1)}
        >
          <img className={cls.share} src={share} alt="ссылка" />
        </Button>

        <div className={cls.innerBlock}>
          <h3 className={cls.title}>
            {currentCourse?.title
              ? `Мастер-класс по римской мозаике ${currentCourse?.title?.toLowerCase()}` : ''}
          </h3>
          <h2 className={cls.coursePrice}>{`от ${minPrice}₽`}</h2>
          <p className={cls.duration}>{`Продолжительность ${duration}`}</p>
          <div className={cls.buttonContainer}>
            <Button
              className="fill"
              fill
              onClick={handlePopupOpen}
            >
              Записаться
            </Button>
          </div>
          <div className={cls.giftContainer}>
            <img className={cls.giftIcon} src={giftIcon} alt="подарок" />
            <p className={cls.gift}>Подарить этот мастер-класс</p>
          </div>
        </div>
      </div>
    </div>
  );
};
