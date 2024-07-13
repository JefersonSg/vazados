import Image from 'next/image';
import React from 'react';
import styles from './ContentView.module.css';
import VideoPreview from './VideoPreview';
import PopUpPayment from '../payment/PopUpPayment';
import { type Models } from './SlideModels';

const ContentView = ({
  name,
  imageProfile,
  images,
  video,
  setIndexActive,
  setVideo,
  models,
  indexActive
}: {
  name: string;
  imageProfile: string;
  images: string[];
  video: string;
  setIndexActive: React.Dispatch<React.SetStateAction<number>>;
  setVideo: React.Dispatch<React.SetStateAction<string>>;
  models: Models[];
  indexActive: number;
}) => {
  const [ativoPopUp, setAtivoPopUp] = React.useState(false);
  const [ativoVideo, setAtivoVideo] = React.useState('');
  return (
    <>
      <div className={styles.ContentView}>
        <p className={styles.nome}>{name}</p>
        <div className={styles.midias}>
          {images.map((image, index) => {
            return (
              <div
                className={`${styles.image_model} ${index === 0 ? styles.liberado : ''}`}
                key={image}
                onClick={() => {
                  if (index === 0) {
                    setVideo(video);
                    setAtivoVideo('a');
                  } else {
                    setAtivoPopUp(true);
                  }
                }}
              >
                <Image
                  alt="imagem da modelo"
                  src={image}
                  width={110}
                  height={160}
                />
              </div>
            );
          })}
        </div>
      </div>
      {video && ativoVideo && (
        <VideoPreview
          videoPlay={video}
          time={Math.floor(Math.random() * Math.random() * 10)}
          name={name}
          setVideoPlay={setAtivoVideo}
          imageProfile={imageProfile}
        />
      )}
      <PopUpPayment ativo={ativoPopUp} />
      {ativoPopUp && (
        <>
          <div
            className={styles.background}
            onClick={() => {
              setAtivoPopUp(false);
            }}
          ></div>

          <span
            className={styles.fechar}
            onClick={() => {
              setAtivoPopUp(false);
            }}
          >
            X
          </span>
        </>
      )}
      {ativoVideo && (
        <span
          className={styles.proximo}
          onClick={() => {
            if (models.length > indexActive) {
              setIndexActive((indexActive) => indexActive + 1);
            } else {
              setAtivoVideo('');
            }
          }}
        >
          {`>`}
        </span>
      )}
    </>
  );
};

export default ContentView;
