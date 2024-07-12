'use client';

import React from 'react';
import styles from './Payment.module.css';
import { FontSecond } from '@/fonts/font';

const Payment = () => {
  const [time, setTime] = React.useState(60 * 25);

  React.useEffect(() => {
    setTimeout(() => {
      setTime((time) => time - 1);
    }, 1000);
  }, [time]);

  return (
    <section className={styles.content_payment}>
      <h2>
        Nuds e vídeos vazados <br />
        exclusivos no grupo vip
      </h2>
      <span className={`${styles.time_count} ${FontSecond.className}`}>
        {Math.floor(time / 60)}:
        {(time % 60).toString().length > 1 ? time % 60 : `0${time % 60}`}
      </span>
      <p className={styles.oferta}>Oferta relampago</p>
      <div className={styles.price}>
        <p>
          de R$ <span>89,90</span>
        </p>
        <p>
          por R$ <span>29,90</span>
        </p>
      </div>
      <button className={'btn_buy'}>EU QUERO</button>
    </section>
  );
};

export default Payment;
