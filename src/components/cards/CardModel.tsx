'use client';

import React from 'react';
import styles from './Card.module.css';
import 'swiper/css';
import './slide.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import VolumeLottie from '../lotties/VolumeLottie';
import Link from 'next/link';
const CardModel = () => {
  const [muted, setMuted] = React.useState(true);
  const [newPlay, setNewPlay] = React.useState(false);

  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const video: any = videoRef.current;
    if (muted && video !== null) {
      video.muted = true;
      video.play().catch((error: unknown) => {
        console.error('Erro ao tentar reproduzir o vídeo:', error);
      });
    } else {
      video.muted = false;
      video.play().catch((error: unknown) => {
        console.error('Erro ao tentar reproduzir o vídeo com som:', error);
      });
    }
  }, [muted]);

  React.useEffect(() => {
    const handleContextMenu = (event: { preventDefault: () => void }) => {
      event.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);

    // Limpar o evento quando o componente é desmontado
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  const handleVideoEnd = () => {
    console.log('O vídeo terminou');
    setNewPlay(true);
  };

  React.useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.addEventListener('ended', handleVideoEnd);

      // Cleanup function to remove the event listener when the component unmounts
      return () => {
        videoElement.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, []);

  const handleMuteToggle = () => {
    if (muted) {
      setMuted(false);
      if (videoRef?.current?.currentTime) {
        videoRef.current.currentTime = 0;
        void videoRef.current.play();
      }
    } else {
      setMuted(true);
    }
  };
  return (
    <div className={styles.card_container}>
      <p className={styles.nome}>Vídeos exclusivos</p>

      <video
        ref={videoRef}
        id="myVideo"
        className={`${styles.VideoPlayer}`}
        autoPlay
        loop={false}
        muted={muted}
      >
        <source src={'/modelos/video.mp4'} type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
      {newPlay && <span className={styles.finish}></span>}
      {muted && (
        <button className={styles.button_volume} onClick={handleMuteToggle}>
          <p>Seu Video já começou</p>
          <VolumeLottie />
          <p>Clique para ouvir</p>
        </button>
      )}

      {newPlay && (
        <button
          className={`${styles.button_volume} ${styles.new_play}`}
          onClick={() => {
            setNewPlay(false);
            setMuted(false);
            if (videoRef.current) {
              void videoRef.current.play();
            }
          }}
        >
          <span className={styles.play}></span>
        </button>
      )}

      <p className={styles.texto}>
        Veja tudo que foi vazado🔞 <br /> das famosinhas de redes sociais🔥
      </p>
      <Link
        href={'https://pay.kiwify.com.br/GvGn2Pd'}
        target="_blank"
        className={'btn_buy'}
      >
        EU QUERO
      </Link>
    </div>
  );
};

export default CardModel;
