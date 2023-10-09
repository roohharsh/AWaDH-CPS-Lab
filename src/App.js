import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/navbar';
import About from './components/about';
import Devices from './components/devices';
import Gateway from './components/gateway';
import Kit4g5g from './components/4g-5g';
import Camera from './components/camera';
import Development from './components/development';
import Node from './components/node';
import WifiBoard from './components/wifi-board';
import Monitor from './components/monitor';
import Weather from './components/weather';
import Module from './components/module';
import Shield from './components/shield';
import Battery from './components/battery';
import Sht40 from './components/sht40';
import Stts751 from './components/stts751';
import Lis3dh from './components/lis3dh';
import Relay from './components/relay';
import Lcd from './components/lcd';
import Buzzer from './components/buzzer';
import Memory from './components/memory';
import Lux from './components/lux';
import Uart from './components/uart';



function App() {
  return (
    <>
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/devices" element={<Devices/>} />
          <Route path="/gateway" element={<Gateway/>} />
          <Route path="/development" element={<Development/>} />
          <Route path="/node" element={<Node/>} />
          <Route path="/camera" element={<Camera/>} />
          <Route path="/4g-5g-kit" element={<Kit4g5g/>} />
          <Route path="/wifi-board" element={<WifiBoard/>} />
          <Route path="/monitor" element={<Monitor/>} />
          <Route path="/weather" element={<Weather/>} />
          <Route path="/module" element={<Module/>} />
          <Route path="/shield" element={<Shield/>} />
          <Route path="/battery" element={<Battery/>} />
          <Route path="/sht40" element={<Sht40/>} />
          <Route path="/stts751" element={<Stts751/>} />
          <Route path="/lis3dh" element={<Lis3dh/>} />
          <Route path="/relay" element={<Relay/>} />
          <Route path="/lcd" element={<Lcd/>} />
          <Route path="/buzzer" element={<Buzzer/>} />
          <Route path="/memory" element={<Memory/>} />
          <Route path="/lux" element={<Lux/>} />
          <Route path="/uart" element={<Uart/>} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
