// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import image from '../../images/students-review_image-card.png';
import cls from './StudentReviews.module.scss';

export const StudentReviews = () => {
  return (
    <section className={cls.section}>
      <div className={cls.titleContent}>
        <h2 className={cls.title}>
          Отзывы наших
          <span> учеников</span>
        </h2>
        <p className={cls.description}>
          Арт-школа — мастерская в центре Ростова-на-Дону. Мы проводим
          мастер-классы по живописи и гончарному делу для деток и взрослых. Мы
          делаем рисование доступным с помощью пошаговой программы и вовлечённых
          преподавателей. Вы как ученик обязательно прочувствуете нашу дружескую
          и лёгкую атмосферу.
        </p>
      </div>
      <div className={cls.sliderContainer}>
        <Swiper
          className={cls.swiper}
          // loop
          spaceBetween={40}
          slidesPerView="auto"
        >
          <SwiperSlide className={cls.slide}>
            <div className={cls.cardWrapper}>
              <img className={cls.image} src={image} alt="Слайд" />
              <div className={cls.textWrapper}>
                <h4 className={cls.cardTitle}>Волшебно!</h4>
                <p className={cls.cardDescription}>
                  Мы обожаем такие трепетные моменты и с радостью поможем
                  устроить вам самый яркий праздник в нашей мастерской. Мы
                  обожаем такие трепетные моменты и с радостью поможем устроить
                  вам самый яркий праздник в нашей мастерской. Мы обожаем такие
                  трепетные моменты и с радостью поможем устроить вам самый
                  яркий праздник в нашей мастерской. Мы обожаем такие трепетные
                  моменты и с радостью поможем устроить вам самый яркий праздник
                  в нашей мастерской.
                </p>
                <div className={cls.authorContainer}>
                  <span>Валерия М.</span>
                  <span>24.01.2023</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
