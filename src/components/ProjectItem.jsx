import React from 'react'
import project1 from '../../src/img/work-3.jpg'
import project2 from '../../src/img/work-4.jpg'
import project3 from '../../src/img/work-5.jpg'
import './Project.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from 'react-bootstrap';
import Project from './Project'

function ProjectItem() {
    return (
        <div>
            <div className='services mt-4'>
                <Container>
                    <h1 className='top-title mb-5'>PROJECTS</h1>
                    <Row>
                        <Project
                            src={project1}
                            title='Web Design'
                            category='Web Design'
                            sub_title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.'
                        />
                        <Project
                            src={project2}
                            title='WEB DEVELOPMENT'
                            category='Graphice Design'
                            sub_title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.'
                        />
                        <Project
                            src={project3}
                            title='GRAPHIC DESIGN'
                            category='Web Development'
                            sub_title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.'
                        />
                        <Project
                            src={project1}
                            title='Web Design'
                            category='Web Design'
                            sub_title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.'
                        />
                        <Project
                            src={project2}
                            title='WEB DEVELOPMENT'
                            category='Graphice Design'
                            sub_title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.'
                        />
                        <Project
                            src={project3}
                            title='GRAPHIC DESIGN'
                            category='Web Development'
                            sub_title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.'
                        />
                    </Row>
                </Container >
            </div>

        </div >
    )
}

export default ProjectItem