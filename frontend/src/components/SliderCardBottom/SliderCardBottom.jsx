import styles from './SliderCardBottom.module.scss';

const SliderCardBottom = ({
  text, title, image, name, date,
}) => {
  return (
    <div className={styles.slider}>
      <img src={image} alt="слайдер" />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.paragraph}>
        {' '}
        {text}
      </p>
      <div className={styles.signature}>
        <p className={styles.name}>{name}</p>
        <span className={styles.date}>{date}</span>
      </div>
    </div>
  );
};

export default SliderCardBottom;
