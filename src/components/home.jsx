import React from 'react';
import Devices from './devices';
import '../css/home.css';

const Home = () => {
    return (
        <div>
            <div className="home-page">
                <div className="home-heading">
                    INTRODUCTION
                </div>
                <div className="home-content">
                    Cyber-physical systems (CPS) play a pivotal role in shaping the future of various industries and
                    societal domains. Their importance lies in their ability to bridge the gap between the digital world
                    of computing and the physical world of machinery and processes. CPS serves as the foundation
                    for Internet of Things (IoT), providing the necessary hardware and software infrastructure to
                    connect and control the physical devices in the IoT ecosystem. The data collected from IoT devices
                    is often processed and analyzed by CPS to make real-time decisions and trigger appropriate
                    actions. The IoT lab is one of the crucial elements of the CPS lab.
                    The IoT lab is a cutting-edge facility created to promote innovation and research in this field. It
                    functions as a focal point for examining the possibilities of networked devices and their effects on
                    numerous businesses because it is outfitted with the most recent hardware, software, and
                    networking infrastructure. The development, experimentation, and testing of IoT technologies and
                    applications are the main goals of an IoT lab, which is a specialized location or workspace. It offers
                    a practical setting for IoT exploration and innovation for academics, engineers and students.
                </div>
            </div>
            <Devices/>
        </div>
    );
};

export default Home;
