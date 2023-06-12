import styles from './SliderCardBottom.module.scss';

const SliderCardBottom = ({
  text, title, image, name, date,
}) => {
  return (
    <div className={styles.slider}>
      <img src={image} alt="слайдер" />
      <div className={styles.slider__right}>
        <h3>{title}</h3>
        <p>
          {' '}
          {text}
        </p>
        <div>
          <p>{name}</p>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default SliderCardBottom;
