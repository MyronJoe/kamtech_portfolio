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

                        <Link to="" className='social-iconF'>
                            <i class="bi bi-facebook"></i>
                        </Link>

                        <Link to="https://twitter.com/kamTech_01" className='social-iconF'>
                            <i class="bi bi-twitter"></i>
                        </Link>

                        {/* <Link to="" className='social-iconF'>
                            <i class="bi bi-instagram"></i>
                        </Link> */}

                        <Link to="http://www.linkedin.com/in/myron-joe" className='social-iconF'>
                            <i class="bi bi-linkedin"></i>
                        </Link>

                        <Link to="https://wa.me/2347046617413?text=WELCOME%20to%20Kam%20Tech.%20We%20offer%20Web%20Design,%20Web%20Development,%20Graphics%20Design%20and%20more." className='social-iconF'>
                            <i class="bi bi-whatsapp"></i>
                        </Link>

                        <Link to="https://github.com/MyronJoe" className='social-iconF'>
                            <i class="bi bi-github"></i>
                        </Link>
                    </div>

                    <div className="site-details">
                        <p><span>&copy;</span> Copyright KamTech. All Rights Reserved</p>

                        <p>Designed by KamTech - 2023</p>
                    </div>



                </div>

            </Container>

            
        </div>
    )
}

export default Footer