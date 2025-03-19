import React from 'react';

import styles from '../../styles/Home.module.css';
import SamsungS25Ultra from '../../img/poster-img/Samsung_S25_ULTRA.webp';

const Poster2 = () => {
  return (
    <>
      <h3 className={styles.title}>
        Новинка
      </h3>
      <div className={styles.product}>
        <div className={styles.text}>
          <div className={styles.subtitle}>Новинка 2025 року !</div>
          <h2 className={styles.head}>Samsung Galaxy S25 Ultra</h2>
          <button className={styles.button}>Придбати</button>
        </div>
        <div className={styles.image}>
          <img src={SamsungS25Ultra} className={styles.samsung} alt="пропозиція тижня" />
        </div>
      </div>
    </>
  );
};

export default Poster2;
2