import React from 'react'
import './About.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import myImage from '../../src/img/me.jpg'
import { Link } from 'react-router-dom';


function About() {
    return (
        <div className='about mt-5'>
            <Container>
                <Row>
                    <Col xs={12} md={6}>

                        <div className="about_contact_sec">

                            <div className="about_img">
                                <img src={myImage} alt="KamTech" />
                            </div>

                            <div className="about_contact">

                                <p><strong>Name:</strong> <span>Myron Joe</span></p>
                                <Link to="" >
                                    <p><strong>Email:</strong> <span>kamtech@gmail.com</span></p>
                                </Link>
                                <Link to="" >
                                    <p><strong>Phone:</strong> <span>+1238109989839</span></p>
                                </Link>


                                {/* <p><strong>Profile:</strong> <span>Full-Stack Developer</span></p> */}


                                <p>
                                    <Link to="" className='social-icon'>
                                        <i class="bi bi-facebook"></i>
                                    </Link>

                                    <Link to="" className='social-icon'>
                                        <i class="bi bi-twitter"></i>
                                    </Link>

                                    <Link to="" className='social-icon'>
                                        <i class="bi bi-instagram"></i>
                                    </Link>

                                    <Link to="" className='social-icon'>
                                        <i class="bi bi-linkedin"></i>
                                    </Link>

                                    <Link to="" className='social-icon'>
                                        <i class="bi bi-whatsapp"></i>
                                    </Link>

                                    <Link to="" className='social-icon'>
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
                                <li>Javascript</li>
                                <li>React</li>
                                <li>Python</li>
                                <li>Django</li>
                                <li>Flask</li>
                                <li>Php</li>
                                <li>Laravel</li>
                                <li>Photoshop</li>
                                <li>Illustrator</li>
                            </ul>

                        </div>


                        <div className="buttons">
                            <Link to="" className='social-btn1'>
                            <i class="bi bi-arrow-right"></i> Download CV
                            </Link>

                            <Link to="" className='social-btn2'>
                                Message Me
                            </Link>
                        </div>

                    </Col>

                    <Col xs={12} md={6}>
                        <div className="about-details">
                            <h2 className='about-me'>About Me</h2>

                            <p className='p1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                            <p className='p2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default About