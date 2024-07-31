import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Subscribe from '../components/subscribe';

function Recipe() {
  return (
    
    <div className="Recipe">
      <header className="App-header">
      <Header />
      <Subscribe />
      <Footer />
      </header>
    </div>
  );
}

export default Recipe;
