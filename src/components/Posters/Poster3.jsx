import React from 'react';

import styles from '../../styles/Home.module.css';
import Xiaomi from '../../img/Xiaomi_A55_Pro.webp';

const Poster3 = () => {
  return (
    <>
      <h3 className={styles.title}>
        Знижки до 20%
      </h3>
      <div className={styles.product}>
        <div className={styles.image}>
          <img src={Xiaomi} className={styles.img} alt="пропозиція тижня" />
        </div>
        <div className={styles.text}>
          <div className={styles.subtitle}>Краща пропозиція 2025 року !</div>
          <h2 className={styles.head}>Телевизор Xiaomi QLED TV A Pro 55" 2025</h2>
          <button className={styles.button}>Придбати</button>
        </div>
      </div>
    </>
  );
};

export default Poster3;
