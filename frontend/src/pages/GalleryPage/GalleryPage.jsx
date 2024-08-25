import * as React from 'react';
import cls from './GalleryPage.module.scss';
import { MasonryWorksGallery } from '../../components/GalleryGrid/GalleryGrid.jsx';
import { GalleryPromo } from '../../components/GalleryPromo/GalleryPromo';

export const GalleryPage = () => {
  return (
    <>
      <GalleryPromo />
      <div className={cls.galleryWrapper}>
        <MasonryWorksGallery />
      </div>
    </>
  );
};
