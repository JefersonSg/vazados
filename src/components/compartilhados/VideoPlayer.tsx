import React from 'react';

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
