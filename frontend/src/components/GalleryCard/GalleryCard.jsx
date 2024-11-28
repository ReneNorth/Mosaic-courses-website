import React, { useEffect, useState } from 'react';
import cls from './GalleryCard.module.scss';
import { GalleryCardSlider } from '../GalleryCardSlider/GalleryCardSlider';
import { GalleryCardInfo } from '../GalleryCardInfo/GalleryCardInfo';

export const GalleryCard = () => {
  return (
    // здесь делаем флекс, сверху нужный функционал
    <div className={cls.flexContainer}>
      <GalleryCardSlider />
      <div>
        <GalleryCardInfo />
      </div>
    </div>
  );
};
