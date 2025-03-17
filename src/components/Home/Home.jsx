import React from 'react';

import styles from '../../styles/Home.module.css';
import KeenSlider from '../Slider/Slider';
import Poster1 from '../Posters/Poster1';
import Poster2 from '../Posters/Poster2';
import Poster3 from '../Posters/Poster3';
import Poster4 from '../Posters/Poster4';
import Products from '../Products/Products';
import { useSelector } from 'react-redux';

const Home = () => {
  const { list } = useSelector(({products}) => products)

  return (
    <>
      <section className={styles.home}>
        <KeenSlider item1={<Poster1/>} item2={<Poster2/>} item3={<Poster3/>} item4={<Poster4/>}/>
      </section>
      <Products products={list} amount={5} title="Популярне:"/>
    </>
  );
};

export default Home;
