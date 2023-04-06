import React from 'react'
import './Project.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col} from 'react-bootstrap';


function Project() {
    return (
        <Col xs={12} md={6} lg={4}>
            <div className="service-card">

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

export default Project