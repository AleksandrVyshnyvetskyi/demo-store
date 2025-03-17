import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../styles/Sidebar.module.css';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const { list } = useSelector(({ catalog }) => catalog);
  return (
    <section className={styles.sidebar}>
      <h3 className={styles.title}>Каталог :</h3>
      <nav>
        <ul className={styles.menu}>
          {list.map(({ id, name }) => (
            <li key={id}>
              <NavLink
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ''}`
                }
                to={`/catalog/${id}`}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.footer}>
        <a href="/help" className={styles.link} target="_blank">
          Help
        </a>
      </div>
    </section>
  );
};

export default Sidebar;
