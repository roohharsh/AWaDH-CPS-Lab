import React from 'react';
import '../css/items.css';
import Shield from '../images/grove-shield.png';
import ShieldSensor from '../images/grove-shield-with-sensor.png';

const GroveShield = () => {
    return (
        <div className="items">
            <div className="heading">
                Grove Shield - BLE
            </div>
            <div className="image shield">
                <div>
                    <img src={Shield} alt="Grove Shield" />
                    <div>Grove Shield</div>
                </div>
                <div>
                    <img src={ShieldSensor} alt="Grove Shield With Sensor" />
                    <div>Grove Shield with Sensor</div>
                </div>
            </div>
            <div className="text">
                <div>
                    Grove shield is a modular, simple-to-use system designed to easily connect a BLE development
                    kit to a wide range of “modules” such as sensors, motors, and inputs.
                </div>
            </div>
        </div>
    );
};

export default GroveShield;
