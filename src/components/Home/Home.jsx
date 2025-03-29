import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from '../../styles/Home.module.css';
import KeenSlider from '../Slider/Slider';
import Poster1 from '../Posters/Poster1';
import Poster2 from '../Posters/Poster2';
import Poster3 from '../Posters/Poster3';
import Poster4 from '../Posters/Poster4';
import Products from '../Products/Products';
import Categories from '../Categories/Categories';
import Banner from '../Banner/Banner';
import { filterByPrise } from '../../features/products/productsSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { products: {list, filtered}, categories } = useSelector(( state ) => state);

  useEffect(() => {
    if(!list.length) return;

    dispatch(filterByPrise(20))
  }, [dispatch, list.length])
  return (
    <>
      <section className={styles.home}>
        <KeenSlider item1={<Poster1/>} item2={<Poster2/>} item3={<Poster3/>} item4={<Poster4/>}/>
      </section>
      <Products products={list} amount={5} title="Популярне зараз:"/>
      <Categories products={categories.list} amount={5} title="Варто подивитись:"/>
      <Banner/>
      <Products products={filtered} amount={5} title="Товари до 500 грн:"/>
    </>
  );
};

export default Home;
