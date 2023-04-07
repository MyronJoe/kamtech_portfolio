import React from 'react'
import './Message.css'
import { Col, Container, Row } from 'react-bootstrap';
import webimg from '../../src/img/web1.avif'

function Message() {

  return (
    <div className='message my-5' id='msg'>

      <Container>
        <Row>
          <Col xs={12} md={6}>

            <div className="message-form">

              <h5>Send Us Message</h5>

              <form action="">
                <Row>
                  <Col xs={12} md={6}>
                    <input type="text" className='form-control'  placeholder='Name'/>
                  </Col>

                  <Col xs={12} md={6}>
                    <input type="email" className='form-control'  placeholder='Email'/>
                  </Col>

                  <Col xs={12} md={6}>
                    <input type="text" className='form-control'  placeholder='Mobile Number'/>
                  </Col>

                  <Col xs={12} md={6}>
                    <input type="text" className='form-control'  placeholder='Subject'/>
                  </Col>

                  <Col xs={12}>
                    <textarea className='form-control' name="" id="" cols="30" rows="3" placeholder='Message'></textarea>
                  </Col>

                  <Col xs={3}>
                    <input type="submit" value='Send' className='btn-send'/>
                  </Col>

                </Row>
              </form>

            </div>

          </Col>

          <Col xs={12} md={6} className='img-section1'>
            <div className="img-section">
              
              <img className='img-f' src={webimg} alt="kamtech" />

            </div>
          </Col>
        </Row>
      </Container>


    </div>

  )
}

export default Message