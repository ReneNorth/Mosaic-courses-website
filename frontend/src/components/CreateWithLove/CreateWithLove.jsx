// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
import React, { useEffect, useState } from 'react';
import cls from './CreateWithLove.module.scss';
import SliderCardBottom from '../SliderCardBottom/SliderCardBottom';

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

export const CreateWithLove = () => {
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
          Учим творить с
          <span> любовью</span>
        </h2>
        {/* eslint-disable max-len */}
        <p className={cls.description}>
          Арт-школа — мастерская в центре Ростова-на-Дону.
          Мы проводим мастер-классы по живописи и гончарному делу для деток и взрослых.
          Мы делаем рисование доступным с помощью пошаговой программы и вовлечённых преподавателей. Вы как ученик обязательно прочувствуете нашу дружескую и лёгкую атмосферу.
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
                <SliderCardBottom />
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
