import React from 'react';

import styles from '../../styles/Home.module.css';
import iPhone16e from '../../img/poster-img/';

const Poster4 = () => {
  return (
    <>
      <h3 className={styles.title}>
        Знижки до 20%
      </h3>
      <div className={styles.product}>
        <div className={styles.text}>
          <div className={styles.subtitle}>Новинка 2025 року !</div>
          <h2 className={styles.head}>iPhone 16 та iPhone 16е</h2>
          <button className={styles.button}>Придбати</button>
        </div>
        <div className={styles.image}>
          <img src={iPhone16e} className={styles.img} alt="пропозиція тижня" />
        </div>
      </div>
    </>
  );
};

export default Poster4;
