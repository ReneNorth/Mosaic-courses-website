import React from 'react';
import styles from './SliderCardTop.module.scss';
import { Button } from '../Button/Button';

const SliderCardTop = ({
  button,
  text,
  image,
  title,
}) => {
  const words = title.split(' ');
  const firstWord = words[0];
  const remainingWords = words.slice(1).join(' ');

  return (
    <div className={styles.sliderCard}>
      <img src={image} alt="Мозайка" />
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          {firstWord}
          <span className={styles.span}>{` ${remainingWords}`}</span>
        </h2>
        <p className={styles.paragraph}>
          {text}
        </p>
        <Button
          className="fill"
          aria-label="Заказать"
          type="button"
        >
          {button}
        </Button>
      </div>
    </div>
  );
};

export default SliderCardTop;
