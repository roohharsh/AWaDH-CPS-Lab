import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/navbar';
import About from './components/about';
import Devices from './components/devices';

function App() {
  return (
    <>
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/devices" element={<Devices/>} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
