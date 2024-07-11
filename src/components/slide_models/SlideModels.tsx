'use client';

import React from 'react';
import ItemSlide from './ItemSlide';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './SlideModels.module.css';

import 'swiper/css';
import 'swiper/css/navigation';
import './slide.css';
import ContentView from './ContentView';
import { Navigation } from 'swiper/modules';

const SlideModels = () => {
  return (
    <>
      <div className={styles.container_slide}>
        <Swiper
          className={`swiperModels ${styles.swiper_models}`}
          slidesPerView={2.6}
          spaceBetween={16}
          navigation={true}
          modules={[Navigation]}
        >
          <SwiperSlide>
            <ItemSlide
              nome="Juliana Bonde"
              image="/modelos/slide/martina.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ItemSlide
              nome="Catarina Paolino"
              image="/modelos/slide/martina.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ItemSlide
              nome="Martina Oliveira"
              image="/modelos/slide/martina.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ItemSlide
              nome="Martina Oliveira"
              image="/modelos/slide/martina.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ItemSlide
              nome="Martina Oliveira"
              image="/modelos/slide/martina.png"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <ContentView name="Cibelly Ferreira" />
    </>
  );
};

export default SlideModels;
