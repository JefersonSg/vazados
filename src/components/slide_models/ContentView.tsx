import Image from 'next/image';
import React from 'react';
import styles from './ContentView.module.css';

const ContentView = ({ name }: { name: string }) => {
  return (
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
  );
};

export default ContentView;
