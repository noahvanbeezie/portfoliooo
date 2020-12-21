import React, {useState} from 'react'
import './AboutMe.css'

function AboutMe(){
    return(
        <div>
            <div className='aboutmeCircle'></div>
            <div className='aboutme'>
                <h1>About Me</h1>
                <div>
                    <p>I'm a junior level web-developer looking to learn new tech, and build on current knowledge.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe