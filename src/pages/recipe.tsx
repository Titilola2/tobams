import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Subscribe from '../components/subscribe';
import Recipebody from '../components/recipebody';
import Recipetop from '../components/recipetop';

function Recipe() {
  return (
    
    <div className="Recipe">
      <header className="App-header">
      <Header />
   <Recipetop />
    
      <Subscribe />
      <Recipebody />
      <Footer />
      </header>
    </div>
  );
}

export default Recipe;
