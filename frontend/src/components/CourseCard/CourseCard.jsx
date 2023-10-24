/* eslint-disable object-curly-newline */
/* eslint-disable camelcase */
import { Button } from '../Button/Button';
import { formatCourseDate } from '../../helpers/formatDate';
import cls from './CourseCard.module.scss';
import { parseDate } from '../../helpers/findEarliestDate';
import { findLowestCoursePrice } from '../../helpers/findLowestCoursePrice';

export const CourseCard = ({
  masterclasses, image, duration, full_description, type = 'default', handleEnroll, handleGetMore,
  // eslint-disable-next-line consistent-return
}) => {
  const {
    currency, id, price, title, time_start, time_end,
  } = masterclasses[0];

  return (
    <li className={cls.courseCard}>
      <div className={cls.imgWrapper}>
        <img className={cls.img} src={image} alt={masterclasses.title} />
        <div className={cls.start}>
          <span>Ближайший старт</span>
          <span>{parseDate([time_start, time_end])}</span>
        </div>
        <p className={cls.duration}>{`${duration} часа`}</p>

      </div>
      <div className={cls.contentWrapper}>
        <h3 className={cls.contentTitle}>
          {title}
        </h3>
        <div className={cls.atributContainer}>
          <div className={cls.wrapperAtribut}>
            <div className={cls.priceContainer}>
              <span className={cls.timeIcon} />
              <p className={cls.info}>
                {`${duration} часа`}
              </p>
            </div>
            <div className={cls.priceContainer}>
              <span className={cls.priceIcon} />
              <p className={cls.info}>{`${price} ${currency}`}</p>
            </div>
          </div>
          <p className={cls.description}>
            {full_description}
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
    </li>
  );
};
// };
