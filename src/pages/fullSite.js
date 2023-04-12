import styles from './intro.module.css';
import React from 'react';
import { useState } from 'react';
import { Button, Modal, AppBar, Toolbar, Typography, Box } from '@mui/material';
import Image from 'next/image';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import { Montserrat } from 'next/font/google';
import { Inter } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export default function FullSite() {

    const [open, setOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const handleOpen = (content) => {
        setModalContent(content);
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    
    return (
        <div style = {{width: '100%', minHeight: '100vh'}}>
            <div className = {styles.fullSite}>
                <AppBar position="relative" style = {{ display: 'flex', backgroundColor: 'black', height: 150}}>
                    <Toolbar style = {{ justifyContent: 'center', flexDirection: 'column', position: 'relative'}}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography variant="h3" align = "center">
                                stanley ngo
                            </Typography>
                            <Typography variant = "subtitle2" align = "center" style = {{paddingBottom: '5px'}}>
                                stanleyhngo@gmail.com
                            </Typography>
                        </div>
                        <div className = {styles.topBarButtonsContainer}>
                            <a href="https://github.com/stanleyngo" target="_blank" rel="noopener noreferrer">
                                <Button className = {styles.topBarButtons} variant = "contained" style = {{ color: 'white', backgroundColor: 'black'}} startIcon = {<GitHubIcon />}>
                                    Github
                                </Button>
                            </a>
                            <a href="https://www.linkedin.com/in/stanley-ngo-b64364217/" target="_blank" rel="noopener noreferrer">
                                    <Button className = {styles.topBarButtons} variant = "contained" style = {{ color: 'white', backgroundColor: 'black'}} startIcon = {<LinkedinIcon />}>
                                        Linkedin
                                    </Button>
                            </a>
                            <a href = "mailto: stanleyhngo@gmail.com">
                                    <Button className = {styles.topBarButtons} variant = "contained" style = {{ color: 'white', backgroundColor: 'black'}} startIcon = {<EmailIcon />}>
                                        Contact me
                                    </Button>
                            </a>
                        </div>
                    </Toolbar>
                </AppBar>
                <div style={{ marginLeft: '15%', paddingTop: '2rem' }}>
                    <Typography variant="h4" style={{ fontWeight: 'bold', paddingBottom: '50px' }}>
                        hey, i&apos;m Stanley Ngo.
                    </Typography>
                    <Typography variant="body1">
                        I&apos;m graduating with a Computer Science degree from UMass Amherst in May 2023.
                        <Typography variant="body1" component="span" style={{ display: 'block' }}>
                            Currently, I&apos;ve accepted a return offer to work as a Software Developer for Pearson.
                        </Typography>
                        <Typography variant="body1" component="span" style={{ display: 'block' }}>
                            I&apos;m working as a developer right now, but open to branching out and trying new related fields.
                        </Typography>
                        <Typography variant="body1" component="span" style={{ display: 'block', paddingBottom: '100px' }}>
                            Based in Quincy, MA.
                        </Typography>
                    </Typography>

                    <Typography variant = "h5" style = {{fontWeight: 'bold', paddingBottom: '20px'}}>
                        here&apos;s some of my experience.
                    </Typography>
                    <div style = {{display: 'flex', flexDirection: 'row'}}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        bgcolor="#transparent"
                        width= "350px"
                        height = "350px"
                        p={2}
                        borderRadius= "25px"
                    >
                        <Button
                            className={styles.siteButtons}
                            bgcolor = "white"
                            variant="contained"
                            style={{ width: "100%", height: "100%", backgroundColor: "gray" }}
                            onClick={() =>
                                handleOpen(
                                    <div style = {{width: '100%', height: '100%'}}>
                                        <div className = {styles.modalContentTop}>
                                            <div className = {styles.modalImageContainer}>
                                                <Image src="/bigpearsonlogo.png" alt="button 1" width="450" height = "450"></Image>
                                            </div>
                                        </div>
                                        <div className = {styles.modalContentBottom}>
                                            <div style = {{ fontWeight: 'bold', paddingBottom: 5}} className = {montserrat.className}>
                                                <h1> Pearson </h1>
                                                <h2> Software Developer Intern </h2>
                                            </div>
                                            <div className = {inter.className}>
                                                <p>Worked as a Software Developer intern at Pearson in the summer of 2022.
                                                    During this time, I used React and Java to complete an intern specific project
                                                    along with picking up tickets during multiple sprints. Also got experience with
                                                    technologies like Postman and Jenkins. Before I left, I had multiple features pushed to prod.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        >
                            <Image src="/bigpearsonlogo.png" alt="button 1" width="150" height="150"/>
                        </Button>
                    </Box>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        bgcolor="#transparent"
                        width= "350px"
                        height ="350px"
                        p={2}
                        borderRadius= "25px"
                    >
                        <Button
                            className={styles.siteButtons}
                            variant="contained"
                            style={{ width: "100%", height: "100%", backgroundColor: "gray" }}
                            onClick={() =>
                                handleOpen(
                                    <div style = {{width: '100%', height: '100%'}}>
                                        <div className = {styles.modalContentTop}>
                                            <div className = {styles.modalImageContainer}>
                                                <Image src="/hum.png" alt="button 2" width="450" height = "450"></Image>
                                            </div>
                                        </div>
                                        <div className = {styles.modalContentBottom}>
                                            <div style = {{ fontWeight: 'bold', paddingBottom: 5}} className = {montserrat.className}>
                                                <h1> HackUMass IX and HackUMass X </h1>
                                                <h2> Participant </h2>
                                            </div>
                                            <div className = {inter.className}>
                                                <p>For HackUMass IX, created a web app that allowed users to input fitness goals and calories.
                                                    Intended to display their daily stats along with tables sand references for achieving their goals.
                                                    For HackUMass X, created a web app that served as a lost and found table along with a working interactive map of campus.
                                                    Both used MongoDB databases and React with Axios. Both worked on in a group of 4.
                                                </p>
                                            </div>
                                            <div style = {{paddingBottom: 5}}>
                                                <p>A demo of the HackUMass X project: <a href = "https://www.youtube.com/watch?v=JTh-ve-GHIc" style = {{color: 'blue'}}>https://www.youtube.com/watch?v=JTh-ve-GHIc</a></p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        >
                            <Image src="/logo.png" alt="button 2" width="150" height="150"/>
                        </Button>
                    </Box>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        bgcolor="#transparent"
                        width= "350px"
                        height = "350px"
                        p={2}
                        borderRadius= "25px"
                    >
                        <Button
                            className={styles.siteButtons}
                            variant="contained"
                            style={{ width: "100%", height: "100%", backgroundColor: "gray" }}
                            onClick={() =>
                                handleOpen(
                                    <div style = {{width: '100%', height: '100%'}}>
                                        <div className = {styles.modalContentTop}>
                                            <div className = {styles.modalImageContainer}>
                                                <Image src="/mlh-logo-color.png" alt="button 3" width="450" height = "450"></Image>
                                            </div>
                                        </div>
                                        <div className = {styles.modalContentBottom}>
                                            <div style = {{ fontWeight: 'bold', paddingBottom: 5}} className = {montserrat.className}>
                                                <h1> Major League Hacker Hackathons </h1>
                                                <h2> Participant </h2>
                                            </div>
                                            <div className = {inter.className}>
                                                <p> Competed in hackathons associated with MLH including SigmaHacks 3.
                                                    For SigmaHacks 3, created an Apple app with Swift that tracked how much
                                                    a user recycled in a day.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        >
                            <Image src="/mlh.png" alt="button 3" width="150" height = "150"/>
                        </Button>
                    </Box>
                    </div>
                </div>
            </div>
            <Modal 
            open = {open} 
            onClose = {handleClose}
            >
                <div className = {styles.modalContentContainer}>
                    <div className = {styles.modalContent}>{modalContent}</div>
                </div>
            </Modal>
        </div>
    );
}