import { useState, useEffect } from 'react';
import styles from './intro.module.css';
import { Montserrat } from 'next/font/google';
import { Inter } from 'next/font/google';
import { Button, List, ListItem, ListItemText } from '@mui/material';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const montserrat = Montserrat({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export default function Intro() {
    const [ showIntro, setShowIntro ] = useState(false);
    const [ showButton, setShowButton ] = useState(false);
    const [ showList, setShowList ] = useState(false);

    useEffect(() => {
        setShowIntro(true);
        setTimeout(() => {
            setShowButton(true);
        }, 1000);
    }, []);

    const handleClick = () => {
        setShowList(!showList);
    };

    const handleClose = () => {
        setShowList(null);
    };

    return (
        <div className = {styles.intro + ' ' + (showIntro ? styles.visible : ' ')}>
            <div className = {styles.content}>
                <div className= {montserrat.className}>
                    <h1>hi, i&apos;m Stanley Ngo</h1>
                    <p>call me Stanley or Stan :)</p>
                    <p>reach me at: stanleyhngo@gmail.com</p>
                </div>
            </div>
            <div className = {`${styles.hidden} ${showButton ? styles.fadeIn : ''}`}>
                <Button 
                className = {styles.Button}
                endIcon = {<ArrowDropDownIcon/>}
                onClick = {handleClick}
                onClose = {handleClose}>
                    <div className= {montserrat.className}>
                        want to learn more about me?
                    </div>
                </Button>
                <div>
                {showList && (
                    <List className = {styles.listContainer}>
                        <ListItem className = {styles.listItem}>
                            <ListItemText primary = {<span className = {styles.listItemText}> graduating in May 2023 from UMass Amherst with a B.S in Computer Science </span>}/>
                        </ListItem>
                        <ListItem className = {styles.listItem}>
                            <ListItemText primary = {<span className = {styles.listItemText}>  accepted a return offer to work at Pearson as a software developer </span>}/>
                        </ListItem>
                        <ListItem className = {styles.listItem}>
                            <ListItemText primary = {<span className = {styles.listItemText}>  currently working as a developer but open to branching out </span>}/>
                        </ListItem>
                        <ListItem className = {styles.listItem}>
                            <ListItemText primary = {<span className = {styles.listItemText}> based in Quincy, MA </span>}/>
                        </ListItem>
                    </List>
                )}
                </div>
            </div>
        </div>
    );
}