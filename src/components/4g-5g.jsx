import React from 'react';
import '../css/items.css';
import Kit4g5g from '../images/4g5gKit.png';

const Kit4G5G = () => {
    return (
        <div className="items">
            <div className="heading">
                4G/5G Kit
            </div>
            <div className="image">
                <img src={Kit4g5g} alt="4G/5G Kit" />
            </div>
            <div className="text">
                <div>
                    It is important to send data to the cloud for storage and further processing. The 4G/5G Kit is
                    developed to send the data to the Cloud. There are many protocols proposed for this purpose.
                    However, Message Queuing Telemetry Transport (MQTT) is the most popular choice among
                    them. It is used for both IoT and IoV. The 4G/5G kit is equipped with a microcontroller.
                </div>
            </div>
        </div>
    );
};

export default Kit4G5G;
