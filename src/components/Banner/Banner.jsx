import React from "react";

import styles from '../../styles/Home.module.css'
import bannerWomenViolet from '../../img/banner-img/banner-women-violet.webp'
import bannerMenViolet from '../../img/banner-img/banner-man-violet.webp'

const Banner = () => {
    return <section className={styles.banner}>
        <div className={styles.left}>
            <p className={styles.content}>
                Велике відкриття !
                <span>SALE</span>
            </p>
            <p className={styles.dicount}>Знижки до <span>50%</span> на все !</p>
            <button className={styles.more}>Дивитися все</button>
            <img src={bannerWomenViolet} alt="wow women"  className={styles.womanLeft}/>
            <img src={bannerMenViolet} alt="wow man"  className={styles.manLeft}/>
        </div>
        {/* <div className={styles.right}>
            
        </div> */}
    </section>
}

export default Banner