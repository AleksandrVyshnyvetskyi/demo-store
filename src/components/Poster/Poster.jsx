import React from 'react';

import styles from '../../styles/Home.module.css';
import BG from '../../img/computer.png';

const Poster = () => {
  return (
    <section className={styles.home}>
      <h3 className={styles.title}>
        Знижки до 20%
      </h3>
      <div className={styles.product}>
        <div className={styles.text}>
          <div className={styles.subtitle}>Краща пропозиція 2025 року !</div>
          <h2 className={styles.head}>LENNON r2d2 with NVIDIA 4090 TI</h2>
          <button className={styles.button}>Придбати</button>
        </div>
        <div className={styles.image}>
          <img src={BG} alt="пропозиція тижня" />
        </div>
      </div>
    </section>
  );
};

export default Poster;
