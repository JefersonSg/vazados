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
const CardModelCatarina = () => {
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
          <ImageBackground
            imgFundo="/modelos/catarina/teste/fundo.png"
            imgFrente="/modelos/catarina/teste/frente.png"
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
        Veja tudo que foi vazado🔞 <br /> das famosinhas de redes sociais🔥{' '}
      </p>
    </div>
  );
};

export default CardModelCatarina;
