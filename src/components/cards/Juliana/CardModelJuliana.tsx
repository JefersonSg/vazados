'use client';

import React from 'react';
import styles from './Card.module.css';
import VideoPlayer from '../../compartilhados/VideoPlayer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import '../slide.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ImageBackground from '../ImageBackground';
const CardModelJuliana = () => {
  return (
    <div className={styles.card_container}>
      <p className={styles.nome}>Juliana Bonde</p>
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
          <ImageBackground
            imgFundo="/modelos/juliana/capa/fundo.png"
            imgFrente="/modelos/juliana/capa/frente.png"
          />
        </SwiperSlide>

        <SwiperSlide>
          <VideoPlayer
            src="/modelos/catarina/catarina_video.mp4"
            autoplay={true}
            controls={true}
            height={200}
            width={160}
            loop={false}
            muted={false}
          />
        </SwiperSlide>
      </Swiper>
      <p className={styles.texto}>
        Olha como elas são safadas 😈 <br /> fora do Instagram
      </p>
    </div>
  );
};

export default CardModelJuliana;
