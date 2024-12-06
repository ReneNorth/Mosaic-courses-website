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
  function handleLike() {
    setIsLiked(!isLiked);
  }

  return (
    <>
      {width < 765 ? (
        <div className={cls.navWrapper}>
          <NavLink to={ENDPOINTS.gallery} className={cls.link}>
            Назад
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
        {/* Слайдер с превью сделать от 1300пикселей */}
        <GalleryCardSlider />
        <div>
          <GalleryCardInfo />
        </div>
      </div>
    </>
  );
};
