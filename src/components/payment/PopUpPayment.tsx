import React from 'react';
import Payment from './Payment';
import styles from './pop_up_payment.module.css';

const PopUpPayment = ({ ativo }: { ativo: boolean }) => {
  return (
    <div className={`${styles.pop_up_payment} ${ativo ? styles.ativo : ''}`}>
      <Payment />
    </div>
  );
};

export default PopUpPayment;
