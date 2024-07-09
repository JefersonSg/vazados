'use client';

import React from 'react';
import ItemSlide from './ItemSlide';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './SlideModels.module.css';

import 'swiper/css';
import ContentView from './ContentView';

const SlideModels = () => {
  return (
    <>
      <Swiper
        className={styles.swiper_models}
        slidesPerView={3.5}
        width={320}
        spaceBetween={16}
      >
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

      <ContentView name="Cibelly Ferreira" />
    </>
  );
};

export default SlideModels;
