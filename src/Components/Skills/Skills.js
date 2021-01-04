import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './Skills.css'


function Skills(){
    return(
        <div className='skills'>
            <div className='skillsCircle'></div>
            <div className='skillsDiv'>
                <h1 className='skillsHeadText'>Skills</h1>
                <div className='skillsHolder'>
                    <div className='skillsCarousel'>
                        <Carousel>
                            <Carousel.Item>
                                <h1 className='skillsCarouselHead'>Languages</h1>
                                <div className='carouselSkills'>
                                    <div className='threeTechDiv'>
                                    <div className='techHolder'>
                                        <div className='techIcon'></div>
                                        <h2 className='techName'>JavaScript</h2>
                                    </div>
                                    <div className='techHolder'>
                                        <div className='techIcon'></div>
                                        <h2 className='techName'>Python</h2>
                                    </div>
                                    <div className='techHolder'>
                                        <div className='techIcon'></div>
                                        <h2 className='techName'>HTML/CSS</h2>
                                    </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <h1 className='skillsCarouselHead'>Front-End</h1>
                                <div className='carouselSkills'>
                                    <div className='threeTechDiv'>
                                    <div className='techHolder'>
                                        <div className='techIcon'></div>
                                        <h2 className='techName'>SASS</h2>
                                    </div>
                                    <div className='techHolder'>
                                        <div className='techIcon'></div>
                                        <h2 className='techName'>MaterialUI</h2>
                                    </div>
                                    <div className='techHolder'>
                                        <div className='techIcon'></div>
                                        <h2 className='techName'>idk</h2>
                                    </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <h1 className='skillsCarouselHead'>Back-End</h1>
                                <div className='carouselSkills'>
                                <div className='threeTechDiv'>
                                    <div className='techHolder'>
                                        <div className='techIcon'></div>
                                        <h2 className='techName'>Axios</h2>
                                    </div>
                                    <div className='techHolder'>
                                        <div className='techIcon'></div>
                                        <h2 className='techName'>Node.JS</h2>
                                    </div>
                                    <div className='techHolder'>
                                        <div className='techIcon'></div>
                                        <h2 className='techName'>Socket.IO</h2>
                                    </div>
                                </div>
                                </div>
                            </Carousel.Item>
                            
                        </Carousel>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Skills