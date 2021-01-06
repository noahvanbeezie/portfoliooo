import React, {useState,useEffect} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import image1 from '../assets/img/71798196_10114345896654953_6945831496322121728_o.jpg'
import image2 from '../assets/img/be39725049b1bf0adf6bba530b0baedc.jpg'
import image3 from '../assets/img/retro-futuristic-synthwave-retrowave-styled-night-cityscape-with-sunset-background_148087-120.jpg'
import './AboutMe.css'


function AboutMe(){
    return(
        <div>
            <div className='aboutme'>
                <h1 className='amHeadText'>About Me</h1>
                <div className='amContainer'>
                    <div className='me'>
                        <p>I'm a junior level web-developer looking to learn new technologies, and build on current knowledge and understandings in the Development field.</p>
                        <p>I'm currently attending Utah Valley University and in the works of completing my Bachelor's degree in Computer Science, with the hopes of progressing onwards towards a Master's in Cyber Security.</p>
                        <p>In my free time you can find me playing video games, boxing, or attending a music event.</p>
                        
                    </div>
                    <div className='amImages'>
                        <Carousel className='carousel'>
                            <Carousel.Item interval={2000}
                            className='carouselImage'>
                                <img
                                className='amImage'
                                src={image1}/>
                            </Carousel.Item>
                            <Carousel.Item interval={2000}
                            className='carouselImage'>
                                <img
                                className='amImage'
                                src={image2}/>
                            </Carousel.Item>
                            <Carousel.Item interval={2000}
                            className='carouselImage'>
                                <img
                                className='amImage'
                                src={image3}/>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe