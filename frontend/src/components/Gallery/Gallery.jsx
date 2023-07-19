/* eslint-disable react/jsx-boolean-value */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { useSpringCarousel } from 'react-spring-carousel';
import imageOne from '../../images/gallery_slider_1.png';
import imageTwo from '../../images/gallery_slider_2.png';
import imageFour from '../../images/gallery_slider_4.png';
import imageFive from '../../images/gallery_slider_5.png';
import imageSix from '../../images/gallery_slider_6.png';
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
];

export const Gallery = () => {
  const [sliderIndex, setSliderIndex] = useState(1);

  const {
    carouselFragment,
    slideToPrevItem,
    slideToNextItem,
  } = useSpringCarousel({
    itemsPerSlide: 5,
    withLoop: true,
    items: data.map((image, index) => ({
      id: image.id,
      renderItem: (
        <div className={cls.item} key={image.id}>
          <img
            className={cls.image}
            src={image.link}
            alt="картинка слайдер"
          />
        </div>
      ),
    })),
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setSliderIndex(sliderIndex + 1);
      slideToNextItem();
    }, 10000);

    const lastSliderIndex = data.length - 1;
    if (sliderIndex < 0) {
      setSliderIndex(lastSliderIndex);
    }
    if (sliderIndex > lastSliderIndex) {
      setSliderIndex(0);
    }

    return () => clearTimeout(timer);
  }, [slideToNextItem, sliderIndex]);

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
        {carouselFragment}
        <ul className={cls.slider__dots}>
          <li>
            <button
              className={cls.slider__dots_prev}
              type="button"
              onClick={() => {
                slideToPrevItem();
                setSliderIndex(sliderIndex - 1);
              }}
              aria-label="prev slide"
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
              className={cls.slider__dots_next}
              type="button"
              onClick={() => {
                slideToNextItem();
                setSliderIndex(sliderIndex + 1);
              }}
              aria-label="next slide"
            />
          </li>
        </ul>
      </div>

    </section>
  );
};
