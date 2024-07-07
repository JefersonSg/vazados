'use client';

import React from 'react';
import styles from './ImageBackground.module.css';
import Image from 'next/image';

const ImageBackground = ({
  imgFrente,
  imgFundo
}: {
  imgFrente: string;
  imgFundo: string;
}) => {
  return (
    <div className={styles.image_background}>
      <span className={styles.brilho}></span>
      <Image
        className={styles.fundo}
        alt="imagem de fundo"
        width={160}
        height={90}
        src={imgFundo}
      />
      <Image
        className={styles.frente}
        alt="imagem de frente"
        width={160}
        height={207}
        src={imgFrente}
      />
    </div>
  );
};

export default ImageBackground;
