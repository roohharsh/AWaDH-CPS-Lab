import React from 'react';
import '../css/items.css';
import Monitor from '../images/monitor.png';

const MonitorKit = () => {
    return (
        <div className="items">
            <div className="heading">
                Activity Monitor Kit
            </div>
            <div className="image node">
                <img src={Monitor} alt="Activity Monitor Kit" />
            </div>
            <div className="text">
                <div>
                    An activity monitor using Bluetooth Low Energy (BLE) is a wearable device or sensor that
                    tracks and monitors various aspects of a user's physical activity and health. These monitors
                    typically use BLE technology to communicate with BLE Gateway, allowing users to access and
                    analyze their activity data in real-time or store it for later analysis. Here's how an activity
                    monitor using BLE typically works:
                </div>
                <ol>
                    <li><strong>Hardware:</strong> The activity monitor hardware includes sensors that can track different
                        metrics, such as movement, steps, temperature, humidity etc. The device is designed to be
                        worn comfortably on the body and on any equipment.</li>
                    <li><strong>BLE Communication:</strong> The activity monitor is equipped with a BLE radio module that
                        allows it to establish a low-power wireless connection with a nearby BLE-enabled
                        device.</li>
                    <li><strong>Data Collection:</strong> The activity monitor continuously collects data from its built-in
                        sensors, such as accelerometer, Temperature, Humidity etc. This data is transmitted to the
                        cloud through the established BLE connection with 4G enabled gateway.</li>
                    <li><strong>Data Storage and Analysis:</strong> The cloud stores the collected activity data. This data can be
                        used for more in-depth analysis over time. Users can review historical activity patterns,
                        set goals, and monitor progress towards achieving those goals.</li>
                </ol>
                <div>
                    Overall, activity monitors using BLE offer users a convenient and portable way to track and
                    improve their physical health and wellness. The combination of wearable sensors, wireless
                    communication, and mobile apps makes it easy for individuals to monitor their activity levels, set
                    goals, and make informed decisions about their fitness routines.
                </div>
            </div>
        </div>
    );
};

export default MonitorKit;
