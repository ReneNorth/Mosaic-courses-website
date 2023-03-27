import cls from './SteakySidebar.module.scss';
import { PickDate } from '../DatePicker/PickDate';

export const SteakySidebar = () => {
  return (
    <div className={cls.sidebar}>
      <div className={cls.innerBlock}>
        <h3 className={cls.title}> Курс по римской мозайке однодневный</h3>   
        <p className={cls.coursePrice}> 4 000 ₽ </p> 
        <p className={cls.duration}>  Продолжительность: 6 часов</p>
        <PickDate />
        <button className={cls.button} type="button">
          Добавить в корзину
        </button>
        <button className={cls.buttonOutline} type="button">
          Забронировать курс
        </button>
        <div className={cls.giftGroup}>
          <div className={cls.iconContainer}>
            <div className={cls.giftIcon}> </div>
          </div>

          <div className={cls.gift}> Подарить этот курс</div>
        </div>
      </div>
    </div>
  );
};
