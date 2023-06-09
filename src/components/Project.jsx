import React, { useEffect } from 'react'
import './Project.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

function Project(props) {

    useEffect(() => {
        AOS.init({
        });
    }, []);

    return (
        <Col xs={12} md={6} lg={4} data-aos="zoom-in">
            <div className="project-card">
                <div className="image-holder">
                    <img src={props.src} alt={props.title} />
                </div>
                <div className="word">
                    <div className="category">{props.category}</div>
                    <h5 className="title">
                        {props.title}
                    </h5>
                    <hr />
                    <div className='project-btn'>
                        <Link to={props.preview_link} className='code-btn'>
                            Preview <i class="bi bi-code-square"></i>
                        </Link>
                        <Link to={props.source_codeLink} className='code-btn'>
                            Source Code <i class="bi bi-github"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default Project