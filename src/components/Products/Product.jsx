import { useState } from "react";
import styles from '../../styles/Product.module.css';
import demoImg from '../../img/demo-img/demo_img-vertical.webp';
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

const Product = ({ category, images = [], title, price, description, color, id }) => {
    const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
    const isValidImageUrl = (url) => /\.(jpeg|jpg|gif|png|webp|svg)$/i.test(url);
    const validImages = images.filter((img) => isValidImageUrl(img));


    const [currentImage, setCurrentImage] = useState(validImages.length > 0 ? validImages[0] : demoImg);
    const [currentSize, setCurrentSize] = useState();

    return (
        <section className={styles.product}>
            <div className={styles.images}>
                <div className={styles.current} style={{ backgroundImage: `url(${currentImage})` }}></div>
                <div className={styles['images-list']}>
                     {validImages.length > 0 ? (
                         validImages.map((image, i) => (
                             <div 
                                 key={i} 
                                 className={styles.image} 
                                 style={{ backgroundImage: `url(${image})` }} 
                                 onClick={() => setCurrentImage(image)}
                             ></div>
                         ))
                     ) : (
                         <></>
                    )}
                </div>

            </div>

            <div className={styles.info}>
                <h1 className={styles.title}>{title}</h1>
                <div className={styles.price}>{price * 20 - 1} ₴</div>
                {color && <p className={styles.color}><span>Колір: </span>{color}</p>}
                
                {category?.name === 'Clothes' && (
                    <div className={styles.sizes}>
                        <span>Розмір:</span>
                        <div className={styles.list}>
                            {SIZES.map((size) => (
                                <div className={`${styles.size} ${currentSize === size ? styles.active : ""}`} onClick={() => setCurrentSize(size)} key={size}>
                                    {size}
                                </div>
                            ))}
                        </div>
                    </div>
                )} 
                <p className={styles.description}>{description}</p>

                {category?.name === 'Electronics' && (
                    <div>
                        <p>Батарея: <span>{id * 50} mAh</span></p>
                    </div>
                )}
                <div className={styles.actions}>
                    <button className={styles.add} disabled={category?.name === 'Clothes' && !currentSize}>Додати в кошик</button>
                    <button className={styles.favourite}>Додати до обраного</button>
                </div>
                <div className={styles.bottom}>
                    <Link to={ROUTES.HOME}>Повернутися на головну</Link>
                </div>
            </div>
        </section>
    );
};

export default Product;
