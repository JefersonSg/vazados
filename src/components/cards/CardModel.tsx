import React from 'react';
import styles from './Card.module.css';
import VideoPlayer from '../compartilhados/VideoPlayer';

const CardModel = () => {
  return (
    <div className={styles.card_container}>
      <p className={styles.nome}>Catarina Paolino</p>
      <VideoPlayer
        src="/modelos/catarina/catarina_video.mp4"
        autoplay={true}
        controls={true}
        height={400}
        width={400}
        loop={false}
        muted={false}
      />
      <p className={styles.texto}>
        Veja tudo que foi vazado🔞 <br /> das famosinhas de redes sociais🔥{' '}
      </p>
    </div>
  );
};

export default CardModel;
