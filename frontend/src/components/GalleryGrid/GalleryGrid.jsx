import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import { MasonryPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/rows.css';
import 'react-photo-album/masonry.css';
import 'yet-another-react-lightbox/styles.css';

import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import { galleryImages } from '../../utils/consts/galleryImages';

export function MasonryWorksGallery() {
  const [index, setIndex] = useState(-1);
  return (
    <div className="masonry-container">
      <MasonryPhotoAlbum
        photos={galleryImages}
        columns={3}
        spacing={20}
        padding={10}
        targetRowHeight={300}
        onClick={({ index }) => setIndex(index)}
      />
      <Lightbox
        slides={galleryImages}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  );
}
