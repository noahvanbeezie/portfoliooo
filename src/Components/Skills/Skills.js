import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import JSIcon from '../assets/icons/jsicon.png'
import PythonIcon from '../assets/icons/pythonicon.png'
import HTMLCSSIcon from '../assets/icons/htmlcssicon.png'
import NodeJSIcon from '../assets/icons/nodejsicon.png'
import SassIcon from '../assets/icons/sassicon.png'
import MaterialUIIcon from '../assets/icons/materialuiicon.png'
import AxiosIcon from '../assets/icons/axiosicon.png'
import SocketIOIcon from '../assets/icons/socketioicon.png'
import './Skills.css'


function Skills(){
    return(
        <div className='skills'>
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
                                        <img className='techIcon'
                                             src={JSIcon}>
                                        </img>
                                        <h2 className='techName'>JavaScript</h2>
                                    </div>
                                    <div className='techHolder'>
                                        <img className='techIcon'
                                             src={PythonIcon}>
                                        </img>
                                        <h2 className='techName'>Python</h2>
                                    </div>
                                    <div className='techHolder'>
                                        <img className='techIcon'
                                             src={HTMLCSSIcon}>
                                        </img>
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
                                        <img className='techIcon'
                                             src={SassIcon}>
                                        </img>
                                        <h2 className='techName'>SASS</h2>
                                    </div>
                                    <div className='techHolder'>
                                        <img className='techIcon'
                                             src={MaterialUIIcon}>
                                        </img>
                                        <h2 className='techName'>MaterialUI</h2>
                                    </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <h1 className='skillsCarouselHead'>Back-End</h1>
                                <div className='carouselSkills'>
                                <div className='threeTechDiv'>
                                    <div className='techHolder'>
                                        <img className='techIcon'
                                             src={AxiosIcon}>
                                        </img>
                                        <h2 className='techName'>Axios</h2>
                                    </div>
                                    <div className='techHolder'>
                                        <img className='techIcon'
                                             src={NodeJSIcon}>
                                        </img>
                                        <h2 className='techName'>Node.JS</h2>
                                    </div>
                                    <div className='techHolder'>
                                        <img className='techIcon'
                                             src={SocketIOIcon}>
                                        </img>
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