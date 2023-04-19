/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide from '../../images/slide1.png';
import cls from './Slider.module.scss';

export const Slider = () => {
  return (
    <section className={cls.section}>
      <div className={cls.slider}>
        <Swiper
          className={cls.swiper}
          spaceBetween={40}
          slidesPerView="auto"
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
        >
          <SwiperSlide className={cls.slide}>
            <img className={cls.image} src={slide} alt="Слайд" />
          </SwiperSlide>
          <SwiperSlide className={cls.slide}>
            <img className={cls.image} src={slide} alt="Слайд" />
          </SwiperSlide>
        </Swiper>
        <div className={cls.counter}>
          <p>01/05</p>
        </div>
      </div>
    </section>
  );
};
