import React from 'react'
import project1 from '../../src/img/project1.jpg'
import project2 from '../../src/img/project2.jpg'
import project3 from '../../src/img/work-5.jpg'
import project4 from '../../src/img/work-6.jpg'
import project5 from '../../src/img/work-2.jpg'
import project6 from '../../src/img/work-1.jpg'
import './Project.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import Project from './Project'

function ProjectItem() {
    return (
        <div>

            <div className='services mt-4' id='project'>

                <Container>
                    <h1 className='top-title mb-5'>PROJECTS</h1>
                    <Row>

                        <Project
                            src={project1}
                            title='ReactJs Ecommerce Template'
                            category='Web Design'
                            sub_title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.'
                            preview_link='https://react-js-ecommerce-five.vercel.app/'
                            source_codeLink='https://github.com/MyronJoe/ReactJs-Ecommerce'
                        />
                        <Project
                            src={project2}
                            title='WEB DEVELOPMENT'
                            category='Graphice Design'
                            sub_title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.'
                            preview_link='https://kamtech-real-estate-react-js-project.vercel.app/'
                            source_codeLink='https://github.com/MyronJoe/RealEstate-ReactJS-Project'
                        />
                        <Project
                            src={project3}
                            title='GRAPHIC DESIGN'
                            category='Web Development'
                            sub_title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.'
                            preview_link='#'
                            source_codeLink='#'
                        />
                        <Project
                            src={project4}
                            title='Web Design'
                            category='Web Design'
                            sub_title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.'
                            preview_link='#'
                            source_codeLink='#'
                        />
                        <Project
                            src={project5}
                            title='WEB DEVELOPMENT'
                            category='Graphice Design'
                            sub_title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.'
                            preview_link='#'
                            source_codeLink='#'
                        />
                        <Project
                            src={project6}
                            title='GRAPHIC DESIGN'
                            category='Web Development'
                            sub_title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.'
                            preview_link='#'
                            source_codeLink='#'
                        />

                    </Row>

                </Container >

            </div>
        </div >
    )
}

export default ProjectItem