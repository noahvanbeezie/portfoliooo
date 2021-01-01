import React, {useState} from 'react'
import './Skills.css'

function Skills(){
    return(
        <div className='skills'>
            <div className='skillsCircle'></div>
            <div className='skillsDiv'>
                <h1 className='skillsHeadText'>Skills</h1>
                <div className='skillsHolder'>
                    <div className='skillDiv'>
                        <img></img>
                        <h2>Example Skill</h2>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills