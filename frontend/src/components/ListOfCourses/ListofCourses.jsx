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
        <span className={cls.instruction}>
          Изучи наши курсы или загляни на главную
        </span>
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
