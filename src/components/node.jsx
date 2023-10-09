import React from 'react';
import '../css/items.css';
import Node from '../images/BLE_Node.png';

const BLENode = () => {
    return (
        <div className="items">
            <div className="heading">
                BLE Node
            </div>
            <div className="image node">
                <img src={Node} alt="BLE Node" />
            </div>
            <div className="text">
                <div>
                    The BLE nodes are peripheral devices equipped with NRF52 microcontrollers, sensors like: SHT
                    40 and LIS3DH and external flash memory: W25Q16. Each BLE node is capable of establishing
                    a Bluetooth connection and transmitting data to the Gateway and any other BLE node.
                </div>
                <br></br>
                <div>
                    The nRF52832 is a general-purpose multiprotocol SoC. It meets the challenges of a broad range
                    of applications that need advanced Bluetooth® LE features, protocol concurrency and a rich and
                    varied set of peripherals and features. In addition, it offers generous memory availability for both
                    Flash and RAM. It supports Bluetooth Low Energy, including the high-speed 2 Mbps feature. It is
                    built around an Arm® Cortex™-M4 CPU with a floating point unit running at 64 MHz. It has
                    NFC-A Tag for use in simplified pairing and payment solutions. It has numerous digital peripherals
                    and interfaces such as PDM and I2S for digital microphones and audio. Exceptionally low energy
                    consumption is achieved using a sophisticated on-chip adaptive power management system.
                </div>
            </div>
        </div>
    );
};

export default BLENode;
