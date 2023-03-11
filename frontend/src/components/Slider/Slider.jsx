// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
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
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className={cls.slide}>
            <img className={cls.image} src={slide} alt="Слайд" />
          </SwiperSlide>
          <SwiperSlide className={cls.slide}>
            <img className={cls.image} src={slide} alt="Слайд" />
          </SwiperSlide>
          {/* <SwiperSlide className={cls.slide}>
            <img className={cls.image} src={slide} alt="Слайд" />
          </SwiperSlide> */}
          {/* <SwiperSlide className={cls.slide}>
            <img className={cls.image} src={slide} alt="Слайд" />
          </SwiperSlide> */}
        </Swiper>
      </div>
    </section>
  );
};
