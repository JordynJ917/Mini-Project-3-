import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from 'react';
import Footer from './components/footer';
import NavBar from './components/Navbar';
import Header from './components/header';
import ProductList from './components/ProductList';
import AppRoutes from './routes/AppRoutes';
import { CartProvider } from './context/ShopContext';

function App() {
  return (
    <div id='App'>
      <CartProvider>
      <NavBar/>
      <Header />
      <AppRoutes/>      
      <Footer/>
      </CartProvider>
    </div>
  )
}

export default App

