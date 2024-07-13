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

export interface Models {
  nome: string;
  image: string;
  video: string;
  images: string[];
}

const SlideModels = () => {
  const [models] = React.useState<Models[]>([
    {
      nome: 'Juliana Bonde',
      image: '/modelos/slide/juliana.png',
      video: 'https://vazados.s3.sa-east-1.amazonaws.com/juliana.mp4',
      images: [
        '/modelos/juliana/images/image1.png',
        '/modelos/juliana/images/image2.png',
        '/modelos/juliana/images/image3.png'
      ]
    },
    {
      nome: 'Cararina Paolino',
      image: '/modelos/slide/catarina.png',
      video: 'https://vazados.s3.sa-east-1.amazonaws.com/catarina.mp4',
      images: [
        '/modelos/catarina/images/image1.png',
        '/modelos/catarina/images/image2.png',
        '/modelos/catarina/images/image3.png'
      ]
    },
    {
      nome: 'Martina Oliveira',
      image: '/modelos/slide/martina.png',
      video: 'https://vazados.s3.sa-east-1.amazonaws.com/martina.mp4',
      images: [
        '/modelos/martina/images/image1.png',
        '/modelos/martina/images/image2.png',
        '/modelos/martina/images/image3.png'
      ]
    },
    {
      nome: 'Mel Maia',
      image: '/modelos/slide/melmaia.png',
      video: 'https://vazados.s3.sa-east-1.amazonaws.com/melmaia.mp4',
      images: [
        '/modelos/mel maia/images/image1.png',
        '/modelos/mel maia/images/image2.png',
        '/modelos/mel maia/images/image3.png'
      ]
    },
    {
      nome: 'Cibelly Ferreira',
      image: '/modelos/slide/cibelly.png',
      video: 'https://vazados.s3.sa-east-1.amazonaws.com/cibelly.mp4',
      images: [
        '/modelos/cibelly/images/image1.png',
        '/modelos/cibelly/images/image2.png',
        '/modelos/cibelly/images/image3.png'
      ]
    }
  ]);

  const [ativo, setAtivo] = React.useState('');
  const [name, setName] = React.useState(models?.[0]?.nome ?? '');
  const [imageProfile, setImageProfile] = React.useState(
    models?.[0]?.image ?? ''
  );
  const [images, setImages] = React.useState<string[]>(
    models?.[0]?.images ?? ['']
  );
  const [indexActive, setIndexActive] = React.useState<number>(0);
  const [video, setVideo] = React.useState<string>(
    'https://vazados.s3.sa-east-1.amazonaws.com/juliana.mp4'
  );

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setAtivo('');
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, [ativo]);

  React.useEffect(() => {
    if (indexActive > 0 && models.length > indexActive) {
      setName(models[indexActive].nome);
      setImageProfile(models[indexActive].image);
      setImages(models[indexActive].images);
      setVideo(models[indexActive].video);

      console.log(models[indexActive].video);
    }
  }, [indexActive, models]);

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
          {models.map((model, index) => {
            return (
              <SwiperSlide key={model.nome}>
                <div
                  onClick={() => {
                    setAtivo(model.nome);
                    setName(model.nome);
                    setImageProfile(model.image);
                    setImages(model.images);
                    setVideo(model.video);
                    setIndexActive(index);
                  }}
                >
                  <ItemSlide
                    ativo={ativo}
                    nome={model.nome}
                    image={model.image}
                    nomeAtivo={name}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <ContentView
        indexActive={indexActive}
        models={models}
        setVideo={setVideo}
        setIndexActive={setIndexActive}
        name={name}
        imageProfile={imageProfile}
        images={images}
        video={video}
      />
    </>
  );
};

export default SlideModels;
