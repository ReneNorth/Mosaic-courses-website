import { Button } from '../Button/Button';
import { formatCourseDate } from '../../helpers/formatDate';
import cls from './CourseCard.module.scss';
import { findEarliestDate } from '../../helpers/findEarliestDate';
import { findLowestCoursePrice } from '../../helpers/findLowestCoursePrice';
import { getNoun } from '../../helpers/getNoun';
import { useResize } from '../../hooks/useResize';

export const CourseCard = ({
  item, handleEnroll, handleGetMore,
  // eslint-disable-next-line consistent-return
}) => {
  let date;
  let price;
  let currency;

  const { width } = useResize();

  const currencyFullName = {
    '₸': 'тенге',
    '₽': 'рублей',
    '€': 'евро',
  };
  if (item.masterclasses.length > 0) {
    const startDatesArray = item.masterclasses.map((masterclass) => masterclass.time_start);
    const earliestStartDate = findEarliestDate(startDatesArray);
    date = formatCourseDate(new Date(earliestStartDate));

    const pricesWithCurrency = item.masterclasses.map((mc) => [Number(mc.price), mc.currency]);
    [price, currency] = findLowestCoursePrice(pricesWithCurrency);
  }

  if (item.masterclasses.length > 0) {
    return (
      <div className={cls.mainContainer}>
        <div className={cls.imgWrapper}>
          <img className={cls.img} src={item.image} alt={item.title} />
          <div className={cls.start}>
            <span>Ближайший старт</span>
            <span>{date}</span>
          </div>
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
                  {`${item.duration} ${getNoun(item.duration, 'час', 'часа', 'часов')}`}
                </p>
              </div>
              <div className={cls.priceContainer}>
                <span className={cls.priceIcon} />
                <p className={cls.info}>{`${price} ${currencyFullName[currency]}`}</p>
              </div>
            </div>
            <p className={cls.description}>
              {item.short_description}
            </p>
          </div>
          <div className={cls.btnGroup}>
            <div className={cls.buttonWrapper}>
              <Button
                className="fill"
                onClick={() => handleEnroll(item)}
                fill
              >
                Записаться
              </Button>
            </div>
            <div className={cls.buttonWrapper}>
              <Button
                className="outline"
                onClick={handleGetMore}
                fill
              >
                { (width <= '1200' && width >= '400') ? 'Подробнее' : 'Узнать подробнее' }
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
