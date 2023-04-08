import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Message.css'
import { Col, Container, Row } from 'react-bootstrap';
import webimg from '../../src/img/web1.avif'

function Message() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className='message my-5' id='msg'>

      <Container>
        <Row>
          <Col xs={12} md={6}>

            <div className="message-form">

              <h5>Send Us Message</h5>

              <form ref={form} onSubmit={sendEmail}>
                <Row>
                  <Col xs={12} md={6}>
                    <input type="text" className='form-control' name='name' placeholder='Name' />
                  </Col>

                  <Col xs={12} md={6}>
                    <input type="email" className='form-control' name='email' placeholder='Email' />
                  </Col>

                  <Col xs={12} md={6}>
                    <input type="text" className='form-control' name='pnumber' placeholder='Mobile Number' />
                  </Col>

                  <Col xs={12} md={6}>
                    <input type="text" className='form-control' name='address' placeholder='Address' />
                  </Col>

                  <Col xs={12}>
                    <textarea className='form-control' name="message" id="" cols="30" rows="3" placeholder='Message'></textarea>
                  </Col>

                  <Col xs={3}>
                    <input type="submit" value="Send" className='btn-send' />
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