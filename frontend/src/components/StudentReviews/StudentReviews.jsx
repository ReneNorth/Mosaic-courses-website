// eslint-disable-next-line import/no-unresolved
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cls from './StudentReviews.module.scss';
import SliderCardBottom from '../SliderCardBottom/SliderCardBottom';
import { mockSliderDataBottom } from '../../utils/consts/mockData';
import { getAllReviews } from '../../services/slices/reviewsSlice.js';

export const StudentReviews = () => {
  const { allReviews } = useSelector((state) => state.reviews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllReviews());
  }, [dispatch]);

  const [sliderIndex, setSliderIndex] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSliderIndex(sliderIndex + 1);
    }, 5000);

    const lastSliderIndex = allReviews.length;
    if (sliderIndex < 0) {
      setSliderIndex(lastSliderIndex);
    }
    if (sliderIndex > lastSliderIndex) {
      setSliderIndex(1);
    }

    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sliderIndex]);

  return (
    <section className={cls.section}>
      <div className={cls.titleContent}>
        <h2 className={cls.title}>
          Отзывы наших
          <span> учеников</span>
        </h2>
        <p className={cls.description}>
          Опыт наших учеников - самое важное для нас,
          это наша главная мотивация и ценный источник
          обратной связи. Посмотрите отзывы других учеников
          и решите для себя, стоит ли прийти на наши курсы и мастер-классы.
        </p>
      </div>

      <div className={cls.slider}>
        <ul className={cls.slider__top}>
          {allReviews.map((slide) => {
            let position = 'next';
            if (slide.id === sliderIndex) {
              position = 'active';
            }
            return (
              <li
                key={slide.id}
                className={`${cls.slider__item} ${sliderIndex === slide.id
                  ? `${cls.active}` : `${cls[position]}`}`}
              >
                <SliderCardBottom
                  image={slide.photo}
                  title={slide.title}
                  text={slide.review}
                  name={slide.student_name}
                  date={slide.pub_date}
                />
              </li>
            );
          })}
        </ul>
        <ul className={cls.slider__dots}>
          {allReviews.map((slide) => (
            <li key={slide.id}>
              <button
                onClick={() => setSliderIndex(slide.id)}
                aria-label="slider-pagination"
                type="button"
                className={`${cls.slider__dot} ${sliderIndex === slide.id ? `${cls.slider__dot_active}` : ''}`}
              />
            </li>
          ))}
        </ul>

        <div className={cls.slider__counter}>
          0
          {sliderIndex}
          /05
        </div>
      </div>

    </section>
  );
};
