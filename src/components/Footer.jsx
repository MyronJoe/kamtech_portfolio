import React from 'react'
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
    return (

        <div className='footer'>
            <Container>

                <div className="footer-item">

                    <div className="social-icons">

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
                    </div>

                    <div className="site-details">
                        <p><span>&copy;</span> Copyright KamTech. All Rights Reserved</p>

                        <p>Designed by Kam-Tech</p>
                    </div>


                </div>

            </Container>
        </div>
    )
}

export default Footer