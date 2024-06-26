import cls from './CoursePageInfo.module.scss';
import decorationElement from '../../images/decorationElement.png';

export const CoursePageInfo = () => {
  return (
    <div className={cls.section}>
      <div className={cls.block}>
        <div className={cls.headerTitle}>
          <h1 className={cls.headerName}>Курс по римской мозайке</h1>
          <p className={cls.courseName}>Однодневный</p>
          <div className={cls.text}>
            <p>Подходит для начинающих.</p>
            <p className={cls.paragraph}>
              Все материалы входят в стоимость. Опыт создания мозаики не
              требуется.
            </p>
          </div>
          <img
            className={cls.decorationElement}
            src={decorationElement}
            alt="Промо картинка"
          />
        </div>
      </div>
    </div>
  );
};
