'use client';

import React from 'react';
import styles from './Card.module.css';
import 'swiper/css';
import './slide.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const CardModel = () => {
  const [muted, setMuted] = React.useState(true);

  const videoRef = React.useRef(null);

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

  const handleMuteToggle = () => {
    if (muted) {
      setMuted(false);
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
        className={styles.VideoPlayer}
        autoPlay
        loop={true}
        muted={muted}
      >
        <source src={'/modelos/video.mp4'} type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
      <button onClick={handleMuteToggle}>
        {muted ? 'Ativar Som' : 'Silenciar'}
      </button>

      <p className={styles.texto}>
        Veja tudo que foi vazado🔞 <br /> das famosinhas de redes sociais🔥
      </p>
    </div>
  );
};

export default CardModel;
