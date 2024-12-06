import React, { useRef } from 'react';
import Slider from 'react-slick';
import cls from './GalleryCardSlider.module.scss';
import { CustomImage } from './CustomImage';

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
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // eslint-disable-next-line react/no-unstable-nested-components
    customPaging: (i) => (
      <div style={{
        display: 'none',
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'flex-start',
        // width: '100px',
        // marginLeft: '12px',
      }}
      >
        {CustomImage(images[i].src)}
      </div>
    ),
  };

  const sliderRef = useRef(null);

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
    </div>
  );
};
