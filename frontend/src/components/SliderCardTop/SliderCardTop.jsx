import React from 'react';
import styles from './SliderCardTop.module.scss';
import { Button } from '../Button/Button';

const SliderCardTop = ({ button, link, text }) => {
  return (
    <div className={styles.sliderCard}>
      <img src={link} alt="Мозайка" />
      <div>
        <h2>Курс по Римской мозаике однодневный</h2>
        <p>
          {text}
        </p>
        <Button className="fill" aria-label="Заказать" type="button">{button}</Button>
      </div>
    </div>
  );
};

export default SliderCardTop;
