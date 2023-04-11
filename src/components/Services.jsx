import React, { useEffect } from 'react'
import './Services.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'react-bootstrap';
import AOS from "aos";
import "aos/dist/aos.css";


function Services(props) {

    useEffect(() => {
        AOS.init({
            // duration : 5000
        });
    }, []);

    return (

        <Col xs={12} md={6} lg={4}>
            <div className="service-card" data-aos="zoom-in">

                <div className="img-holder">
                    <img src={props.src} alt={props.title} />
                </div>

                <h5 className="title">
                    {props.title}
                </h5>

                <p className="sub-title">
                    {props.sub_title}
                </p>

            </div>
        </Col>


    )
}

export default Services