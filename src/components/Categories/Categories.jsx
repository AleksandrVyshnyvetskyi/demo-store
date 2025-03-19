import React from "react";
import styles from '../../styles/Categories.module.css';
import { Link } from "react-router-dom";
import demoImg from '../../img/demo-img/demo_img-horizont.webp';

const Categories = ({title, products = [], amount}) => {
  const list = products.filter((_, i) => i < amount)

  return(
      <section className={styles.section}>
        <h2>{title}</h2>
        <div className={styles.list}>
          {list.map(({id, name, image}) => (
            <Link to={`/categories/${id}`} key={id} className={styles.item} >
              <div className={styles.image} style={{ backgroundImage: image ? `url(${image})` : `url(${demoImg})` }}></div>
              <div><h3 className={styles.title}>{name || "Популярне"}</h3></div>
            </Link>
          ))}
        </div>
      </section>
  )
}

export default Categories