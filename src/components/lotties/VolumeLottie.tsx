'use client';

import React from 'react';
import Lottie from 'react-lottie';
import styles from './volume.module.css';

import volumeAnimation from '@/../public/lottie/volume.json';

const VolumeLottie = () => {
  const animation = volumeAnimation;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation
  };
  return (
    <div className={styles.volume_content}>
      <Lottie options={defaultOptions} width={150} height={150} />
    </div>
  );
};

export default VolumeLottie;
