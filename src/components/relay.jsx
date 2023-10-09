import React from 'react';
import '../css/items.css';
import RelayBoard from '../images/relay-board.png';

const Relay = () => {
    return (
        <div className="items">
            <div className="heading">
                Relay Board - 1 Channel & 2 channel
            </div>
            <div className="image node">
                <img src={RelayBoard} alt="Relay Board - 1 Channel & 2 channel" />
            </div>
            <div className="text">
                <div>
                    The Relay Sensor allows low voltage devices to be turned on/off in response to an event going in
                    or out of an alarm condition. The Sensor supports up to 4 devices with visible relay status lights.
                    The 4 outputs on the Relay Switch Sensor can be individually controlled and activated directly
                    from the Room Alert Web Interface or in response to an alarm condition.
                </div>
                <br></br>
                <div>
                    A relay is an electrically operated switch. It consists of a set of input terminals for a single or
                    multiple control signals, and a set of operating contact terminals. The switch may have any number
                    of contacts in multiple contact forms, such as make contacts, break contacts, or combinations
                    thereof.
                </div>
                <div>
                    It works on the principle of an electromagnetic attraction. When the circuit of the relay senses the
                    fault current, it energizes the electromagnetic field which produces the temporary magnetic field.
                    This magnetic field moves the relay armature for opening or closing the connections. The small
                    power relay has only one contact, and the high power relay has two contacts for opening the switch.
                </div>
                <br></br>
                <div>
                    The inner section of the relay is shown in the figure below. It has an iron core which is wound by
                    a control coil. The power supply is given to the coil through the contacts of the load and the control
                    switch. The current flowing through the coil produces the magnetic field around it.
                </div>
                <br></br>
                <div>
                    Due to this magnetic field, the upper arm of the magnet attracts the lower arm. Hence close the
                    circuit, which makes the current flow through the load. If the contact is already closed, then it
                    moves oppositely and hence opens the contacts.
                </div>
                <br></br>
                <div className="specifications">
                    <strong>Specifications:</strong>
                    <ul>
                        <li>Configuration - SPDT</li>
                        <li>Contact Material - Ag Alloy</li>
                        <li>Contact Resistance - 100 mΩ max</li>
                        <li>Contact Rating (Resistive load) - 5A 250V A</li>
                        <li>Switching Current Max. - 5A</li>
                        <li>Switching Power - 1250VA</li>
                        <li>Expected Mechanical Life - 10,000,000</li>
                        <li>Operations Expected Electrical Life M - 50,000 Operations</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Relay;
