// eslint-disable-next-line import/no-unresolved
import React, { useEffect, useState } from 'react';
import cls from './StudentReviews.module.scss';
import SliderCardBottom from '../SliderCardBottom/SliderCardBottom';
import imageSrc from '../../images/students-review_image-card.png';

const sliderDataBottom = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
];

export const StudentReviews = () => {
  const [sliderIndex, setSliderIndex] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSliderIndex(sliderIndex + 1);
    }, 5000);

    const lastSliderIndex = sliderDataBottom.length;
    if (sliderIndex < 0) {
      setSliderIndex(lastSliderIndex);
    }
    if (sliderIndex > lastSliderIndex) {
      setSliderIndex(1);
    }

    return () => clearTimeout(timer);
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
          {sliderDataBottom.map((slide) => {
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
                  image={imageSrc}
                  title="Волшебно!"
                  text="Мы обожаем такие трепетные моменты и с радостью поможем
                  устроить вам самый яркий праздник в нашей мастерской. Мы
                  обожаем такие трепетные моменты и с радостью поможем устроить
                  вам самый яркий праздник в нашей мастерской. Мы обожаем такие
                  трепетные моменты и с радостью поможем устроить вам самый
                  яркий праздник в нашей мастерской. Мы обожаем такие трепетные
                  моменты и с радостью поможем устроить вам самый яркий праздник
                  в нашей мастерской."
                  name="Валерия М."
                  date="24.01.2023"
                />
              </li>
            );
          })}
        </ul>
        <ul className={cls.slider__dots}>
          {sliderDataBottom.map((slide) => (
            <li key={slide.id}>
              <button
                onClick={() => setSliderIndex(slide.id)}
                aria-label="сладер пагинация"
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
