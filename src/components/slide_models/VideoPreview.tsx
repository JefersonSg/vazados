import React from 'react';

import styles from './VideoPreview.module.css';
import VideoPlayer from '../compartilhados/VideoPlayer';
import Image from 'next/image';

const VideoPreview = ({
  name,
  videoPlay,
  setVideoPlay,
  imageProfile
}: {
  name: string;
  videoPlay: string;
  setVideoPlay: React.Dispatch<React.SetStateAction<string>>;
  imageProfile: string;
}) => {
  return (
    <>
      <div className={styles.reprodutor_video}>
        <div className={styles.profile}>
          <Image
            alt="foto do perfil"
            src={imageProfile}
            width={48}
            height={48}
          />
          <p className={styles.nome}>{name}</p>
        </div>
        <VideoPlayer
          autoplay={true}
          controls={false}
          height={100}
          width={100}
          loop={false}
          muted={true}
          src={videoPlay}
        />
      </div>
      <span
        className={styles.fechar}
        onClick={() => {
          setVideoPlay('');
        }}
      >
        X
      </span>
      <div className={styles.backgground}></div>
    </>
  );
};

export default VideoPreview;
