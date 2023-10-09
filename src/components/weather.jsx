import React from 'react';
import '../css/items.css';
import Weather from '../images/weather.png';

const WeatherSensor = () => {
    return (
        <div className="items">
            <div className="heading">
                Weather Monitoring Sensor System
            </div>
            <div className="image lux">
                <img src={Weather} alt="Weather Sensor" />
            </div>
            <div className="text">
                <div>
                    A Weather Monitoring Sensor System is a technology designed to collect and analyze data related
                    to various atmospheric and environmental conditions. These systems are widely used for weather
                    forecasting, research, agriculture, and more. The system typically includes a network of sensors
                    that gather data from different locations and transmit it to a central processing unit for analysis.
                    Here's a breakdown of the key components and functions of such a system:
                </div>
                <br></br>
                <div>
                    <strong>Sensors:</strong> These are the core components of the system that measure different weather parameters.
                    Common sensors include Temperature Sensor, Humidity Sensor and Air Quality Sensors.
                </div>
                <br></br>
                <div>
                    <strong>Data Collection and Transmission:</strong> The sensors gather real-time data from the environment. This
                    data is then transmitted to the Gateway and further it goes to the Cloud.
                </div>
                <br></br>
                <div>
                    <strong>Data Analysis and Visualization:</strong> The CPU processes the data using various algorithms to derive
                    insights about weather patterns, trends, and anomalies. The collected data uploaded to the cloud.
                    These insights can be visualized through graphs, charts, maps, and other graphical representations.
                </div>
            </div>
        </div>
    );
};

export default WeatherSensor;
