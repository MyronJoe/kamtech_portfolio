import React from 'react'
import About from '../About'
import Herosection from '../Herosection'
import ProjectItem from '../ProjectItem'
import ServicesItem from '../ServicesItem'



function Home() {
    return (
        <div>
            <Herosection />
            <About/>
            <ServicesItem />
            <ProjectItem />
        </div>
    )
}

export default Home