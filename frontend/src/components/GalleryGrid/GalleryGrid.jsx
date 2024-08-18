import React, { useState, useEffect } from 'react';
import Lightbox from 'yet-another-react-lightbox';

import { RowsPhotoAlbum, MasonryPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/rows.css';
import 'react-photo-album/masonry.css';

import 'yet-another-react-lightbox/styles.css';

// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import image1 from '../../images/image1.JPG';
import image2 from '../../images/image2.JPG';
import image3 from '../../images/image3.JPG';
import image4 from '../../images/image4.JPG';
import image5 from '../../images/image5.PNG';
import Dali from '../../images/image6.JPG';
import GlassLandscape from '../../images/image7.JPG';
import image8 from '../../images/image8.JPG';

export function LightboxTest() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open Lightbox
      </button>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          { src: image1 },
          { src: image2 },
          { src: image3 },
        ]}
      />
    </>
  );
}

const photos = [
  { src: image1, width: 1000, height: 600 },
  { src: image2, width: 1200, height: 900 },
  { src: image3, width: 1600, height: 900 },
  { src: image4, width: 800, height: 600 },
  { src: image5, width: 1000, height: 1000 },
  { src: Dali, width: 900, height: 1600 },
  { src: GlassLandscape, width: 1600, height: 900 },
  { src: image8, width: 1600, height: 900 },
];

// const resizedPhotos = resizePhotos(photos);

// const photos = [
//   { src: image1 },
//   { src: image2 },
//   { src: image3 },
//   { src: image4 },
//   { src: image5 },
//   { src: Dali },
//   { src: GlassLandscape },
//   { src: image8 },
// ];

export function GalleryTestRows() {
  return <RowsPhotoAlbum photos={photos} />;
}

export function GallryTestMasonry() {
  const [index, setIndex] = useState(-1);
  return (
    <>
      <MasonryPhotoAlbum
        photos={photos}
        columns={3}
        spacing={10}
        targetRowHeight={300}
      />
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  );
}

// TODO

// https://github.com/igordanchenko/react-photo-album/blob/main/examples/customization/src/App.tsx

// Добавить открытие картинки в галерее
// export default function App() {
//   // photos array
//   const [photos, setPhotos] = useState<SelectablePhoto[]>(() =>
//     allPhotos.map((photo) => ({
//       ...photo,
//       href: photo.src,
//       label: 'Open image in a lightbox',
//     })),
//   );
