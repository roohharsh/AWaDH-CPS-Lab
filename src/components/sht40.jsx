import React from 'react';
import '../css/items.css';
import Sht40 from '../images/sht40.png';

const SHT40 = () => {
    return (
        <div className="items">
            <div className="heading">
                SHT40 Sensor Board
            </div>
            <div className="image node">
                <img src={Sht40} alt="SHT40 Sensor Board" />
            </div>
            <div className="text">
                <div>
                    The sensor module is equipped with a SHT40 humidity and temperature output via an I2C
                    interface.SHT40 is a digital sensor platform for measuring relative humidity and temperature at
                    different accuracy classes. The I2C interface provides several preconfigured I2C addresses and
                    maintains an ultra-low power budget.
                </div>
                <br></br>
                <div className="specifications">
                    <strong>Specifications:</strong>
                    <ul>
                        <li>Relative humidity accuracy: up to ±1.8 %RH</li>
                        <li>Temperature accuracy: up to ±0.2 °C</li>
                        <li>Breakout supply voltage: 3.3 to 5V</li>
                        <li>Average bare sensor current: 0.4 μA (at meas. rate 1 Hz)</li>
                        <li>Idle bare sensor current: 80 nA</li>
                        <li>I2C fast mode plus, CRC checksum</li>
                        <li>Operating range: 0…100 %RH, -40…125 °C</li>
                        <li>Fully functional in condensing environment</li>
                        <li>Variable power heater</li>
                        <li>NIST traceability for sensor</li>
                        <li>JEDEC JESD47 qualification for sensor</li>
                        <li>Mature technology from global market leader Sensirion</li>
                        <li>I2C address 0x44</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SHT40;
