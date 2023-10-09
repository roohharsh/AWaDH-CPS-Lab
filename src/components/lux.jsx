import React from 'react';
import '../css/items.css';
import Lux from '../images/lux.png';

const LuxSensor = () => {
    return (
        <div className="items">
            <div className="heading">
                Lux Sensor
            </div>
            <div className="image lux">
                <img src={Lux} alt="Lux Sensor" />
            </div>
            <div className="text">
                <div>
                    Lux Sensor is a high accuracy ambient light digital 16-bit resolution sensor in a miniature
                    transparent 6.8 mm x 3.0 mm x 2.5 mm package. It includes a high sensitive photo diode, a low
                    noise amplifier, a 16-bit A/D converter and supports an easy to use I2C bus communication
                    interface.
                </div>
                <br></br>
                <div className="specifications">
                    <strong>Features:</strong>
                    <ul>
                        <li>Package type: surface mount</li>
                        <li>Integrated modules: ambient light sensor (ALS)</li>
                        <li>Supply voltage range VDD: 2.5 V to 3.6 V</li>
                        <li>Communication via I2C interface</li>
                        <li>Low shutdown current consumption: typ. 0.5 μA</li>
                        <li>16-bit dynamic range for ambient light detection from 0 lx to about 167 klx with resolution down to 0.005 lx/ct</li>
                        <li>Excellent temperature compensation</li>
                        <li>High dynamic detection resolution</li>
                        <li>Software shutdown mode control</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LuxSensor;
