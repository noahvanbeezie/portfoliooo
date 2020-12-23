import React, {useState} from 'react'
import './Projects.css'

function Projects(){
    return(
        <div className='projects'>
            <div className='projectsTopCircle'></div>
            <div className='projectsBottomCircle'></div>
            <div className='projectsDiv'>
                <h1>Projects</h1>
                <div>
                    <img></img>
                    <h2>Example Project</h2>
                    <p>Project Info</p>
                </div>
            </div>
        </div>
    )
}

export default Projects