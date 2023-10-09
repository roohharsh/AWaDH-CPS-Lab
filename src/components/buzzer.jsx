import React from 'react';
import '../css/items.css';
import Buzzer from '../images/buzzer.png';

const BuzzerBoard = () => {
    return (
        <div className="items">
            <div className="heading">
                Buzzer Board
            </div>
            <div className="image lcd">
                <img src={Buzzer} alt="Buzzer Board" />
            </div>
            <div className="text">
                <div>
                    An audio signaling device like a buzzer sensor has the main function of this is to convert the signal
                    from audio to sound. Generally, it is powered through DC voltage and used in timers, alarm
                    devices, printers, alarms, computers, etc. Based on the various designs, it can generate different
                    sounds like alarm, music, bell & siren. A buzzer is an efficient component to include the features
                    of sound in any system or project. It is an extremely small and solid two-pin device thus it can be
                    simply utilized on a breadboard or PCB. So in most applications, this component is widely used.
                </div>
                <br></br>
                <div className="specifications">
                    <strong>Specifications:</strong>
                    <ul>
                        <li>Rated Voltage: 3.5V</li>
                        <li>Operating Voltage: 2.5 ~ 6.0V</li>
                        <li>Mean Current: 35mA (Max)</li>
                        <li>Peak Current: 105mA (Max)</li>
                        <li>Direct Current Resistance: 42±6.3Ω</li>
                        <li>Sound Output: 85dBA (Min)</li>
                        <li>Rated Frequency: 2048 Hz</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BuzzerBoard;
