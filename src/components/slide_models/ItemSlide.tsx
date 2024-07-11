import Image from 'next/image';
import React from 'react';
import styles from './ItemSlide.module.css';

const ItemSlide = ({ image, nome }: { image: string; nome: string }) => {
  return (
    <div className={styles.perfil_model}>
      <div className={styles.image_div}>
        <span className={styles.borda}></span>
        <Image alt="imagem da modelo" src={image} width={80} height={80} />
      </div>
      <p>{nome}</p>
    </div>
  );
};

export default ItemSlide;
