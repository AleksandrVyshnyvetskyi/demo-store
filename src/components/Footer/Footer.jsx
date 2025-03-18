import React from 'react';

import { ROUTES } from '../../utils/routes';
import styles from '../../styles/Footer.module.css';
import LogoFooter from '../../img/logoFooter.jsx';
import InstaIcon from '../../img/InstaIcon.jsx';
import TelegIcon from '../../img/TelegIcon.jsx';

const Footer = () => {
  return (
    <>
      <section className={styles.footer}>
        <div className={styles.schedule}>
          <a href='#header' className={styles.logo}>
            <LogoFooter />
            <p>
              <span>D</span>emo<span>S</span>tore
            </p>
          </a>
        </div>
        <div className={styles.info}>
          <div>
            <h3 className={styles.title}>Режим роботи:</h3>
            <div className={styles.weekdays}>
              <p className={styles.days}>Пн-Пт</p>
              <span>09:00-20:00</span>
            </div>
            <div className={styles.weekend}>
              <p className={styles.days}>СБ-НД</p>
              <span>10:00-19:00</span>
            </div>
          </div>
          <div className={styles.tel}>
            <h3>Ми завжди на зв'язку:</h3>
            <a href="tel:+380660229626">+38 (066) 022-96-26</a>
            <a href="tel:+380987012639">+38 (098) 701-26-39</a>
          </div>
          <div className={styles.about}>
            <div className={styles.forBuyers}>
              <ul>
                <p>Покупцям:</p>
                <li>
                  <a href="#">Доставка</a>
                </li>
                <li>
                  <a href="#">Оплата</a>
                </li>
                <li>
                  <a href="#">Гарантії</a>
                </li>
                <li>
                  <a href="#">Повернення та обмін</a>
                </li>
                <li>
                  <a href="#">Політика конфіденційності</a>
                </li>
                <li>
                  <a href="#">Публічна оферта</a>
                </li>
              </ul>
            </div>
            <div className={styles.aboutConpany}>
              <ul>
                <p>Про компанію:</p>
                <li>
                  <a href="#">Уцінка / Outlet</a>
                </li>
                <li>
                  <a href="#">Акції</a>
                </li>
                <li>
                  <a href="#">Про нас</a>
                </li>
                <li>
                  <a href="#">Контакти</a>
                </li>
                <li>
                  <a href="#">Партнерство</a>
                </li>
                <li>
                  <a href="#">Вакансії</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.social}>
            <h3>Слідкуйте за нами:</h3>
            <a href="https://www.instagram.com/demostore.ua">
              <InstaIcon />
              Instagram
            </a>
            <a href="#">
              <TelegIcon />
              Telegram
            </a>
          </div>
        </div>
      </section>
      <div className={styles.rights}>
        <p className={styles.description}>DemoStore 2025</p>
        <span>
          Developerd by <a href="https://v-aleksandr.pp.ua/">V.Oleksandr</a>
        </span>
      </div>
    </>
  );
};

export default Footer;
