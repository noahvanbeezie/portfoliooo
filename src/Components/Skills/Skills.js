import React, {useState} from 'react'
import './Skills.css'

function Skills(){
    return(
        <div className='skills'>
            <div className='skillsCircle'></div>
            <div className='skillsDiv'>
                <h1 className='skillsHeadText'>Skills</h1>
                <div className='skillsHolder'>
                    <div className='languages'>
                        <h2>Languages</h2>
                        <div className='techDiv'>
                            <img></img>
                            <h3></h3>
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Skills