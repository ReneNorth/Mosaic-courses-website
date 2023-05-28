import imageOne from '../../images/choice-one.png';
import imageThree from '../../images/choice-three.png';
import imageTwo from '../../images/choice-two.png';
import cls from './ChoiseCourse.module.scss';

export const ChoiseCourse = () => {
  return (
    <section className={cls.section}>
      <ul className={cls.list}>
        <li className={cls.item}>
          <img className={cls.img} src={imageOne} alt="карточка курса" />
          <div className={cls.contentWrapper}>
            <h3 className={cls.contentTitle}>
              Вводный мастер-класс по римской мозаике
            </h3>
            <div className={cls.atributContainer}>
              <div className={cls.wrapperAtribut}>
                <div className={cls.priceContainer}>
                  <span className={cls.timeIcon} />
                  <p>4 часа</p>
                </div>
                <div className={cls.priceContainer}>
                  <span className={cls.rubleIcon} />
                  <p>15 000 тенге</p>
                </div>
              </div>
              <p className={cls.description}>
                На мастер классе вы создадите подставку под горячее или небольшой
                интерьерный арт-объект с любым понравившимся вам рисунком.
                Этот вводный курс - лучшая возможность научиться работе с камнем
                и создать что-то своими руками.
              </p>
            </div>
            <div className={cls.btnGroup}>
              <button className={cls.btnBlack} type="button">
                Записаться
              </button>
              <button className={cls.btnWhite} type="button">
                Узнать подробнее
              </button>
            </div>
          </div>
        </li>
        <li className={cls.item}>
          <img className={cls.img} src={imageTwo} alt="карточка курса" />
          <div className={cls.contentWrapper}>
            <h3 className={cls.contentTitle}>
              Курс античной римской мозаики
            </h3>
            <div className={cls.atributContainer}>
              <div className={cls.wrapperAtribut}>
                <div className={cls.priceContainer}>
                  <span className={cls.timeIcon} />
                  <p>6 занятий по 5 часов</p>
                </div>
                <div className={cls.priceContainer}>
                  <span className={cls.rubleIcon} />
                  <p>70 000 тенге</p>
                </div>
              </div>
              <p className={cls.description}>
                Это расширенный курс по созданию мозаики в формате картины 30х30 см.
                На этом курсе вы создадите копию существующего шедевра
                римской мозаики, а также познакомитесь с историей мозаики
                с древних времен по текущее время.
              </p>
            </div>
            <div className={cls.btnGroup}>
              <button className={cls.btnBlack} type="button">
                Записаться
              </button>
              <button className={cls.btnWhite} type="button">
                Узнать подробнее
              </button>
            </div>
          </div>
        </li>
        <li className={cls.item}>
          <img className={cls.img} src={imageThree} alt="карточка курса" />
          <div className={cls.contentWrapper}>
            <h3 className={cls.contentTitle}>
              Курс портретной мозаики
            </h3>
            <div className={cls.atributContainer}>
              <div className={cls.wrapperAtribut}>
                <div className={cls.priceContainer}>
                  <span className={cls.timeIcon} />
                  <p>8 занятий по 5 часов</p>
                </div>
                <div className={cls.priceContainer}>
                  <span className={cls.rubleIcon} />
                  <p>100 000 тенге</p>
                </div>
              </div>
              <p className={cls.description}>
                Курс для уже продолжающих мозаичистов. На занятиях разберем
                анатомию человеческого лица и расскажем о правильном подходе к
                выкладке тессер на портретных работах. За время курса вы
                создадите портрет 30 см на 40 см себя, своего близкого
                или просто известного человека.
              </p>
            </div>
            <div className={cls.btnGroup}>
              <button className={cls.btnBlack} type="button">
                Записаться
              </button>
              <button className={cls.btnWhite} type="button">
                Узнать подробнее
              </button>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};
