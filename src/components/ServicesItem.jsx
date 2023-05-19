import React from 'react'
import wbDesign from '../../src/img/web-design.png'
import wbDev from '../../src/img/web-development.png'
import GDesign from '../../src/img/graphic-design.png'
import Services from './Services'
import './Services.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';

function ServicesItem() {
    return (
        <div>

            <div className='services mt-4' id='services' >
                <Container>
                    <h1 className='top-title mb-5'>SERVICES</h1>
                    <Row>
                        <Services
                            src={wbDesign}
                            title='Web Design'
                            sub_title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.'
                        />
                        <Services
                            src={wbDev}
                            title='WEB DEVELOPMENT'
                            sub_title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.'
                        />
                        <Services
                            src={GDesign}
                            title='GRAPHIC DESIGN'
                            sub_title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.'
                        />
                    </Row>
                </Container >
            </div>

        </div >
    )
}

export default ServicesItem