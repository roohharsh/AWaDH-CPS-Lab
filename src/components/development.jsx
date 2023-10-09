import React from 'react';
import '../css/items.css';
import Development from '../images/development_kit.png';

const BLEDevelopment = () => {
    return (
        <div className="items">
            <div className="heading">
                BLE Development Kit
            </div>
            <div className="image">
                <img src={Development} alt="BLE development Kit" />
            </div>
            <div className="text">
                <div>
                    The nRF52 DK is a single-board development kit (DK) for Bluetooth Low Energy and Bluetooth
                    mesh, 2.4 GHz proprietary applications using the nRF52832 SoC. It facilitates development by
                    exploiting all features of the nRF52832 SoC that has generous availability of 512kB flash and
                    64kB RAM memory making it the ideal choice for LE Audio, professional lighting, advanced
                    wearables, and other complex IoT applications. The kit gives access to all I/Os and interfaces via
                    edge connectors and has 4 LEDs and 4 buttons which are user programmable. The kit is compatible
                    with the Arduino Uno Revision 3 standard, making it possible to use 3rd-party shields that are
                    compatible with this standard. It comes with an on-board SEGGER J-Link debugger allowing
                    programming and debugging both the on-board SoC and external SoCs through the debug out
                    header. It can be powered by USB 2.0 Type B or by an external source, but also includes a CR2032
                    battery holder, enabling in-field testing of prototypes. A range of software examples are available
                    from the nRF5 software development kit (SDK) and nRF Connect SDK to support Bluetooth LE,
                    ANT and 2.4 GHz applications. For Bluetooth mesh development, check out nRF5 SDK for Mesh.
                    SEGGER Embedded Studio, Visual Studio, Keil, GCC and IAR IDEs and toolchains are
                    supported. The box includes an nRF52 DK board and a CR2032 battery. Hardware layout and
                    schematics are available free of charge.
                </div>
                <br></br>
                <div className="specifications">
                    <strong>Specifications:</strong>
                    <ul>
                        <li>Affordable, rapid prototyping and development solution for the nRF52832 SoC</li>
                        <li>Supports Bluetooth LE, Bluetooth mesh, ANT and 2.4 GHz proprietary development</li>
                        <li>Bluetooth 5 feature support: 2 Mbps, Advertising Extensions, Periodic Advertising and Channel Selection Algorithm #2 (CSA #2)</li>
                        <li>Arm® Cortex™ M4 with floating point support</li>
                        <li>DSP instruction set</li>
                        <li>Arduino Uno Rev. 3 compatible for use with 3rd party shields</li>
                        <li>All I/Os and interfaces are available via connectors</li>
                        <li>Segger J-Link OB programming/debugging supported</li>
                        <li>Support for programming/debugging of external boards</li>
                        <li>Integrated 2.4 GHz PCB antenna</li>
                        <li>Connector for external NFC antenna</li>
                        <li>Connector for RF measurements</li>
                        <li>Pins for power consumption measurements</li>
                        <li>Coin-cell battery holder</li>
                        <li>1.7-3.3 V supplied from battery, USB or external</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BLEDevelopment;
