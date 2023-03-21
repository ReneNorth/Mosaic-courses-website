/* eslint-disable react/jsx-boolean-value */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-unresolved */
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import imageOne from '../../images/gallery_slider_1.png';
import imageTwo from '../../images/gallery_slider_2.png';
import imageFour from '../../images/gallery_slider_4.png';
import imageFive from '../../images/gallery_slider_5.png';
import imageSix from '../../images/gallery_slider_6.png';
import imagetru from '../../images/gallery_slider_7.png';
import imagehru from '../../images/gallery_slider_8.png';
// import cls from './Gallery.module.scss';
import './Gallery.scss';

const data = [
  {
    link: imageOne,
    id: '45fdgkper543',
  },
  {
    link: imageTwo,
    id: '55еfdgkpesdr543',
  },
  {
    link: imageFour,
    id: '98fdgkpesdr53',
  },
  {
    link: imageFive,
    id: '54f2esdr53',
  },
  {
    link: imageSix,
    id: '8f2esdr5763',
  },
  {
    link: imageSix,
    id: '1f2esdr5763',
  },
  {
    link: imagetru,
    id: '2f52esdr5763',
  },
  {
    link: imagehru,
    id: '3f2es3dr5763',
  },
];

// export const Gallery = () => {
//   return (
//     <section className={cls.section}>
//       <div className={cls.slider}>
//         <Swiper
//           loop
//           centeredSlides
//           slidesPerView={5}
//           spaceBetween={40}
//           pagination={{
//             clickable: true,
//           }}
//           navigation={true}
//           modules={[Pagination, Navigation]}
//           className={cls.swipper}
//         >
//           {data.map((item, index) => {
//             return (
//               <SwiperSlide
//                 key={item}
//                 virtualIndex={index}
//                 className={cls.slideContainer}
//               >
//                 <img className={cls.image} src={item} alt="слайд" />
//               </SwiperSlide>
//             );
//           })}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

export const Gallery = () => {
  return (
    <section className="section-gallery">
      <div>
        <Swiper
          loop
          centeredSlides
          slidesPerView={5}
          spaceBetween={40}
          pagination={{
            clickable: true,
          }}
          navigation
          modules={[Pagination, Navigation]}
          className="swipper-gallery"
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide
                // eslint-disable-next-line react/no-array-index-key
                key={item.id}
                virtualIndex={index}
                className="slideContainer-gallery"
              >
                <img className="" src={item.link} alt="слайд" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
