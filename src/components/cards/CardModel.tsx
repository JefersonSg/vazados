'use client';

import React from 'react';
import styles from './Card.module.css';
import VideoPlayer from '../compartilhados/VideoPlayer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import './slide.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const CardModel = () => {
  return (
    <div className={styles.card_container}>
      <p className={styles.nome}>Catarina Paolino</p>
      <Swiper
        className="mySwiper"
        slidesPerView={1}
        centeredSlides={true}
        navigation={true}
        pagination={false}
        modules={[Pagination, Navigation]}
        lazyPreloadPrevNext={1}
      >
        <SwiperSlide>
          <VideoPlayer
            autoplay={true}
            controls={false}
            height={384}
            width={300}
            loop={false}
            muted={false}
            src="/modelos/video.mp4"
          />
        </SwiperSlide>
      </Swiper>
      <p className={styles.texto}>
        Veja tudo que foi vazado🔞 <br /> das famosinhas de redes sociais🔥
      </p>
    </div>
  );
};

export default CardModel;
