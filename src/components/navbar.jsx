import React from 'react';
import logo from '../images/logo.png';
import '../css/home.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img src={logo} alt="iHub-AWaDH logo" />
                <a className="navbar-brand" href="/">AWaDH CPS Lab</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/about">About Us</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link active dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Items in CPS Lab
                            </a>
                            <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/gateway">BLE Gateway</a></li>
                                <li><a className="dropdown-item" href="/camera">Low Power Camera Module</a></li>
                                <li><a className="dropdown-item" href="/development">BLE Development Kit</a></li>
                                <li><a className="dropdown-item" href="/node">BLE Node</a></li>
                                <li><a className="dropdown-item" href="/4g-5g-kit">4G/5G Kit</a></li>
                                <li><a className="dropdown-item" href="/wifi-board">Wifi Development Board</a></li>
                                <li><a className="dropdown-item" href="/monitor">Activity Monitor Kit</a></li>
                                <li><a className="dropdown-item" href="/weather">Weather Monitoring Sensor System</a></li>
                                <li><a className="dropdown-item" href="/module">Solar Charging & Discharging Module</a></li>
                                <li><a className="dropdown-item" href="/shield">Grove Shield</a></li>
                                <li><a className="dropdown-item" href="/battery">Solar Panel and Battery</a></li>
                                <li><a className="dropdown-item" href="/sht40">SHT40 Sensor</a></li>
                                <li><a className="dropdown-item" href="/stts751">STTS751 Sensor</a></li>
                                <li><a className="dropdown-item" href="/lis3dh">LIS3DH Sensor</a></li>
                                <li><a className="dropdown-item" href="/relay">RELAY Sensor</a></li>
                                <li><a className="dropdown-item" href="/lcd">LCD</a></li>
                                <li><a className="dropdown-item" href="/buzzer">Buzzer</a></li>
                                <li><a className="dropdown-item" href="/memory">Memory Unit (W25Q16)</a></li>
                                <li><a className="dropdown-item" href="/lux">Lux Sensor</a></li>
                                <li><a className="dropdown-item" href="/uart">UART to USB Converter</a></li>
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
