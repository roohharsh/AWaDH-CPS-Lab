import React from 'react';
import '../css/items.css';
import gateway from '../images/gateway.png';

const Gateway = () => {
    return (
        <div className="items">
            <div className="heading">
                BLE Gateway
            </div>
            <div className="image">
                <img src={gateway} alt="BLE Gateway" />
            </div>
            <div className="text">
                <div>
                    The Bluetooth Gateway is a system architecture that allows communication between a central
                    device and multiple Bluetooth nodes. This architecture is commonly used in applications such as
                    IoT (Internet of Things) networks, smart home systems, and industrial monitoring. Gateway
                    architecture is shown below. The Gateway is implemented as a dual core system : the Bluetooth
                    core and the Application core. The Bluetooth Core MCU implements the BLE Controller, which
                    encompasses the physical layer and the link layer of the BLE stack. This core takes care of the
                    radio communication and thus the BLE scanning operation takes place here. The nodes deployed
                    in the Wireless Sensor Network use mostly non-connectable and non-scannable BLE
                    advertisements to transmit the sensor data, and thus, the BLE scanner’s link layer is implementing
                    a passive scanning operation in the Observer role. The reason behind using a separate core for the
                    Bluetooth Controller is to make sure that the reception of BLE packets is not hampered by any
                    other activity taking place at the Gateway. Under such an implementation, the scanning parameters
                    used by the Controller, the advertising parameters used by the sensor nodes and the number of
                    sensor nodes deployed would be the only factors causing loss of BLE packets. The Application
                    core MCU implements all the application-level tasks. The system uses an SPI interfaced non
                    volatile Flash memory for temporary storage of BLE packets, and a UART interfaced GSM
                    module for network connectivity. The Bluetooth core receives the BLE packets and sends the same
                    to the Application core, which stores this data into the Flash memory, reads this data when required
                    and sends the same to the Cloud using MQTT over the GSM network. All these operations are
                    brought about by the Application core through an interaction among three software modules: BLE
                    Observer, GSM module and Publish module. All the three modules are implemented using multithreading, and thus they undergo parallel execution. An overview of the software modules
                    implemented by the Application core is provided below.
                </div>
                <br></br>
                <div>
                    <strong>BLE Observer:</strong> This module implements the BLE Host and application. Its main role is defining
                    the scanning configuration for the BLE Controller implemented in the Bluetooth core, and
                    processing the data received from the Bluetooth core. This is the only software module of the
                    Application core that directly interacts with the Bluetooth core, and this interaction takes place in
                    the form of Bluetooth LE Host Controller Interface (HCI) commands and events defined by the
                    Bluetooth Core Specification for the interaction between the BLE Host and Controller [29]. The
                    HCI is implemented using an intercore communication protocol. Each advertising BLE end node
                    sends some bytes of sensor data and the BLE Observer module writes this data into the Flash
                    memory.
                </div>
                <br></br>
                <div>
                    <strong>GSM module:</strong> The data received by the Observer is sent to the Cloud using Message Queuing
                    Telemetry Transport (MQTT), which requires a network connection to function. The GSM module
                    provides cellular network connectivity, and takes care of the connection establishment and
                    maintenance. Cellular network coverage is available even in most of the remote areas and open
                    fields, where WiFi accessibility may not be feasible.
                </div>
                <br></br>
                <div>
                    <strong>Publish module:</strong> Once the GSM connection is established, the data is published to the Cloud
                    using MQTT. The main functions performed by the Publish module are reading the data from the
                    Flash memory, establishing the MQTT connection to the Cloud, maintaining it and publishing the
                    data to the Cloud using MQTT Publish packets.

                </div>
            </div>
        </div>
    );
};

export default Gateway;
