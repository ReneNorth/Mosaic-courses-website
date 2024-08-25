// eslint-disable-next-line import/no-unresolved
import React, { useEffect, useState } from 'react';
import cls from './CreateWithLove.module.scss';
import SliderCardBottom from '../SliderCardBottom/SliderCardBottom';
import teacherSlider1 from '../../images/teacherSlider1.png';
import teacherSlider2 from '../../images/teacherSlider2.png';
import teacherDefault from '../../images/teacherDefault.png';

const sliderDataBottom = [
  {
    id: 1,
    text: 'Мы стремимся не просто обучать мозаике, а передавать знания, которые'
    + 'ученики смогут использовать и дальше. Для нас важно сохранить и передать'
    + 'традиции этого уникального ремесла.',
    title: 'Не только мастерство, но и любовь к делу',
    image: teacherSlider1,
    name: 'Дарья, основательница студии',
  },
  {
    id: 2,
    text: 'Наша студия обучает искусству мозаики, сохранившемуся с античных времен.'
    + 'Вы получите навык, который позволит вам создавать уникальные произведени'
    + 'искусства и продолжать развивать его самостоятельно.',
    title: 'Вы сможете заниматься самостоятельно',
    image: teacherSlider2,
    name: 'Дарья, основательница студии',
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
          Учитываем
          <br />
          <span>индивидуальность</span>
        </h2>
        {/* eslint-disable max-len */}
        <p className={cls.description}>
          В студии Tessera мы уделяем особое внимание индивидуальному подходу к каждому ученику.
          Важно учитывать уровень вашего опыта, чтобы предложить задачи, соответствующие вашим навыкам.
          <br />
          <br />
          Мы также ориентируемся на ваши желания: хотите ли вы просто попробовать технику или создать серьёзный проект. Процесс обучения строится вокруг ваших целей, будь то небольшая работа или крупная композиция. Мы подстраиваем программу под ваш темп, чтобы каждый этап обучения приносил вам удовольствие.
          <br />
          <br />
          Опытные мастера помогут адаптировать технику к вашим потребностям и реализовать ваш уникальный проект.
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
                  image={slide.image}
                  title={slide.title}
                  text={slide.text}
                  name={slide.name}
                  date={slide.date}
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
          /
          {sliderDataBottom.length.toString().padStart(2, '0')}
        </div>
      </div>

    </section>
  );
};
