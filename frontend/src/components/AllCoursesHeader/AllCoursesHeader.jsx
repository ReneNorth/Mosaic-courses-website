import cls from './AllCoursesHeader.module.scss';
import indicator from '../../images/indicator.svg';

import allCoursesImg from '../../images/AllCoursesPromo.png';

export const AllCoursesHeader = () => {
  return (
    <section className={cls.section}>
      <div className={cls.block}>
        <div className={cls.textContainer}>
          <h1 className={cls.title}>
            Курсы мозаики в студии&nbsp;
            <span className={cls.span}>&quot;Под горой&quot;</span>
          </h1>
          <p className={cls.description}>
            Единственная в Казахстане студия римской мозаики.
          </p>
          <p className={cls.description}>
            Научим создавать античные шедевры на мастер-классах и украсим ваш
            дом оригинальными арт-объектами.
          </p>
        </div>
        <div className={cls.wrapper}>
          <img className={cls.image} src={allCoursesImg} alt="Промо картинка" />
          <div className={cls.radius} />
          <div className={cls.rectangle} />
        </div>
      </div>
      <div className={cls.route}>
        <ul className={cls.routeItems}>
          <li>
            <a href="!#" className={cls.routeItem}>
              Главная
            </a>
          </li>
          <li>
            <a href="!#" className={cls.routeItem}>
              <img
                className={cls.indicator}
                src={indicator}
                alt="Промо картинка"
              />
            </a>
          </li>
          <li>
            <a href="!#" className={cls.routeItemGreen}>
              {' '}
              Курсы
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
