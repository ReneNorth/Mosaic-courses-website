import React from 'react';
import styles from './SliderCardTop.module.scss';
import { Button } from '../Button/Button';
import { classNames } from '../../helpers/classNames';

const SliderCardTop = ({
  button,
  text,
  image,
  title,
}) => {
  return (
    <div className={styles.sliderCard}>
      <img src={image} alt="Мозайка" />
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.paragraph}>
          {text}
        </p>
      </div>
      <Button
        className="fill"
        aria-label="Заказать"
        type="button"
      >
        {button}
      </Button>
    </div>
  );
};

export default SliderCardTop;
