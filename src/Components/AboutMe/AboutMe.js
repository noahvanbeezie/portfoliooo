import React, {useState,useEffect} from 'react'
import './AboutMe.css'


function AboutMe(){
    return(
        <div>
            <div className='aboutmeCircle'></div>
            <div className='aboutme'>
                <h1 className='amHeadText'>About Me</h1>
                <div className='amContainer'>
                    <div className='work'>
                        <p>I'm a junior level web-developer looking to learn new tech, and build on current knowledge.</p>
                    </div>
                    <div className='amImages'>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe