import { Link } from 'react-router-dom';
import cls from './ListOfCourses.module.scss';
import { ENDPOINTS } from '../../utils/consts/constants';

export const ListOfCourses = () => {
  return (
    <div className={cls.main}>
      <div className={cls.mainSection}>
        <h3 className={cls.notFoundText}>
          Страница не найдена или её не существует
        </h3>
        <Link to={ENDPOINTS.courses}>
          <h3 className={cls.instruction}>
            Посмотри, какие мастерклассы мы проводим
          </h3>
        </Link>
        <Link to={ENDPOINTS.main}>
          <div className={cls.buttonContainer}>
            <button className={cls.btn} type="button">
              Вернуться на главную
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};
