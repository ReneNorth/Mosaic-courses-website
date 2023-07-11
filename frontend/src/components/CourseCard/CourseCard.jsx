import { Button } from '../Button/Button';
import cls from './CourseCard.module.scss';

export const CourseCard = ({
  item, type = 'default', handleEnroll, handleGetMore,
}) => {
  return (
    <>
      <div className={cls.imgWrapper}>
        <img className={cls.img} src={item.img} alt={item.title} />
        {type === 'all' && (
          <div className={cls.start}>
            <span>Ближайший старт</span>
            <span>{item.date}</span>
          </div>
        )}
      </div>
      <div className={cls.contentWrapper}>
        <h3 className={cls.contentTitle}>
          {item.title}
        </h3>
        <div className={cls.atributContainer}>
          <div className={cls.wrapperAtribut}>
            <div className={cls.priceContainer}>
              <span className={cls.timeIcon} />
              <p className={cls.info}>
                {type === 'article' ? `Время прочтения ${item.time} минут` : `${item.hours} часов`}
              </p>
            </div>
            {type === 'article' ? <div className={cls.info}>{`Опубликовано ${item.date}`}</div>
              : (
                <div className={cls.priceContainer}>
                  <span className={cls.priceIcon} />
                  <p className={cls.info}>{`${item.price} тенге`}</p>
                </div>
              )}
          </div>
          <p className={cls.description}>
            {item.description}
          </p>
        </div>
        <div className={cls.btnGroup}>
          {type !== 'article' && (
            <Button
              className="fill"
              onClick={handleEnroll}
            >
              Записаться
            </Button>
          )}
          <Button className="outline" onClick={handleGetMore}>Узнать подробнее</Button>
        </div>
      </div>
    </>
  );
};
