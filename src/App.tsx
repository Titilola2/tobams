import React from 'react';
import './App.css';
import Home from './pages/home';
import Japanese from './pages/japanese';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Japanese" element={<Japanese />} />
    </Routes>
  </Router>
  );
}

export default App;
