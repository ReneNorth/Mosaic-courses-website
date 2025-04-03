import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import cls from './GalleryCard.module.scss';
import imageOne from '../../images/gallery_slider_1.png';
import imageTwo from '../../images/gallery_slider_2.png';
import imageThree from '../../images/gallery_slider_4.png';
import imageFour from '../../images/gallery_slider_5.png';
import { GalleryCardSlider } from '../GalleryCardSlider/GalleryCardSlider';
import { GalleryCardInfo } from '../GalleryCardInfo/GalleryCardInfo';
import { ENDPOINTS } from '../../utils/consts/constants';
import { useResize } from '../../hooks/useResize';

export const GalleryCard = () => {
  const { width } = useResize();

  const [isLiked, setIsLiked] = useState(false);

  const images = [
    {
      link: imageOne,
      id: 1,
    },
    {
      link: imageTwo,
      id: 2,
    },
    {
      link: imageThree,
      id: 3,
    },
    {
      link: imageFour,
      id: 4,
    },
  ];

  function handleLike() {
    setIsLiked(!isLiked);
  }

  return (
    <>
      {width < 765 ? (
        <div className={cls.navWrapper}>
          <NavLink to={ENDPOINTS.gallery} className={cls.navContainer}>
            <div className={cls.backButton} />
            <p className={cls.backText}>Назад</p>
          </NavLink>
          <div className={cls.buttonContainer}>
            <button
              className={cls.buttonLink}
              type="button"
              aria-label="Поделиться ссылкой"
            />
            <button
              className={`${cls.buttonLike} ${
                isLiked ? cls.buttonLikeActive : ''
              }`}
              onClick={handleLike}
              type="button"
              aria-label="Добавить в избранное"
            />
          </div>
        </div>
      ) : (
        <div className={cls.navigation}>
          <NavLink to={ENDPOINTS.gallery} className={cls.link}>
            Галерея
          </NavLink>
          <p className={cls.link}>&gt;</p>
          <p className={cls.text}>Название</p>
        </div>
      )}
      <div className={cls.flexContainer}>
        <GalleryCardSlider images={images} />
        <div>
          <GalleryCardInfo images={images} />
        </div>
      </div>
    </>
  );
};
