import Image from 'next/image';
import React from 'react';
import styles from './ContentView.module.css';
import VideoPreview from './VideoPreview';
import PopUpPayment from '../payment/PopUpPayment';

const ContentView = ({
  name,
  story,
  setStory,
  imageProfile,
  images,
  video
}: {
  name: string;
  story: string;
  setStory: React.Dispatch<React.SetStateAction<string>>;
  imageProfile: string;
  images: string[];
  video: string;
}) => {
  const [ativoPopUp, setAtivoPopUp] = React.useState(false);
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
                    setStory(video);
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
      {story && (
        <VideoPreview
          videoPlay={story}
          name={name}
          setVideoPlay={setStory}
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
    </>
  );
};

export default ContentView;
