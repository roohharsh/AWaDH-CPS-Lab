import React from 'react';
import '../css/items.css';
import Board from '../images/board.png';

const BLEBoard = () => {
    return (
        <div className="items">
            <div className="heading">
                BLE Development Board
            </div>
            <div className="image lcd">
                <img src={Board} alt="BLE Board" />
            </div>
            <div className="text">
                <div>
                    The Wifi Development Board nRF7002 DK is the development kit for the nRF7002 Wi-Fi 6
                    Companion IC. It contains everything needed to get started developing on a single board. The DK
                    features an nRF5340 multiprotocol System-on-Chip (SoC) as a host processor for the nRF7002.
                    The DK supports the development of low-power Wi-Fi applications and enables Wi-Fi 6 features
                    like OFDMA, Beamforming, and Target Wake Time. The nRF7002 Wi-Fi 6 companion IC is a
                    highly integrated IC designed to enable the integration of Wi-Fi 6 connectivity into a wide variety
                    of applications. The IC provides a low power and cost-effective solution for adding the latest WiFi 6 technology to products, allowing them to benefit from the ultra-fast speeds, improved range,
                    and greater reliability offered by the latest Wi-Fi standard. The nRF7002 features a 2.4 GHz radio
                    with low power consumption for extended battery life. The IC also features advanced security
                    features included to help protect user data. The IC is designed to be the ideal Wi-Fi companion IC
                    to Nordic’s nRF52840, nRF5340 SoCs, and to nRF91 Series devices. Additionally, the IC supports
                    a wide variety of host controllers and can be used with both Linux and RTOS operating systems.
                    Overall, the nRF7002 Wi-Fi 6 companion IC is a powerful, low-cost solution for adding the latest
                    Wi-Fi 6 technology to products. It provides fast and reliable connectivity, with advanced security
                    features, and is designed for easy integration into a wide range of applications.
                </div>
                <br></br>
                <div>
                    <strong>Applications:</strong> Battery operated, Wi-Fi products, Smart city & smart agriculture, Smart home,
                    Industrial sensors, Asset tracking, Wearables & medical.
                </div>
            </div>
        </div>
    );
};

export default BLEBoard;
