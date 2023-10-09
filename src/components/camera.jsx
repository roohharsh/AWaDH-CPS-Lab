import React from 'react';
import '../css/items.css';
import Camera from '../images/camera.png';

const LowPowerCamera = () => {
    return (
        <div className="items">
            <div className="heading">
                Low Power Camera Module
            </div>
            <div className="image">
                <img src={Camera} alt="Low Power Camera Module" />
            </div>
            <div className="text">
                <div>
                    CPS system involve image analytics. A lot of technologies apply machine-learning algorithms to
                    image feeds, allowing cameras to recognize people, objects, and situations automatically. These
                    applications are relatively new, but several factors are encouraging their growth, including the
                    increased sophistication of analytical algorithms and lower costs for hardware, software, and
                    storage. One of the major challenge is to get low power hardware and firmware to capture the
                    image, store locally and/or send to the cloud.
                </div>
            </div>
        </div>
    );
};

export default LowPowerCamera;
