import React from 'react';
import { Link } from "react-router-dom";

import styles from '../../styles/Products.module.css';
import demoImg from '../../img/demo-img/demo_img-vertical.webp';

const Products = ({ title, style = {}, products = [], amount }) => {
  const list = products.filter((_, i) => i < amount);

  return (
    <section className={styles.products} style={style}>
      {title && <h2>{title}</h2>}

      <div className={styles.list}>
        {list.map(({ id, images, title, category: { name: cat }, price }) => {
          const productImage = images?.[0] ? images[0] : demoImg;

          return (
            <Link to={`/products/${id}`} key={id} className={styles.product}>
              <div className={styles.image} style={{ backgroundImage: `url(${productImage})` }}></div>
              <div className={styles.wrapper}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.cat}>{cat}</p>
                <div className={styles.info}>
                  <div className={styles.prices}>
                    <p className={styles.price}>{price * 10 - 1} грн</p>
                    <p className={styles.oldPrice}>{Math.floor(price * 15 - 1)} грн</p>
                  </div>
                </div>
                <p className={styles.purchases}>
                  {Math.floor(Math.random() * 100 + 7)} вже купили
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
