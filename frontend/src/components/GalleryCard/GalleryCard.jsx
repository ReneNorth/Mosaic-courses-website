import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import cls from './GalleryCard.module.scss';
import { GalleryCardSlider } from '../GalleryCardSlider/GalleryCardSlider';
import { GalleryCardInfo } from '../GalleryCardInfo/GalleryCardInfo';
import { ENDPOINTS } from '../../utils/consts/constants';
import { useResize } from '../../hooks/useResize';

export const GalleryCard = () => {
  const { width } = useResize();

  const [isLiked, setIsLiked] = useState(false);

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
