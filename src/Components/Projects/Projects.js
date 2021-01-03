import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import './Projects.css'

function Projects(){
    return(
        <div className='projects'>
            <div className='projectsTopCircle'></div>
            <div className='projectsBottomCircle'></div>
            <div className='projectsDiv'>
                <h1 className='projectsHeadText'>Projects</h1>
                <div className='projectsHolder'>
                    <div className='projectSummary'>
                        <h2 className='projectName'>Example Project</h2>
                        <p className='projectText'>Project Info</p>
                        <div className='projectLinks'>
                            <Button>L</Button>
                        </div>
                    </div>
                    <div className='projectImage'>
                        <img></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects