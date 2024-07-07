import React from 'react';
import styles from './video.module.css';

const VideoPlayer = ({
  src,
  width,
  height,
  controls,
  autoplay,
  loop,
  muted
}: {
  src: string;
  width: number;
  height: number;
  controls: boolean;
  autoplay: boolean;
  loop: boolean;
  muted: boolean;
}) => {
  return (
    <video
      className={styles.VideoPlayer}
      width={width}
      height={height}
      controls={controls}
      autoPlay={true}
      loop={loop}
      muted={muted}
    >
      <source src={src} type="video/mp4" />
      Seu navegador não suporta a tag de vídeo.
    </video>
  );
};

export default VideoPlayer;
