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

interface Models {
  nome: string;
  image: string;
  video: string;
}

const SlideModels = () => {
  const models: Models[] = [
    {
      nome: 'Juliana Bonde',
      image: '/modelos/slide/juliana.png',
      video: 'https://vazados.s3.sa-east-1.amazonaws.com/juliana.mp4'
    },
    {
      nome: 'Cararina Paolino',
      image: '/modelos/slide/catarina.png',
      video: 'https://vazados.s3.sa-east-1.amazonaws.com/catarina.mp4'
    },
    {
      nome: 'Martina Oliveira',
      image: '/modelos/slide/martina.png',
      video: 'https://vazados.s3.sa-east-1.amazonaws.com/martina.mp4'
    },
    {
      nome: 'Mel Maia',
      image: '/modelos/slide/melmaia.png',
      video: 'https://vazados.s3.sa-east-1.amazonaws.com/melmaia.mp4'
    },
    {
      nome: 'Cibelly Ferreira',
      image: '/modelos/slide/cibelly.png',
      video: 'https://vazados.s3.sa-east-1.amazonaws.com/cibelly.mp4'
    }
  ];

  const [ativo, setAtivo] = React.useState('');
  const [name, setName] = React.useState(models?.[0]?.nome ?? '');
  const [imageProfile, setImageProfile] = React.useState('');
  const [story, setStory] = React.useState('');

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setAtivo('');
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, [ativo]);

  return (
    <>
      <div className={styles.container_slide}>
        <Swiper
          className={`swiperModels ${styles.swiper_models}`}
          slidesPerView={'auto'}
          spaceBetween={16}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            0: {
              slidesPerView: 2.5
            },
            480: {
              slidesPerView: 3.5
            },
            760: {
              slidesPerView: 4.5
            },
            860: {
              slidesPerView: 5.5
            }
          }}
        >
          {models.map((model) => {
            return (
              <SwiperSlide key={model.nome}>
                <div
                  onClick={() => {
                    setAtivo(model.nome);
                    setName(model.nome);
                    setStory(model.video);
                    setImageProfile(model.image);
                  }}
                >
                  <ItemSlide
                    ativo={ativo}
                    nome={model.nome}
                    image={model.image}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <ContentView
        name={name}
        story={story}
        setStory={setStory}
        imageProfile={imageProfile}
      />
    </>
  );
};

export default SlideModels;
