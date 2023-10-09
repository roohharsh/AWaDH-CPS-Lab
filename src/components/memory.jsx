import React from 'react';
import '../css/items.css';
import Memory from '../images/memory.png';

const W25Q16Memory = () => {
    return (
        <div className="items">
            <div className="heading">
                W25Q16 Memory
            </div>
            <div className="image node">
                <img src={Memory} alt="W25Q16 Memory" />
            </div>
            <div className="text">
                <div>
                    The W25Q16 (16M-bit), and W25Q32 (32M-bit) Serial Flash memories provide a storage solution
                    for systems with limited space, pins and power. The 25Q series offers flexibility and performance
                    well beyond ordinary Serial Flash devices. They are ideal for code shadowing to RAM, executing
                    code directly from Dual/Quad SPI (XIP) and storing voice, text and data. The devices operate on
                    a single 2.7V to 3.6V power supply with current consumption as low as 5mA active and 1µA for
                    power-down. All devices are offered in space-saving packages.
                </div>
                <br></br>
                <div className="specifications">
                    <strong>Specifications:</strong>
                    <ul>
                        <li>Wide Supply Voltage: 1.71 V to 3.6 V </li>
                        <li>Independent IO supply: (1.8 V) and supply voltage compatible</li>
                        <li>Ultra-low-power mode: Consumption down to 2 μA </li>
                        <li>I 2C/SPI digital output interface </li>
                        <li>Data Output: 16-bit</li>
                        <li>2 independent programmable interrupt generators for free-fall and motion detection</li>
                        <li>Embedded 32 levels of 16-bit data output FIFO</li>
                        <li>10000 g high shock survivability </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default W25Q16Memory;
