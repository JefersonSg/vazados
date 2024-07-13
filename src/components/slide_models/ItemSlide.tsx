import Image from 'next/image';
import React from 'react';
import styles from './ItemSlide.module.css';

const ItemSlide = ({
  image,
  nome,
  ativo,
  nomeAtivo
}: {
  image: string;
  nome: string;
  ativo: string;
  nomeAtivo: string;
}) => {
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    if (nome === nomeAtivo) {
      const timeout = setTimeout(() => {
        setActive(true);
      }, 1500);

      return () => {
        clearTimeout(timeout);
      };
    } else {
      setActive(false);
    }
  }, [nome, nomeAtivo]);
  return (
    <div className={`${styles.perfil_model} ${active ? styles.ativo : ''}`}>
      <div className={styles.image_div}>
        <span className={styles.borda}></span>
        <Image alt="imagem da modelo" src={image} width={80} height={80} />
      </div>
      <p className={styles.nome}>{nome}</p>
      {ativo === nome && (
        <>
          <span className={styles.circle1}></span>
          <span className={styles.circle2}></span>
          <span className={styles.circle3}></span>
          <span className={styles.circle4}></span>
        </>
      )}
    </div>
  );
};

export default ItemSlide;
