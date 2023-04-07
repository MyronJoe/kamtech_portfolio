import React from 'react'
import './Herosection.css'
import bgImage from '../../src/img/blog-4.jpg'
import { TypeAnimation } from 'react-type-animation';

function Herosection() {
    return (
        <div className='header1' style={{ backgroundImage: `url(${bgImage})` }}>

            <div className="hero-word">


                <h1>I am Myron Joe</h1>

                <div className='divider'></div>

                <TypeAnimation
                    sequence={[
                        'CEO KamTech', // Types 'One'
                        1000, // Waits 1s
                        'FullStack Developer', // Deletes 'One' and types 'Two'
                        2000, // Waits 2s
                        'Web Designer', // Types 'Three' without deleting 'Two'
                        3000, // Waits 3s
                        'Frontend Developer', // Deletes 'One' and types 'Two'
                        3500, // Waits 4s
                        'Graphic Designer', // Types 'Three' without deleting 'Two'
                        1000, 
                        () => {
                            console.log('Sequence completed'); // Place optional callbacks anywhere in the array
                        }
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '2em', display: 'inline-block', color: 'white'}}
                />


            </div>

            <div className="header">

            </div>

        </div>
    )
}

export default Herosection