import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Link from '@material-ui/core/Link'
import GitHubIcon from '@material-ui/icons/GitHub'
import './Projects.css'

function Projects(){
    return(
        <div className='projects'>
            <div className='projectsDiv'>
                <div className='projectsCarousel'>
                    <Carousel>
                        <Carousel.Item>
                            <h1 className='projectName'>The Gauntlet</h1>
                            <div className='projectInfo'>
                                <div className='infoAndLinks'>
                                    <div className='projectSummaryDiv'>
                                        <p>This was my Solo-Project that I completed while attending DevMountain.
                                        </p>
                                        <p>It was created using:
                                        JS, React, NodeJS, React Redux, Axios, 
                                        PostgreSQL, ChartJS, and Sass.</p>
                                        <p>The application is a game website, with working Authentication and DataBase data for the users game runs. The biggest challenge I faced in this project was setting up the game engine, and helped me build upon my understandings of basic logic-gates and conditional rendering.</p>
                                    </div>
                                    <div className='projectLinks'>
                                        <Link 
                                            href='https://github.com/noahvanbeezie/Personal-Project-The-Gauntlet'
                                            rel="noopener"
                                            target='_blank'>
                                                <GitHubIcon/>
                                                GitHub
                                        </Link>
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
                                        <Link></Link>
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