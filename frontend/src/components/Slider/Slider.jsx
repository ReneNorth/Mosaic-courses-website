import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import styles from './Slider.module.scss';
import sliderImg from '../../images/top_slider.jpg';
import SliderCardTop from '../SliderCardTop/SliderCardTop';
import { api } from '../../utils/api';

const Slider = () => {
  const [sliders, setSliders] = useState([]);
  const [sliderIndex, setSliderIndex] = useState(1);

  const navigate = useNavigate();

  const fetchSliders = async () => {
    const data = await api.getMainCarouselSliders();
    setSliders(data);
  };

  useEffect(() => {
    fetchSliders();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSliderIndex(sliderIndex + 1);
    }, 5000);

    const lastSliderIndex = sliders.length;
    if (sliderIndex < 0) {
      setSliderIndex(lastSliderIndex);
    }
    if (sliderIndex > lastSliderIndex) {
      setSliderIndex(1);
    }

    return () => clearTimeout(timer);
  }, [sliderIndex, sliders.length]);

  return (
    <section className={styles.slider}>
      <ul className={styles.slider__top}>
        {sliders.map((slide, index) => {
          let position = 'next';
          if (slide.order === sliderIndex) {
            position = 'active';
          }
          return (
            <li
              key={slide.order}
              className={`${styles.slider__item} ${sliderIndex === slide.order
                ? `${styles.active}` : `${styles[position]}`}`}
            >
              <Link to={slide.link}>
                <SliderCardTop {...slide} />
              </Link>
            </li>
          );
        })}
      </ul>

      <ul className={styles.slider__dots}>
        {sliders.map((slide) => (
          <li key={slide.order}>
            <button
              onClick={() => setSliderIndex(slide.order)}
              aria-label="сладер пагинация"
              type="button"
              className={`${styles.slider__dot} ${sliderIndex === slide.order ? `${styles.slider__dot_active}` : ''}`}
            />
          </li>
        ))}
      </ul>

      <div className={styles.slider__counter}>
        0
        {sliderIndex}
        /0
        {sliders.length}
      </div>
    </section>
  );
};

export default Slider;
