import { Button } from '../Button/Button';
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
          <div className={cls.btnGroup}>
            {isBtn && (
              <Button onClick={() => setIsOpen(true)} className="fill" decoration="black">
                {btnText}
              </Button>
            )}
          </div>
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
