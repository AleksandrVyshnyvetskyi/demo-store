import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../utils/routes';
import styles from '../../styles/Header.module.css';
import Logo from '../../img/icon/logo.jsx'
import SearchIcon from '../../img/icon/SearchIcon.jsx';
import HeartIcon from '../../img/icon/HeartIcon.jsx';
import BrackedIcon from '../../img/icon/BrackedIcon.jsx';

const avatar =
  'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png';

const Header = () => {
  return (
    <div id='header' className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <div>
            <Logo />
            <span className={styles.accent}>D</span>
          </div>
          <span className={styles.hiddenText}>emo</span>
          <span className={styles.accentTwo}>S</span>
          <span className={styles.tore}>tore</span>
        </Link>
        <p>Demo ціни, full якість !</p>
      </div>
      <div className={styles.info}>
        <form className={styles.form}>
          <div className={styles.icon}>
            <SearchIcon />
          </div>
          <div className={styles.input}>
            <input
              type="search"
              placeholder="Введіть назву..."
              name="search"
              autoComplete="off"
              onChange={() => {}}
            />
          </div>
          {false && <div className={styles.box}></div>}
        </form>

        <div className={styles.account}>
          <Link to={ROUTES.FAVIRITE} className={styles.favorite}>
            <HeartIcon />
          </Link>
          <Link to={ROUTES.CART} className={styles.cart}>
            <BrackedIcon />
            <span className={styles.count}>2</span>
          </Link>
        </div>

        <Link to={ROUTES.USER_CABINET} className={styles.user}>
          <p className={styles.username}>I`m</p>
          <img src={avatar} alt="user-avatar" className={styles.avatar} />
          <p className={styles.username}>Batman</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
