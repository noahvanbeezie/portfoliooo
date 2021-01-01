import React, { useState } from 'react'
import Contact from '../Contact/Contact'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ToggleOffIcon from '@material-ui/icons/ToggleOff'
import ToggleOnIcon from '@material-ui/icons/ToggleOn'
import './Nav.css'


function Nav(){
    const styles = makeStyles({
        navButton:{
            backgroundColor:'yellow',
            width:'10px',
            height:'70px',
            borderRadius:'50%'
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
                                <ToggleOffIcon/>
                    </Button>
                    )}
                <Drawer
                    variant="persistent"
                    anchor="right"
                    open={isNavOpen}
                >
                    <Button onClick={() => toggleNav()}>
                    <ToggleOnIcon/>
                    </Button>
                    <List>
                        <Divider/>
                            <ListItem button>
                                <ListItemIcon>
                                    <ToggleOnIcon/>
                                </ListItemIcon>
                                <ListItemText>Intro</ListItemText>
                            </ListItem>
                        <Divider/>
                            <ListItem button>
                                <ListItemIcon>
                                    <ToggleOnIcon/>
                                </ListItemIcon>
                                <ListItemText>About Me</ListItemText>
                            </ListItem>
                        <Divider/>
                            <ListItem button>
                                <ListItemIcon>
                                    <ToggleOnIcon/>
                                </ListItemIcon>
                                <ListItemText>Skills</ListItemText>
                            </ListItem>
                        <Divider/>
                            <ListItem button>
                                <ListItemIcon>
                                    <ToggleOnIcon/>
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