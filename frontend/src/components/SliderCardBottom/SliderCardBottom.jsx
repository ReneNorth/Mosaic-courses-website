import styles from './SliderCardBottom.module.scss';
import imageSrc from '../../images/students-review_image-card.png';

const SliderCardBottom = () => {
  return (
    <div className={styles.slider}>
      <img src={imageSrc} alt="слайдер" />
      <div className={styles.slider__right}>
        <h3>Волшебно!</h3>
        <p>
          {' '}
          Мы обожаем такие трепетные моменты и с радостью поможем
          устроить вам самый яркий праздник в нашей мастерской. Мы
          обожаем такие трепетные моменты и с радостью поможем устроить
          вам самый яркий праздник в нашей мастерской. Мы обожаем такие
          трепетные моменты и с радостью поможем устроить вам самый
          яркий праздник в нашей мастерской. Мы обожаем такие трепетные
          моменты и с радостью поможем устроить вам самый яркий праздник
          в нашей мастерской.
        </p>
        <div>
          <p>Валерия М.</p>
          <span>24.01.2023</span>
        </div>
      </div>
    </div>
  );
};

export default SliderCardBottom;
