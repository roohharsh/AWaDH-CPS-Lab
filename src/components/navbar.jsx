import React from 'react';
import logo from '../images/logo.png';
import '../css/home.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img src={logo} alt="iHub-AWaDH logo" />
                <link className="navbar-brand" to="/">AWaDH CPS Lab</link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <link className="nav-link active" aria-current="page" to="/">Home</link>
                        </li>
                        <li className="nav-item">
                            <link className="nav-link active" to="/about">About Us</link>
                        </li>
                        <li className="nav-item dropdown">
                            <link className="nav-link active dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Items in CPS Lab
                            </link>
                            <ul className="dropdown-menu">
                                <li><link className="dropdown-item" to="/gateway">BLE Gateway</link></li>
                                <li><link className="dropdown-item" to="/camera">Low Power Camera Module</link></li>
                                <li><link className="dropdown-item" to="/development">BLE Development Kit</link></li>
                                <li><link className="dropdown-item" to="/node">BLE Node</link></li>
                                <li><link className="dropdown-item" to="/4g-5g-kit">4G/5G Kit</link></li>
                                <li><link className="dropdown-item" to="/wifi-board">Wifi Development Board</link></li>
                                <li><link className="dropdown-item" to="/monitor">Activity Monitor Kit</link></li>
                                <li><link className="dropdown-item" to="/weather">Weather Monitoring Sensor System</link></li>
                                <li><link className="dropdown-item" to="/module">Solar Charging & Discharging Module</link></li>
                                <li><link className="dropdown-item" to="/shield">Grove Shield</link></li>
                                <li><link className="dropdown-item" to="/battery">Solar Panel and Battery</link></li>
                                <li><link className="dropdown-item" to="/sht40">SHT40 Sensor</link></li>
                                <li><link className="dropdown-item" to="/stts751">STTS751 Sensor</link></li>
                                <li><link className="dropdown-item" to="/lis3dh">LIS3DH Sensor</link></li>
                                <li><link className="dropdown-item" to="/relay">RELAY Sensor</link></li>
                                <li><link className="dropdown-item" to="/lcd">LCD</link></li>
                                <li><link className="dropdown-item" to="/buzzer">Buzzer</link></li>
                                <li><link className="dropdown-item" to="/memory">Memory Unit (W25Q16)</link></li>
                                <li><link className="dropdown-item" to="/lux">Lux Sensor</link></li>
                                <li><link className="dropdown-item" to="/uart">UART to USB Converter</link></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
