import React from 'react';
import '../css/items.css';
import Lis3dh from '../images/lis3dh.png';

const LIS3DH = () => {
    return (
        <div className="items">
            <div className="heading">
                LIS3DH Sensor Board
            </div>
            <div className="image node">
                <img src={Lis3dh} alt="LIS3DH Sensor Board" />
            </div>
            <div className="text">
                <div>
                    The LIS3DH is an ultra-low-power high performance three-axis linear accelerometer belonging to
                    the “nano” family, with digital I2C/SPI serial interface standard output.The device may be
                    configured to generate interrupt signals using two independent inertial wake-up/free-fall events as
                    well as by the position of the device itself. Thresholds and timing of interrupt generators are
                    programmable by the end user on the fly. LIS3DH has an integrated 32-level first-in, first out
                    (FIFO) buffer allowing the user to store data in order to limit intervention by the host processor.
                </div>
                <br></br>
                <div className="specifications">
                    <strong>Specifications:</strong>
                    <ul>
                        <li>Wide supply voltage, 1.71 V to 3.6 V</li>
                        <li>Independent IO supply (1.8 V) and supply voltage compatible</li>
                        <li>Ultra-low-power mode consumption down to 2 μA</li>
                        <li>I2C/SPI digital output interface</li>
                        <li>16-bit data output</li>
                        <li>2 independent programmable interrupt generators for free-fall and motion detection</li>
                        <li>Embedded 32 levels of 16-bit data output FIFO</li>
                        <li>10000 g high shock survivability</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LIS3DH;
