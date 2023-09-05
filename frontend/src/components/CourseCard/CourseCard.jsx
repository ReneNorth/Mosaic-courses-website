import { Button } from '../Button/Button';
import { formatCourseDate } from '../../helpers/formatDate';
import cls from './CourseCard.module.scss';
import { findEarliestDate } from '../../helpers/findEarliestDate';
import { findLowestCoursePrice } from '../../helpers/findLowestCoursePrice';

export const CourseCard = ({
  item, type = 'default', handleEnroll, handleGetMore,
// eslint-disable-next-line consistent-return
}) => {
  let date;
  let price;
  let currency;
  if (item.masterclasses.length > 0) {
    const startDatesArray = item.masterclasses.map((masterclass) => masterclass.time_start);
    const earliestStartDate = findEarliestDate(startDatesArray);
    date = formatCourseDate(new Date(earliestStartDate));

    const pricesWithCurrency = item.masterclasses.map((mc) => [Number(mc.price), mc.currency]);
    [price, currency] = findLowestCoursePrice(pricesWithCurrency);
  }

  if (item.masterclasses.length > 0) {
    return (
      <>
        <div className={cls.imgWrapper}>
          <img className={cls.img} src={item.image} alt={item.title} />
          {type === 'all' && (
            <div className={cls.start}>
              <span>Ближайший старт</span>
              <span>{date}</span>
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
                  {type === 'article' ? `Время прочтения ${item.time} минут` : `${item.duration} часов`}
                </p>
              </div>
              {type === 'article' ? <div className={cls.info}>{`Опубликовано ${item.date}`}</div>
                : (
                  <div className={cls.priceContainer}>
                    <span className={cls.priceIcon} />
                    <p className={cls.info}>{`${price} ${currency}`}</p>
                  </div>
                )}
            </div>
            <p className={cls.description}>
              {item.short_description}
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
  }
};
