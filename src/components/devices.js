import React from 'react';
import '../css/devices.css';

const Devices = () => {
    return (
        <div className="devices">
            <div className="devices-heading">
                IoT lab Hardwares
            </div>
            <div className="all-cards">
                <div className="single-card">
                    <span className="card-heading">BLE Gateway</span>
                    <p className="card-description">A BLE (Bluetooth Low Energy) gateway is a device or
                        system that serves as an intermediary between BLE
                        devices and other networks or systems. BLE is a wireless
                        communication technology designed for low-power,
                        short-range communication, making it ideal for
                        applications such as Internet of Things (IoT) devices,
                        wearable devices, and various sensor networks. The
                        purpose of a BLE gateway is to facilitate the
                        communication between BLE devices and other
                        networks, such as local area networks (LANs), cloud
                        services, or other IoT platforms.</p>
                </div>
                <div className="single-card">
                    <span className="card-heading">BLE Development Kit</span>
                    <p className="card-description">It is a single-board development kit (DK) for Bluetooth
                        Low Energy and Bluetooth mesh, 2.4 GHz proprietary
                        applications using the nRF52832 SoC
                    </p>
                </div>
                <div className="single-card">
                    <span className="card-heading">BLE Node</span>
                    <p className="card-description">The BLE nodes are peripheral devices equipped with
                        NRF52 microcontrollers or other BLE-enabled devices.
                        These nodes can be sensors, actuators, or any other
                        devices that need to communicate with the gateway. Each
                        BLE node is capable of establishing a Bluetooth
                        connection and transmitting data to the gateway.</p>
                </div>
                <div className="single-card">
                    <span className="card-heading">Grove Shield</span>
                    <p className="card-description">Grove shield is a modular, simple-to-use system
                        designed to easily connect a BLE development kit to a
                        wide range of “modules” such as sensors, motors, and
                        inputs.</p>
                </div>
                <div className="single-card">
                    <span className="card-heading">4G/5G Kit</span>
                    <p className="card-description">The 4G module enables the connectivity to high-speed
                        LTE, HSPA+, WCDMA cel lular networks in order to
                        make possible the creation of the next level of worldwide
                        compatible projects inside the new "Internet of Things"
                        era.</p>
                </div>
                <div className="single-card">
                    <span className="card-heading">Sensors</span>
                    <p className="card-description">Sensors come in the breakout boards. They have pins on
                        them, which are used for supplying the power, providing
                        ground, receiving inputs, and sending outputs. Breakout
                        boards, in a nutshell, make using a single electrical
                        component, sensor, or chip simple and easy. Different
                        types of sensors are available with the kit like
                        Temperature, Humidity, Accelerometer, Relay, Memory
                        Unit etc.</p>
                </div>
                <div className="single-card">
                    <span className="card-heading">UART to USB Converter</span>
                    <p className="card-description">A UART to USB converter is a type of protocol converter
                        that is used for converting UART signal to USB data
                        signals.</p>
                </div>
                <div className="single-card">
                    <span className="card-heading">Breadboards</span>
                    <p className="card-description">A breadboard, solderless breadboard, or protoboard is a
                        construction base used to build semi-permanent
                        prototypes of electronic circuits.</p>
                </div>
                <div className="single-card">
                    <span className="card-heading">Jumper Wires</span>
                    <p className="card-description">These are used to connect any circuit on the breadboard.</p>
                </div>
                <div className="single-card">
                    <span className="card-heading">LED's , Resistors etc.</span>
                    <p className="card-description">For verification purposes or for indication purposes,
                        LED's are the best medium to visualize the output. </p>
                </div>
            </div>
        </div>
    );
};

export default Devices;
