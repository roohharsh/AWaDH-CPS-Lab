import React from 'react';
import '../css/items.css';
import Stts751 from '../images/stts751.png';

const STTS751 = () => {
    return (
        <div className="items">
            <div className="heading">
                STTS751 Sensor Board
            </div>
            <div className="image node">
                <img src={Stts751} alt="STTS751 Sensor Board" />
            </div>
            <div className="text">
                <div>
                    The STTS751 is a digital temperature sensor which communicates over a 2-wire SMBus 2.0
                    compatible bus. The temperature is measured with a user-configurable resolution between 9 and
                    12 bits. At 9 bits, the smallest step size is 0.5 °C, and at 12 bits, it is 0.0625 °C. At the default
                    resolution (10 bits, 0.25 °C/LSB), the conversion time is nominally 21 milliseconds. The opendrain
                    EVENT output is used to indicate an alarm condition in which the measured temperature has
                    exceeded the user-programmed high limit or fallen below the low limit. When the EVENT pin is
                    asserted, the host can respond using the SMBus Alert Response Address (ARA) protocol to which
                    the STTS751 will respond by sending its slave address.
                </div>
                <br></br>
                <div className="specifications">
                    <strong>Specifications:</strong>
                    <ul>
                        <li>Operating voltage 2.25 V to 3.6 V</li>
                        <li>Operating temperature -40 °C to +125 °C</li>
                    </ul>
                    <div>
                        <div className="programmable">Programmable</div>
                        <div className="programmable-items">
                            <div>- 10 different conversion rates 0.0625 to 32 conversions/sec.</div>
                            <div>- 1 conversion/sec. - default</div>
                            <div>- 4 different resolutions</div>
                            <div>- 9-bit (0.5 °C/LSB) to 12-bit (0.0625 °C/LSB)</div>
                            <div>- 10-bit (0.25 °C/LSB) - default</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default STTS751;
