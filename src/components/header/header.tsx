import Image from 'next/image';
import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>VEJA AS FOTOS PROIBIDAS</h1>
      <span className={styles.do}>
        <Image
          alt="Imagem da logo"
          src={'/header/DO.svg'}
          width={200}
          height={40}
        />
      </span>
      <Image
        className={styles.logo}
        alt="Imagem da logo"
        src={'/header/logo.png'}
        width={200}
        height={40}
      />
    </header>
  );
};

export default Header;
