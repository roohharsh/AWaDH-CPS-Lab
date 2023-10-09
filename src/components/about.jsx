import React from 'react';

const About = () => {
    return (
        <div>
            <div className="home-page">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                About iHub-AWaDH
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                iHub-AWaDH, which stands for Innovation Hub for Agriculture and Water Technology
                                Development Hub, is a dedicated initiative hosted at IIT Ropar Technology and Innovation
                                Foundation established under National Mission on Interdisciplinary Cyber Physical Systems by
                                Department of Science and Technology, Government of India. It aims to foster and promote deep
                                tech innovation in the domains of Agriculture and Water, leveraging cutting-edge technologies
                                like Cyber Physical Systems (CPS), Internet of Things (IoT), Artificial Intelligence (AI), and more.
                                The iHub-AWaDH plays a pivotal role in accelerating the growth of startups, driving research,
                                and building a strong ecosystem to address critical challenges in the agricultural and water sectors.
                                Through strategic partnerships, incubation support, and collaborative programs, iHub-AWaDH
                                aims to bring positive transformation and sustainable solutions for a better future.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                About NIT Delhi
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                National Institute of Technology (NIT) Delhi, is one of the prestigious engineering institutions in
                                India. It is an autonomous public technical university established by the Government of India under
                                the NIT Act, 2007. The institute is recognized for its excellence in education, research, and
                                innovation in various engineering disciplines. NIT Delhi offers undergraduate, postgraduate, and
                                doctoral programs in engineering, technology, and applied sciences. The institute is committed to
                                providing quality education, fostering innovation, and nurturing technical skills among its
                                students. NIT Delhi focuses on promoting research and development activities, encouraging
                                industry collaborations, and nurturing a vibrant entrepreneurial ecosystem. The institute aims to
                                produce competent and skilled engineers who can contribute to the nation's technological
                                advancement and socio-economic growth. With state-of-the-art facilities, dedicated faculty, and a
                                conducive learning environment, NIT Delhi continues to inspire and empower the next generation
                                of engineers and technologists.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Spoke Institute
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                IIT Ropar Technology and Innovation Foundation - Agriculture and Water Technology
                                Development Hub (iHub AWaDH) and NIT Delhi have taken a significant step towards promoting
                                cyber-physical systems (CPS) by signing a Memorandum of Understanding (MoU). Under this
                                collaboration, AWaDH serves as the Hub, while NIT Delhi acts as its spoke institute, working
                                together to raise awareness about CPS through various outreach activities. The partnership
                                emphasizes joint workshops and training programs to equip students and researchers with essential
                                CPS knowledge and skills. Additionally, the MoU seeks to facilitate technology development and
                                deployment projects, fostering innovation in CPS-related domains. Both institutes are committed
                                to nurturing the startup ecosystem by providing comprehensive support and guidance to CPS-based startups. This collaborative effort is expected to drive technological advancements, foster
                                research and development, and propel India's journey towards becoming a frontrunner in the
                                domain of cyber-physical systems
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
