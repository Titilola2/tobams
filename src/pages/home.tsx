import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Subscribe from '../components/subscribe';
import Homebody from '../components/homebody';
import Categories from '../components/categories';
import Tasty from '../components/tasty-recipe';
import Everyone from '../components/everyone';
import Checkout from '../components/Checkout';
import Delicious from '../components/delicious';

function Home() {
  return (
    
    <div className="Home">
      <header className="App-header ">
      <Header />
      <Homebody />
     
      <Categories />
    < Tasty />
    <Everyone />
    <Checkout />
    <Delicious />
    <Subscribe />
    <Footer />
      </header>
    </div>
  );
}

export default Home;
