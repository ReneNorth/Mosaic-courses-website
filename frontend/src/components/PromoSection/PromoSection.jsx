import cls from './PromoSection.module.scss';

export const PromoSection = (
  {
    children, setIsOpen, img, imgBg, btnText, isBtn = true,
  },
) => {
  return (
    <section className={cls.section}>
      <div className={cls.block}>
        <div className={cls.textContainer}>
          <img className={cls.bg} src={imgBg} alt="" />
          {children}
          {isBtn && (
            <button onClick={() => setIsOpen(true)} className={cls.button} type="button">
              {btnText}
            </button>
          )}
        </div>
        <div className={cls.wrapper}>
          <img className={cls.image} src={img} alt="Промо картинка" />
          <div className={cls.radius} />
          <div className={cls.rectangle} />
        </div>
      </div>
    </section>
  );
};
