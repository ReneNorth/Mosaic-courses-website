import { useEffect, useState } from 'react';
import { useSpringCarousel } from 'react-spring-carousel';
import cls from './Atmosphere.module.scss';
import atmosphereLeftUp from '../../images/atmosphereLeftUp.png';
import atmosphereLeftMiddle from '../../images/atmosphereLeftMiddle.png';
import atmosphereRightDown from '../../images/atmosphereRightDown.png';
import atmosphereLeftDown from '../../images/atmosphereLeftDown.png';
import atmosphereRightUp from '../../images/atmosphereRightUp.png';

const data = [
  {
    link: atmosphereLeftUp,
    id: 1,
  },
  {
    link: atmosphereLeftMiddle,
    id: 2,
  },
  {
    link: atmosphereRightDown,
    id: 3,
  },
  {
    link: atmosphereLeftDown,
    id: 4,
  },
  {
    link: atmosphereRightUp,
    id: 5,
  },
];

export const Atmosphere = () => {
  const [sliderIndex, setSliderIndex] = useState(1);

  const { carouselFragment, slideToPrevItem, slideToNextItem } = useSpringCarousel({
    itemsPerSlide: 1,
    withLoop: true,
    items: data.map((image, index) => ({
      id: image.id,
      renderItem: (
        <div className={cls.item} key={image.id}>
          <img className={cls.image} src={image.link} alt="атмосфера" />
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
    <section className={cls.AtmosphereBox}>
      <h1 className={cls.title}>
        Атмосфера&nbsp;
        <span className={cls.span}>в студии</span>
      </h1>
      <div className={cls.sliderContainer}>
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
                aria-label="слайдер пагинация"
                type="button"
                className={`${cls.slider__dot} ${
                  sliderIndex === index ? `${cls.slider__dot_active}` : ''
                }`}
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
      <div className={cls.container}>
        <img className={cls.child1} src={atmosphereLeftUp} alt="атмосфера" />
        <img className={cls.child2} src={atmosphereRightUp} alt="атмосфера" />
        <img className={cls.child4} src={atmosphereLeftMiddle} alt="атмосфера" />
        <img className={cls.child5} src={atmosphereLeftDown} alt="атмосфера" />
        <img className={cls.child3} src={atmosphereRightDown} alt="атмосфера" />
      </div>
    </section>
  );
};
