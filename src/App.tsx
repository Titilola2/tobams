import React from 'react';
import './App.css';
import Home from './pages/home';
import Recipe from './pages/recipe';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipe />} />
    </Routes>
  </Router>
  );
}

export default App;
