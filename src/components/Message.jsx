import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Message.css'
import { Col, Container, Row } from 'react-bootstrap';
import webimg from '../../src/img/web1.avif'
import AOS from "aos";
import "aos/dist/aos.css";

function Message() {

  useEffect(() => {
    AOS.init({
    });
  }, []);

  const [status, setStatus] = useState(false);
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hdckqfe', 'template_v786dfd', form.current, 'Cf8ZeQyERjRLUSwZv')
      .then((result) => {
        console.log(result.text);
        console.log("Message Sent");
        setStatus({ succes: true, message: 'Message sent successfully' });
        e.target.reset();
      }, (error) => {
        console.log(error.text);
        setStatus({ succes: false, message: 'Please try again later.' });
      });
  };

  return (
    <div className='message my-5' id='msg'>

      <Container>
        <Row>
          <Col xs={12} md={6} data-aos="zoom-in">

            <div className="message-form">

              <h5>Send Us Message</h5>

              <form ref={form} onSubmit={sendEmail}>
                <Row>
                  <Col xs={12} md={6}>
                    <input type="text" className='form-control' name='name' required placeholder='Name' />
                  </Col>

                  <Col xs={12} md={6}>
                    <input type="email" className='form-control' name='email' required placeholder='Email' />
                  </Col>

                  <Col xs={12} md={6}>
                    <input type="text" className='form-control' name='pnumber' required placeholder='Mobile Number' />
                  </Col>

                  <Col xs={12} md={6}>
                    <input type="text" className='form-control' name='address' required placeholder='Address' />
                  </Col>

                  <Col xs={12}>
                    <textarea className='form-control' name="message" id="" cols="30" rows="3" required placeholder='Message'></textarea>
                  </Col>

                  <Col xs={3}>
                    <input type="submit" value="Send" className='btn-send' />
                  </Col>

                </Row>
              </form>

              {
                status.message &&
                <div className="sent">
                  <p>{status.message} <i class="bi bi-check2-circle"></i></p>
                </div>
              }




            </div>

          </Col>

          <Col xs={12} md={6} className='img-section1' data-aos="zoom-in">
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