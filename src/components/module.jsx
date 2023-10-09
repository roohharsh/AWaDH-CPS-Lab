import React from 'react';
import '../css/items.css';
import Solar from '../images/solar.png';

const SolarModule = () => {
    return (
        <div className="items">
            <div className="heading">
                Solar Charging and Discharging Module
            </div>
            <div className="image node">
                <img src={Solar} alt="Solar Charging and Discharging Module " />
            </div>
            <div className="text">
                <div>
                    The solar charging and discharging module is equipped with LT3652, a solar power directed
                    monolithic buck battery charger IC for modern battery chemistries which operates over a 4.95 V
                    to 32 V input voltage range. The LT3652 provides a constant-current/constant-voltage charge
                    characteristic with maximum charge current externally programmable up to 2 A. The LT3652
                    features an innovative input voltage regulation loop, which controls charge current to hold the
                    input voltage at a programmed level. The charger employs a 3.3 V float voltage feedback reference
                    so any desired battery float voltage up to 14.4 V can be programmed with a resistor divider.
                </div>
                <br></br>
                <div>
                    The LT3652 accepts a wide range of inputs from 4.95 V to 32 V with a 40 V absolute maximum
                    rating for added system margin. The input voltage regulation loop also allows optimized charging
                    from poorly regulated sources where the input can collapse under overcurrent conditions. It
                    charges a variety of battery pack configurations, including 1 to 3 Li-Ion / polymer cells in series,
                    1 to 4 LiFePO4 (lithium iron phosphate) cells in series, and sealed lead acid (SLA) batteries up to
                    14.4 V. Applications include solar powered systems, 12 V to 24 V automotive equipment, and
                    battery chargers.
                </div>
                <br></br>
                <div>
                    The LT3652’s charge current is programmable up to 2 A. This stand-alone battery charger requires
                    no external microcontroller and features user-selectable termination including C/10 or an onboard
                    timer. The device’s 1 MHz fixed switching frequency enables small solution sizes. Float voltage
                    feedback accuracy is specified at ±0.5%, charge current accuracy is ±5%, and C/10 detection
                    accuracy is ±2.5%. Once charging is terminated, the LT3652 automatically enters a low current
                    standby mode, which reduces the input supply current to 85 µA. In shutdown, the input bias current
                    is reduced to 15 µA. For autonomous charge control, an auto-recharge feature starts a new charging
                    cycle if the battery voltage falls 2.5% below the programmed float voltage.
                </div>
                <br></br>
                <div className="specifications">
                    <strong>Specifications:</strong>
                    <ul>
                        <li>Input supply voltage regulation loop for peak power tracking in (MPPT) solar applications</li>
                        <li>Wide input voltage range: 4.95 V to 32 V (40 V abs max)</li>
                        <li>Programmable charge rate up to 2 A</li>
                        <li>User selectable termination: C/10 or on-board termination timer</li>
                        <li>Resistor programmable float voltage up to 14.4 V accommodates Li-ion / polymer, LiFePO4, SLA, NiMH / NiCd chemistries</li>
                        <li>1 MHz fixed frequency</li>
                        <li>0.5% float voltage reference accuracy</li>
                        <li>5% charge current accuracy</li>
                        <li>2.5% C/10 detection accuracy</li>
                        <li>Binary-coded open-collector status pins</li>
                        <li>3 mm × 3 mm DFN12 package</li>
                        <li>No VIN blocking diode required for battery voltages ≤ 4.2 V</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SolarModule;
