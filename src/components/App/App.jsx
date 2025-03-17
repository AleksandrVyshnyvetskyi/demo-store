import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import AppRoutes from '../Routes/Routes';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import { getCatalog } from '../../features/catalog/catalogSlice';
import { getProducts } from '../../features/products/productsSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatalog());
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <div className="container">
        <Sidebar />
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
};

export default App;
