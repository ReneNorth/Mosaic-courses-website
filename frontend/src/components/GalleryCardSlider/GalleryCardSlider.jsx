import React from 'react';
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
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // eslint-disable-next-line react/no-unstable-nested-components
    customPaging: (i) => (
      <div style={{
        display: 'flex',
        width: '510px',
        justifyContent: 'spaceBetween',
        gap: '12px',
        marginRight: '12px',
      }}
      >
        {CustomImage(images[i].src)}
      </div>
    ),
  };

  return (
    <div className={cls.container}>
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} style={{ width: '510px', height: 'auto', borderRadius: '10px' }}>
            <img
              src={image.src}
              alt={`Slide ${image.id}`}
              style={{ width: '510px', height: 'auto', borderRadius: '10px' }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
