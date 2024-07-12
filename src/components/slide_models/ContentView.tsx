import Image from 'next/image';
import React from 'react';
import styles from './ContentView.module.css';
import VideoPreview from './VideoPreview';

const ContentView = ({
  name,
  story,
  setStory,
  imageProfile
}: {
  name: string;
  story: string;
  setStory: React.Dispatch<React.SetStateAction<string>>;
  imageProfile: string;
}) => {
  return (
    <>
      <div className={styles.ContentView}>
        <p className={styles.nome}>{name}</p>
        <div className={styles.midias}>
          <div className={styles.image_model}>
            <Image
              alt="imagem da modelo"
              src={'/modelos/cibelly/cibelly.png'}
              width={110}
              height={160}
            />
          </div>
          <div className={styles.image_model}>
            <Image
              alt="imagem da modelo"
              src={'/modelos/cibelly/cibelly.png'}
              width={110}
              height={160}
            />
          </div>

          <div className={styles.image_model}>
            <Image
              alt="imagem da modelo"
              src={'/modelos/cibelly/cibelly.png'}
              width={110}
              height={160}
            />
          </div>
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
    </>
  );
};

export default ContentView;
