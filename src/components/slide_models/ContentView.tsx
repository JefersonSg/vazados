import Image from 'next/image';
import React from 'react';
import styles from './ContentView.module.css';

const ContentView = ({ name }: { name: string }) => {
  return (
    <div className={styles.ContentView}>
      <p className={styles.nome}>{name}</p>
      <Image
        alt="imagem da modelo"
        src={'/modelos/cibelly/cibelly.png'}
        width={270}
        height={188}
      />
    </div>
  );
};

export default ContentView;
