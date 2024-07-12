'use client';

import React from 'react';
import styles from './Payment.module.css';
import { FontSecond } from '@/fonts/font';
import Image from 'next/image';

const Payment = () => {
  const [time, setTime] = React.useState(60 * 10);

  React.useEffect(() => {
    if (time > 0) {
      setTimeout(() => {
        setTime((time) => time - 1);
      }, 1000);
    }
  }, [time]);

  return (
    <section className={styles.content_payment}>
      <span className={styles.span_top}>Grupo Vip</span>

      <div className={styles.price}>
        <p>
          de <span>R$89,90</span> por apenas
        </p>
        <p>
          <span>R$ 29</span>
        </p>
      </div>
      <ul className={styles.lista_items}>
        <li className={styles.items}>
          <Image alt="check" src={'/check.svg'} width={21} height={21} />
          <p>Grupo VIP</p>
        </li>
        <li className={styles.items}>
          <Image alt="check" src={'/check.svg'} width={21} height={21} />
          <p>Conteúdos atualizados diariamente</p>
        </li>
        <li className={styles.items}>
          <Image alt="check" src={'/check.svg'} width={21} height={21} />
          <p>Sigilo total</p>
        </li>
        <li className={styles.items}>
          <Image alt="check" src={'/check.svg'} width={21} height={21} />
          <p>Acesso vitalício</p>
        </li>
      </ul>
      <span className={`${styles.time_count} ${FontSecond.className}`}>
        {Math.floor(time / 60)}:
        {(time % 60).toString().length > 1 ? time % 60 : `0${time % 60}`}
      </span>

      <button className={'btn_buy'}>EU QUERO</button>
    </section>
  );
};

export default Payment;
