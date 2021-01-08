import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Button from '@material-ui/core/Button'
import CardMedia from '@material-ui/core/CardMedia'
import GitHubIcon from '@material-ui/icons/GitHub'
import GauntletVideo from '../assets/videos/TheGauntletDemo.mp4'
import BoardgameVideo from '../assets/videos/BoardGamesDemo.mp4'
import { makeStyles } from '@material-ui/core/styles'
import './Projects.css'

function Projects(){

    const styles = makeStyles({
        projectButton:{
            position:'relative',
            top:'10%',
            width:'100%',
            height:'90%',
            backgroundColor:'#ff5a5f',
            fontSize:'30px',
            '&:hover': {
                backgroundColor: '#ff5a5f'
            }
    
        }


    })
    const style = styles()

    return(
        <div className='projects'>
            <div className='projectsNameDiv'>
                <h1 className='projectsHead'>Projects</h1>
            </div>
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
                                        <p>The application is a game website, with working Authentication and DataBase data for the users game runs. The biggest challenge I faced in this project was setting up the game engine, and this helped me build upon my understandings of basic logic-gates and conditional rendering.</p>
                                    </div>
                                    <div className='projectLinks'>
                                        <Button 
                                            className={style.projectButton}
                                            href='https://github.com/noahvanbeezie/Personal-Project-The-Gauntlet'
                                            target = "_blank" 
                                            rel = "noopener noreferrer">
                                                <GitHubIcon/>
                                                GitHub
                                            </Button>
                                    </div>
                                </div>
                                <div className='projectVideoDiv'>
                                    <video className='projectVideo'
                                           controls>
                                        <source
                                            type='video/mp4'
                                            src={GauntletVideo}
                                            />
                                    </video>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h1 className='projectName'>Board-Game App</h1>
                            <div className='projectInfo'>
                                <div className='infoAndLinks'>
                                    <div className='projectSummaryDiv'>
                                        <p>
                                            This was my group project that I helped create while attending DevMountain.
                                        </p>
                                        <p>
                                            It was created using:
                                            JavaScript, React, NodeJS, React Redux, Axios,
                                            PostgreSQL, and SocketIO 
                                        </p>
                                        <p>
                                            This App is a hosting site for Board-Games, and the games we were able to complete within the two week time frame were Chess and Tic-Tac-Toe.
                                        </p>
                                        <p>
                                            My primary contribution to the group project was learning how to use Socket.IO, and how to integrate it into our app to allow multiplayer play.
                                        </p>
                                        <p>
                                            One of the major challenges that presented itself during this group project was that it was completed from home, as Covid-19 created a situation where we were no longer able to attend class. This proved challenging initially, but was a great experience in learning how to communicate each others tasks and goals for the day. 
                                        </p>
                                    </div>
                                    <div className='projectLinks'>
                                    <Button className={style.projectButton}
                                            href='https://github.com/Board-Game-Group-Project/Boardgames'
                                            target = "_blank" 
                                            rel = "noopener noreferrer">
                                                <GitHubIcon/>
                                                GitHub
                                        </Button>
                                    </div>
                                </div>
                                <div className='projectVideoDiv'>
                                <video className='projectVideo'
                                           controls>
                                        <source
                                            type='video/mp4'
                                            src={BoardgameVideo}
                                            />
                                    </video>
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