import React, { useState } from 'react'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Contact from '../Contact/Contact'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import MenuIcon from '@material-ui/icons/Menu'
import MenuOpenIcon from '@material-ui/icons/MenuOpen'
import PanToolTwoToneIcon from '@material-ui/icons/PanToolTwoTone'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople'
import ComputerTwoToneIcon from '@material-ui/icons/ComputerTwoTone'
import AccountTreeTwoToneIcon from '@material-ui/icons/AccountTreeTwoTone'
import './Nav.css'


function Nav(){
    const styles = makeStyles({
        navButton:{
            // backgroundColor:'yellow',
            width:'20px',
            height:'70px',
            // borderRadius:'50%'
        }
    })
    const style = styles()

    const [isNavOpen,setIsNavOpen] = useState(false)

    function toggleNav(){
        setIsNavOpen(!isNavOpen)
    }
    
    return(
        <div>
            <div className='nav'>
                {isNavOpen === false && (
                    <Button
                        className={style.navButton}
                        onClick={() => toggleNav()}>
                                <MenuIcon className='icon'/>
                    </Button>
                    )}
                <Drawer
                    variant="persistent"
                    anchor="right"
                    open={isNavOpen}
                >
                    <Button onClick={() => toggleNav()}>
                    <MenuOpenIcon/>
                    </Button>
                    <List>
                        <Divider/>
                            <ListItem 
                                button
                                onClick={() => scroll.scrollTo(0)}>
                                <ListItemIcon>
                                    <PanToolTwoToneIcon/>
                                </ListItemIcon>
                                <ListItemText>Intro</ListItemText>
                            </ListItem>
                        <Divider/>
                            <ListItem 
                                button
                                onClick={() => scroll.scrollTo(800)}>
                                <ListItemIcon>
                                    <EmojiPeopleIcon/>
                                </ListItemIcon>
                                <ListItemText>About Me</ListItemText>
                            </ListItem>
                        <Divider/>
                            <ListItem 
                                button
                                onClick={() => scroll.scrollTo(1700)}>
                                <ListItemIcon>
                                    <ComputerTwoToneIcon/>
                                </ListItemIcon>
                                <ListItemText>Skills</ListItemText>
                            </ListItem>
                        <Divider/>
                            <ListItem 
                                button
                                onClick={() => scroll.scrollTo(2700)}>
                                <ListItemIcon>
                                    <AccountTreeTwoToneIcon/>
                                </ListItemIcon>
                                <ListItemText>Projects</ListItemText>
                            </ListItem>
                        <Divider/>
                    </List>
                    <Contact/>
                </Drawer>
            </div>
        </div>
    )
}

export default Nav