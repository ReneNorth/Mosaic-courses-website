import React from 'react';
import styles from './SliderCardTop.module.scss';

const SliderCardTop = ({ button, link, text }) => {
  return (
    <div className={styles.sliderCard}>
      <img src={link} alt="Мозайка" />
      <div>
        <h2>Курс по Римской мозаике однодневный</h2>
        <p>
          {text}
        </p>
        <button aria-label="Заказать" type="button">{button}</button>
      </div>
    </div>
  );
};

export default SliderCardTop;
