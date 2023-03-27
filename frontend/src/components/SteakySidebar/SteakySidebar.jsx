import cls from './SteakySidebar.module.scss';

export const SteakySidebar = () => {
  return (
    <div className={cls.sidebar}>
      <div className={cls.innerBlock}>
        <h3 className={cls.title}> Курс по римской мозайке однодевный</h3>
        <p className={cls.coursePrice}> 4 000 ₽ </p>
        <p className={cls.duration}> Продолжительность: 6 часов</p>
        <button className={cls.button} type="button">
          Записаться на курс
        </button>
        <div className={cls.gift}> Подарить этот курс</div>
      </div>
    </div>
  );
};
