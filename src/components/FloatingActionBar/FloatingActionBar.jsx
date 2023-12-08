import React from 'react';
import theme from '../../theme';

import Box from '@mui/material/Box';

import { FacebookIcon, InstagramIcon, TikTokIcon } from '../../assets/icons';
import FloatingActionButton from '../FloatingActionButton/FloatingActionButton';

export default function FloatingActionBar() {
  const iconSize = 24;
  const transitionTime = '0.3s'; 
  const scale = '1.5'



  return (
    <Box sx={{
      position: 'fixed', 
      bottom: '35%', 
      right: theme.spacing(0), 
      transform: 'translateY(50%)', 
      display: 'flex',
      flexDirection: 'column',
      m: 0,
      p:0,
      gap: theme.spacing(0), 
      zIndex: 1201 
    }}>
      <FloatingActionButton icon={<FacebookIcon size={iconSize} color='blue'  />}/>
      <FloatingActionButton icon={<TikTokIcon size={iconSize} color='purple'  />}/>
      <FloatingActionButton icon={<InstagramIcon size={iconSize} color='green'  />}/>

      {/* <FloatingActionButton time={transitionTime} scale={scale} size={iconSize} />
      <FloatingActionButton time={transitionTime} scale={scale} size={iconSize}  img='Images/symbols/naturalHealing_02e.png' />
      <FloatingActionButton time={transitionTime} scale={scale} size={iconSize} img='Images/symbols/tarotMystic_03.png' /> */}
    </Box>
  );
};
