import React from 'react';
import '../css/items.css';

const UART = () => {
    return (
        <div className="items">
            <div className="heading">
            UART to USB Converter
            </div>
            <div className="text">
                <div>
                An UART to USB converter is used to see the output at the serial output in the PC/Laptop. 
                </div>
                <br></br>
                <div className="specifications">
                    <strong>Specifications:</strong>
                    <ul>
                        <li>Single crystal USB port to serial port communication.</li>
                        <li>USB1.1/2.0/3.0 compliant solution.</li>
                        <li>Built-in 128 byte TX/512 byte RX buffer.</li>
                        <li>Supports the auto-Handshake Protocol.</li>
                        <li>Support windows all versions full-speed USB data transfer protocol.</li>
                        <li>Design of electromagnetic interference.</li>
                        <li>Data Exchange application.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UART;
