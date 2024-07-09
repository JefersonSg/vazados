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
  const [isVisible, setIsVisible] = React.useState(false);

  const targetRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          setIsVisible(true);
          console.log(isVisible);
        }
      },
      { threshold: 0.5 } // Define o threshold para 50%
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef?.current);
      }
    };
  }, [isVisible]);

  return (
    <div
      className={`${styles.image_background} ${isVisible ? styles.ativo : ''}`}
      ref={targetRef}
    >
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
        height={200}
        src={imgFrente}
        sizes="100vw"
      />
    </div>
  );
};

export default ImageBackground;
