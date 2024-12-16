import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import cls from './GalleryCardSlider.module.scss';

const images = [
  {
    id: 1,
    src: 'https://via.placeholder.com/600x400/FF5733/FFFFFF?text=Image+1',
  },
  {
    id: 2,
    src: 'https://via.placeholder.com/600x400/C70039/FFFFFF?text=Image+2',
  },
  {
    id: 3,
    src: 'https://via.placeholder.com/600x400/900C3F/FFFFFF?text=Image+3',
  },
  {
    id: 4,
    src: 'https://via.placeholder.com/600x400/581845/FFFFFF?text=Image+4',
  },
];

export const GalleryCardSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length,
    );
  };

  return (
    <div className={cls.wrapper}>
      <div className={cls.container}>
        <div className={cls.sliderWrapper}>
          <Slider ref={sliderRef} {...settings}>
            {images.map((image) => (
              <div key={image.id} className={cls.imageContainer}>
                <img
                  src={image.src}
                  alt={`Slide ${image.id}`}
                  className={cls.image}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className={cls.thumbnails}>
        {images.map((image, index) => (
          <div
            key={image.id}
            className={cls.thumbnail}
            onClick={() => sliderRef.current.slickGoTo(index)}
          >
            <img
              src={image.src}
              alt={`Thumbnail ${image.id}`}
              className={cls.thumbnailImage}
            />
          </div>
        ))}
      </div>

      <div className={cls.navWrapper}>
        <button className={cls.navButtonLeft} type="button" aria-label="Слайд назад" onClick={prevSlide} />
        <div className={cls.sliderDots}>
          {images.map((image, index) => (
            <span
              key={image.id}
              className={`${cls.sliderDot} ${currentSlide === index ? cls.sliderDotActive : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
        <button className={cls.navButtonRight} type="button" aria-label="Слайд вперед" onClick={nextSlide} />
      </div>

    </div>
  );
};
