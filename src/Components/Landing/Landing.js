import React,{useState} from 'react'
import Header from '../Header/Header'
import AboutMe from '../AboutMe/AboutMe'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import './Landing.css'


function Landing(){
    return(
        <div>
            <Header/>
            <AboutMe/>
            <Skills/>
            <Projects/>
            {/* <Contact/> */}
        </div>
    )
}

export default Landing