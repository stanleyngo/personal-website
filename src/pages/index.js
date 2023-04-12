import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Intro from './Intro.js';
import Links from './links.js';
import Experience from './experience.js';
import FullSite from './fullSite.js';
import styles from './intro.module.css';

export default function Home() {
  const [ scrollCount, setScrollCount ] = useState(0);

  const handleScroll = (direction) => {
    if (direction == 'up') {
      setScrollCount(scrollCount - 1);
    }
    else {
      setScrollCount(scrollCount + 1);
    }
  };


  return (
    <div className = {styles.mainContainer}>
      <div className = {styles.scrollButtonsContainer}>
      { scrollCount != 0 && <Button className = {styles.scrollButtons} style = {{ color: 'white'}} onClick = {() => handleScroll("up")} startIcon = {<ArrowUpwardIcon />}>
      </Button> }
      { scrollCount != 3 && <Button className = {styles.scrollButtons} style = {{ color: 'white'}} onClick = {() => handleScroll("down")} startIcon = {<ArrowDownwardIcon />}>

      </Button> }
      </div>
      { scrollCount == 0 && <Intro />}
      { scrollCount == 1 && <Links />}
      { scrollCount == 2 && <Experience />}
      { scrollCount == 3 && <FullSite />}
    </div>
  )
}
