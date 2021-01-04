import React, {useState} from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Link from '@material-ui/core/Link'
import Divider from '@material-ui/core/Divider'
import EmailIcon from '@material-ui/icons/Email'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import './Contact.css'

function Contact(){
    return(
        <div className='contact'>
            <List>
                <Divider/>
                <ListItem>
                    <ListItemIcon>
                        <EmailIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        <Link 
                            rel="noopener"
                            href='mailto:noahvanbeezie@gmail.com'
                            target='_blank'
                        >
                            Email
                        </Link>
                    </ListItemText>
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemIcon>
                        <GitHubIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        <Link 
                            rel="noopener"
                            href='https://github.com/noahvanbeezie'
                            target='_blank'
                        >
                            GitHub
                        </Link>
                    </ListItemText>
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemIcon>
                        <LinkedInIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        <Link 
                            rel="noopener"
                            href='https://www.linkedin.com/in/noah-van-buskirk-221762161/'
                            target='_blank'
                        >
                            LinkedIn
                        </Link>
                    </ListItemText>
                </ListItem>
            </List>
            
        </div>
    )
}

export default Contact