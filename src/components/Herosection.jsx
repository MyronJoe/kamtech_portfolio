import React from 'react'
import './Herosection.css'
import bgImage from '../../src/img/blog-4.jpg'

function Herosection() {
    return (
        <div className='header1' style={{ backgroundImage: `url(${bgImage})` }}>

            <div className="hero-word">


                <h1>I am Myron Joe</h1>

                    <div className='divider'></div>
                    
                <p class="intro-subtitle"><span class="text-slider-items">CEO KamTech,Web Developer,Web Designer,Frontend
                    Developer,Graphic Designer</span><strong class="text-slider"></strong></p>


            </div>

            <div className="header">

            </div>

        </div>
    )
}

export default Herosection