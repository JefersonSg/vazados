import React from 'react';
import styles from './video.module.css';

const VideoPlayer = ({
  src,
  width,
  height,
  controls,
  loop,
  muted
}: {
  src: string;
  width: number;
  height: number;
  controls: boolean;
  loop: boolean;
  muted: boolean;
}) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      void videoRef.current.play();
    }
  }, [src]);

  React.useEffect(() => {});
  return (
    <video
      ref={videoRef}
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
