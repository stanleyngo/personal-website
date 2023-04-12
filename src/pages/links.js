import { Button } from '@mui/material';
import { Link, BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import styles from './intro.module.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function Links() {
    const [ showLinks, setShowLinks ] = useState(false);

    useEffect(() => {
        setShowLinks(true);
    }, []);

    return (
        <div className = {styles.links}>
            <div className = {`${styles.hidden} ${showLinks ? styles.linksContent : ''}`}>
                <div className = {inter.className}>
                    <h1>feel free to check out these links: </h1>
                    <div className = {styles.buttonsContainer}>
                        <a href="https://github.com/stanleyngo" target="_blank" rel="noopener noreferrer">
                            <Button className = {styles.linkButtons} variant = "contained" style = {{ backgroundColor: 'black'}} startIcon = {<GitHubIcon />}>
                                Github
                            </Button>
                        </a>
                        <a href="https://www.linkedin.com/in/stanley-ngo-b64364217/" target="_blank" rel="noopener noreferrer">
                            <Button className = {styles.linkButtons} variant = "contained" style = {{ backgroundColor: 'black'}} startIcon = {<LinkedinIcon />}>
                                Linkedin
                            </Button>
                        </a>
                        <a href = "mailto: stanleyhngo@gmail.com">
                            <Button className = {styles.linkButtons} variant = "contained" style = {{ backgroundColor: 'black'}} startIcon = {<EmailIcon />}>
                                Contact me
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}