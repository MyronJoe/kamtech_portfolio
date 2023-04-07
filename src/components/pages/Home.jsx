import React from 'react'
import About from '../About'
import Herosection from '../Herosection'
import Message from '../Message'
import ProjectItem from '../ProjectItem'
import ServicesItem from '../ServicesItem'



function Home() {
    return (
        <div>
            <Herosection />
            <About/>
            <ServicesItem />
            <ProjectItem />
            <Message />
        </div>
    )
}

export default Home