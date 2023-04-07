import React from 'react'
import bgImage from '../../../src/img/blog-4.jpg'
import './Message.css'

function Message() {
  return (
    <div className='header1' style={{ backgroundImage: `url(${bgImage})` }}>

            <div className="hero-word">


                <h1>Message</h1>

                    <div className='divider'></div>
                    
                <p class="intro-subtitle"><span class="text-slider-items">CEO KamTech,Web Developer,Web Designer,Frontend
                    Developer,Graphic Designer</span><strong class="text-slider"></strong></p>


            </div>

            <div className="header">

            </div>

        </div>
  )
}

export default Message