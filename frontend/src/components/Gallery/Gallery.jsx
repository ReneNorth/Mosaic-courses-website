/* eslint-disable react/jsx-boolean-value */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import 'swiper/swiper-bundle.min.css';
import imageOne from '../../images/gallery_slider_1.png';
import imageTwo from '../../images/gallery_slider_2.png';
import imageFour from '../../images/gallery_slider_4.png';
import imageFive from '../../images/gallery_slider_5.png';
import imageSix from '../../images/gallery_slider_6.png';
import imagetru from '../../images/gallery_slider_6.png';
import imagehru from '../../images/gallery_slider_6.png';
import cls from './Gallery.module.scss';

export const data = [
  {
    link: imageOne,
    id: 1,
  },
  {
    link: imageTwo,
    id: 2,
  },
  {
    link: imageFour,
    id: 3,
  },
  {
    link: imageFive,
    id: 4,
  },
  {
    link: imageSix,
    id: 5,
  },
  {
    link: imageSix,
    id: 6,
  },
  {
    link: imagetru,
    id: 7,
  },
  {
    link: imagehru,
    id: 8,
  },
];

export const Gallery = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSliderIndex(sliderIndex + 1);
    }, 5000);

    const lastSliderIndex = data.length - 1;
    if (sliderIndex < 0) {
      setSliderIndex(lastSliderIndex);
    }
    if (sliderIndex > lastSliderIndex) {
      setSliderIndex(0);
    }

    return () => clearTimeout(timer);
  }, [sliderIndex]);

  return (
    <section className={cls.sectiongallery}>
      <div className={cls.titlewrapper}>
        <p className={cls.titlewrapper__description}>работы учеников и преподавателей</p>
        <h2 className={cls.titlewrapper__title}>
          Галерея
          <span> вдохновения</span>
        </h2>
      </div>

      <div className={cls.slider}>
        <ul className={cls.slider__top}>
          {data.map((slide, index) => {
            let position;
            const activeIndex = 0;
            if (index === sliderIndex) {
              position = 'active';
            }
            if (index > sliderIndex) {
              position = 'next';
            }
            if (index > sliderIndex + 1) {
              position = 'next2';
            }
            if (index < sliderIndex) {
              position = 'last';
            }
            if (index < sliderIndex - 1) {
              position = 'last2';
            }

            return (
              <li
                key={slide.id}
                className={`${cls.slider__item} ${sliderIndex === index
                  ? `${cls.active}`
                  : `${cls[position]}`} ${sliderIndex === 0 || sliderIndex === 1 ? `${cls.slider__item_start}` : ''}
               ${sliderIndex <= data.length - 1 && sliderIndex >= data.length - 2 ? `${cls.slider__item_end}` : ''}`}
              >
                <img src={slide.link} alt="картинка слайдер" />
              </li>
            );
          })}
        </ul>

        <ul className={cls.slider__dots}>
          <li>
            <button
              onClick={() => setSliderIndex((prev) => prev - 1)}
              type="button"
              aria-label="prev slide"
              className={cls.slider__dots_prev}
            />
          </li>

          {data.map((slide, index) => (
            <li key={slide.id}>
              <button
                onClick={() => setSliderIndex(index)}
                aria-label="сладер пагинация"
                type="button"
                className={`${cls.slider__dot} ${sliderIndex === index ? `${cls.slider__dot_active}` : ''}`}
              />
            </li>
          ))}

          <li>
            <button
              onClick={() => setSliderIndex((prev) => prev + 1)}
              type="button"
              aria-label="next slide"
              className={cls.slider__dots_next}
            />
          </li>
        </ul>
      </div>

    </section>
  );
};
