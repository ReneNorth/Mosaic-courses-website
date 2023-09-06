import { Link } from 'react-router-dom';
import cls from './ListOfCourses.module.scss';
import { OtherCourses } from '../OtherCourses/OtherCourses';
import courseImgThree from '../../images/course-img-3.png';

export const ListOfCourses = () => {
  return (
    <div className={cls.main}>
      <div className={cls.mainSection}>
        <h3 className={cls.notFoundText}>
          {' '}
          Страница не найдена или её не существует
        </h3>
        <span className={cls.instruction}>
          Изучи наши курсы или загляни на главную
        </span>
        <Link to="/">
          <div className={cls.buttonContainer}>
            <button className={cls.btn} type="button">
              Вернуться на главную
            </button>
          </div>
        </Link>
        {/* </div>
        <div className={cls.groupOFCouses}>
          <OtherCourses />
          <div className={cls.contanerCourseOne}>
            <div className={cls.wrapper}>
              <img
                className={cls.courseImage}
                src={courseImgThree}
                alt="Промо картинка"
              />
            </div>
            <div className={cls.courseBox}>
              <h4 className={cls.courseName}>
                Недельный Курс по мозаике из стекла
              </h4>
              <div className={cls.wrapperAtribut}>
                <div className={cls.priceContainer}>
                  <div className={cls.timeIcon} />

                  <p>3 часа</p>
                </div>
                <div className={cls.priceContainer}>
                  <div className={cls.rubleIcon} />

                  <p>4000 рублей</p>
                </div>
              </div>

              <p className={cls.description}>
                Мы делаем рисование доступным с помощью пошаговой программы и
                вовлечённых преподавателей.
              </p>
              <button className={cls.btnWhite} type="button">
                Узнать подробнее
              </button>
            </div>
          </div> */}
      </div>
    </div>
  );
};
