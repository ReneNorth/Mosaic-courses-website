import cls from './CourseCard.module.scss';

export const CourseCard = ({
  item, handleEnroll, handleGetMore,
}) => {
  return (
    <>
      <img className={cls.img} src={item.img} alt={item.title} />
      <div className={cls.contentWrapper}>
        <h3 className={cls.contentTitle}>
          {item.title}
        </h3>
        <div className={cls.atributContainer}>
          <div className={cls.wrapperAtribut}>
            <div className={cls.priceContainer}>
              <span className={cls.timeIcon} />
              <p>4 часа</p>
            </div>
            <div className={cls.priceContainer}>
              <span className={cls.priceIcon} />
              <p>{`${item.price} тенге`}</p>
            </div>
          </div>
          <p className={cls.description}>
            {item.description}
          </p>
        </div>
        <div className={cls.btnGroup}>
          <button className={cls.btnBlack} type="button" onClick={handleEnroll}>
            Записаться
          </button>
          <button className={cls.btnWhite} type="button" onClick={handleGetMore}>
            Узнать подробнее
          </button>
        </div>
      </div>
    </>
  );
};
