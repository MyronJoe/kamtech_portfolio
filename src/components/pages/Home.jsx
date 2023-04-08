import React from 'react'
import About from '../About'
import Herosection from '../Herosection'
import Message from '../Message'
import ProjectItem from '../ProjectItem'
import ServicesItem from '../ServicesItem'



function Home({scroll4}) {
    return (
        <div>
            <Herosection />
            <About scroll4={scroll4}/>
            <ServicesItem />
            <ProjectItem />
            <Message />
        </div>
    )
}

export default Home