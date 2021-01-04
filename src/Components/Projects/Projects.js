import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Button from '@material-ui/core/Button'
import './Projects.css'

function Projects(){
    return(
        <div className='projects'>
            <div className='projectsTopCircle'></div>
            <div className='projectsBottomCircle'></div>
            <div className='projectsDiv'>
                <div className='projectsCarousel'>
                    <Carousel>
                        <Carousel.Item>
                            <h1 className='projectName'>Project Name</h1>
                            <div className='projectInfo'>
                                <div className='infoAndLinks'>
                                    <div className='projectSummaryDiv'>
                                        <p>Test test test test test test test</p>
                                    </div>
                                    <div className='projectLinks'>
                                        <Button></Button>
                                    </div>
                                </div>
                                <div className='projectImageDiv'>
                                    <img></img>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h1 className='projectName'>Project Name</h1>
                            <div className='projectInfo'>
                                <div className='infoAndLinks'>
                                    <div className='projectSummaryDiv'>
                                        <p>Test test test test test test test</p>
                                    </div>
                                    <div className='projectLinks'>
                                        <Button></Button>
                                    </div>
                                </div>
                                <div className='projectImageDiv'>
                                    <img></img>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Projects