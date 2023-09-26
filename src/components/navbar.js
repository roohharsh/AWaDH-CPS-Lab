import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
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
                            <a className="nav-link" href="/about">About Us</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Items in CPS Lab
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/">BLE Gateway</a></li>
                                <li><a className="dropdown-item" href="/">Low Power Camera Module</a></li>
                                <li><a className="dropdown-item" href="/">BLE Development Kit</a></li>
                                <li><a className="dropdown-item" href="/">BLE Node</a></li>
                                <li><a className="dropdown-item" href="/">4G/5G Kit</a></li>
                                <li><a className="dropdown-item" href="/">Wifi Development Board</a></li>
                                <li><a className="dropdown-item" href="/">Activity Monitor Kit</a></li>
                                <li><a className="dropdown-item" href="/">Weather Monitoring Sensor System</a></li>
                                <li><a className="dropdown-item" href="/">Solar Charging & Discharging Module</a></li>
                                <li><a className="dropdown-item" href="/">Grove Shield</a></li>
                                <li><a className="dropdown-item" href="/">Solar Panel and Battery</a></li>
                                <li><a className="dropdown-item" href="/">SHT40 Sensor</a></li>
                                <li><a className="dropdown-item" href="/">STTS751 Sensor</a></li>
                                <li><a className="dropdown-item" href="/">LIS3DH Sensor</a></li>
                                <li><a className="dropdown-item" href="/">RELAY Sensor</a></li>
                                <li><a className="dropdown-item" href="/">LCD</a></li>
                                <li><a className="dropdown-item" href="/">Buzzer</a></li>
                                <li><a className="dropdown-item" href="/">Memory Unit (W25Q16)</a></li>
                                <li><a className="dropdown-item" href="/">Lux Sensor</a></li>
                                <li><a className="dropdown-item" href="/">UART to USB Converter</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
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
