import React, { useEffect } from 'react'
import './About.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import myImage from '../../src/img/me.jpg'
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";


function About({ scroll4 }) {

    useEffect(() => {
        AOS.init({
        });
    }, []);

    return (
        <div className='about mt-5' id='about'>
            <Container>
                <Row>
                    <Col xs={12} md={6} data-aos="zoom-in">

                        <div className="about_contact_sec">

                            <div className="about_img">
                                <img src={myImage} alt="KamTech" />
                            </div>

                            <div className="about_contact">

                                <p><strong>Name:</strong> <span>Kamtech</span></p>
                                <Link to="" >
                                    <p><strong>Email:</strong> <span>kamtdev001@gmail.com</span></p>
                                </Link>
                                <Link to="https://wa.me/2347046617413?text=WELCOME%20to%20Kam%20Tech.%20We%20offer%20Web%20Design,%20Web%20Development,%20Graphics%20Design%20and%20more." >
                                    <p><strong>Phone:</strong> <span>+2348109989839</span></p>
                                </Link>

                                <p>
                                    {/* <Link to="https://web.facebook.com/myron.joe.50" className='social-icon'>
                                        <i class="bi bi-facebook"></i>
                                    </Link> */}

                                    <Link to="https://twitter.com/kamTech_01" className='social-icon'>
                                        <i class="bi bi-twitter"></i>
                                    </Link>

                                    <Link to="http://www.linkedin.com/in/myron-joe" className='social-icon'>
                                        <i class="bi bi-linkedin"></i>
                                    </Link>

                                    <Link to="https://wa.me/2347046617413?text=WELCOME%20to%20Kam%20Tech.%20We%20offer%20Web%20Design,%20Web%20Development,%20Graphics%20Design%20and%20more." className='social-icon'>
                                        <i class="bi bi-whatsapp"></i>
                                    </Link>

                                    <Link to="https://github.com/MyronJoe" className='social-icon'>
                                        <i class="bi bi-github"></i>
                                    </Link>
                                </p>

                            </div>

                        </div>

                        <div className="skils">
                            <h5 className='skills-top'>Skills:</h5>
                            <ul class="skils">
                                <li>Html</li>
                                <li>Css</li>
                                <li>Bootstrap</li>
                                <li>Tailwind</li>
                                <li>Typescript</li>
                                <li>Javascript</li>
                                <li>ReactJS</li>
                                <li>NextJS</li>
                                <li>NodeJs</li>
                                <li>Php</li>
                                <li>Laravel</li>
                                <li>Photoshop</li>
                                <li>Illustrator</li>
                            </ul>

                        </div>


                        <div className="buttons">
                            <Link to="/" className='social-btn1'>
                                <i class="bi bi-arrow-right"></i> Download CV
                            </Link>

                            <Link to="/" onClick={scroll4} className='social-btn2'>
                                Message Me
                            </Link>
                        </div>

                    </Col>

                    <Col xs={12} md={6} data-aos="zoom-in">
                        <div className="about-details">
                            <h2 className='about-me'>About Me</h2>

                            <p className='p1'>I'm <b>Myron Joe</b> a dedicated and energetic Full Stack Developer and a Graphic Designer with great passion for creating/developing attractive designs, interactive, responsive and user friendly websites. I have an excellent communication skill thereby making it possible for me to work with a team. I also have a strong commitment to research in order to enhance my tech skills.</p>

                            <p className='p2'>Using my skills, knowledge and ability, I apply basic development principles in presenting ideas, information, products and services on a website, thereby bringing the clients imaginations into reality.
                                When I'm not programming, I'm either reading a thriller book, listening to music or checking up on the latest updates on the tools I work with. I am open to collaborations and job opportunities. so drop a message to share ideas &#x1F44D;
                            </p>

                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default About