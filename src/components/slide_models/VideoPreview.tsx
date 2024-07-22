import React from 'react';

import styles from './VideoPreview.module.css';
import VideoPlayer from '../compartilhados/VideoPlayer';
import Image from 'next/image';

const VideoPreview = ({
  name,
  videoPlay,
  setVideoPlay,
  imageProfile,
  time
}: {
  name: string;
  videoPlay: string;
  setVideoPlay: React.Dispatch<React.SetStateAction<string>>;
  imageProfile: string;
  time: number;
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
          <span className={styles.horas}>{time > 0 ? time : 1} h</span>
        </div>
        <VideoPlayer
          controls={false}
          height={100}
          width={100}
          loop={false}
          muted={false}
          src={videoPlay}
        />
      </div>
      <span
        className={styles.fechar}
        onClick={() => {
          setVideoPlay('');
        }}
      >
        <Image alt="fechar" src={'/fechar.svg'} width={20} height={20} />
      </span>
      <div className={styles.background}></div>
    </>
  );
};

export default VideoPreview;
