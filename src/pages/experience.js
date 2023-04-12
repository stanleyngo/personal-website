import { useState } from 'react';
import styles from './intro.module.css';
import { Button, Modal } from '@mui/material';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import { Inter } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export default function Experience() {

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
        <div style = {{width: '100%', height: '100%'}}>
            <div className = {styles.experience}>
                <div className = {styles.experienceContent}>
                    <h1> some of my experiences and projects: </h1>
                    <p> (click for more information) </p>
                </div>
                <div className = {styles.experienceButtonsContainer}>
                    <Button
                        className={styles.experienceButtons}
                        style = {{ color: 'white' }}
                        variant="contained"
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
                        <Image src="/pearsonblacklogo.png" alt="button 1" width="500" height="500"/>
                    </Button>
                    <Button
                        className={styles.experienceButtons}
                        style = {{ color: 'white' }}
                        variant="contained"
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
                        <Image src="/logo.png" alt="button 2" width="500" height="500"/>
                    </Button>
                    <Button
                        className={styles.experienceButtons}
                        style = {{ color: 'white' }}
                        variant="contained"
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
                        <Image src="/mlh.png" alt="button 3" width="500" height = "500"/>
                    </Button>
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
    )
}