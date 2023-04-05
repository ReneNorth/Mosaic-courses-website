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
              Курс по Римской мозаике однодневный
            </h3>
            <div className={cls.atributContainer}>
              <div className={cls.wrapperAtribut}>
                <div className={cls.priceContainer}>
                  <span className={cls.timeIcon} />
                  <p>3 часа</p>
                </div>
                <div className={cls.priceContainer}>
                  <span className={cls.rubleIcon} />
                  <p>4000 рублей</p>
                </div>
              </div>
              <p className={cls.description}>
                Мы проводим мастер-классы по живописи и гончарному делу для
                деток и взрослых. Мы делаем рисование доступным с помощью
                пошаговой программы и вовлечённых преподавателей. Вы как ученик
                обязательно прочувствуете нашу дружескую и лёгкую атмосферу.
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
              Курс по Римской мозаике однодневный
            </h3>
            <div className={cls.atributContainer}>
              <div className={cls.wrapperAtribut}>
                <div className={cls.priceContainer}>
                  <span className={cls.timeIcon} />
                  <p>3 часа</p>
                </div>
                <div className={cls.priceContainer}>
                  <span className={cls.rubleIcon} />
                  <p>4000 рублей</p>
                </div>
              </div>
              <p className={cls.description}>
                Мы проводим мастер-классы по живописи и гончарному делу для
                деток и взрослых. Мы делаем рисование доступным с помощью
                пошаговой программы и вовлечённых преподавателей. Вы как ученик
                обязательно прочувствуете нашу дружескую и лёгкую атмосферу.
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
              Курс по Римской мозаике однодневный
            </h3>
            <div className={cls.atributContainer}>
              <div className={cls.wrapperAtribut}>
                <div className={cls.priceContainer}>
                  <span className={cls.timeIcon} />
                  <p>3 часа</p>
                </div>
                <div className={cls.priceContainer}>
                  <span className={cls.rubleIcon} />
                  <p>4000 рублей</p>
                </div>
              </div>
              <p className={cls.description}>
                Мы проводим мастер-классы по живописи и гончарному делу для
                деток и взрослых. Мы делаем рисование доступным с помощью
                пошаговой программы и вовлечённых преподавателей. Вы как ученик
                обязательно прочувствуете нашу дружескую и лёгкую атмосферу.
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
