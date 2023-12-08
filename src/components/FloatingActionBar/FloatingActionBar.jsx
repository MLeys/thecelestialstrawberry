import React from 'react';
import theme from '../../theme';

import Box from '@mui/material/Box';

import FloatingActionButton from '../FloatingActionButton/FloatingActionButton';

export default function FloatingActionBar() {
  const iconSize = 100;
  const transitionTime = '5s';
  const scale = '1.5'
  


  return (
    <Box sx={{
      position: 'fixed', 
      bottom: '35%', 
      right: theme.spacing(4), 
      transform: 'translateY(50%)', 
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(5), 
      zIndex: 1201 
    }}>

      <FloatingActionButton time={transitionTime} scale={scale} size={iconSize} />
      <FloatingActionButton time={transitionTime} scale={scale} size={iconSize}  img='Images/symbols/naturalHealing_02e.png' />
      <FloatingActionButton time={transitionTime} scale={scale} size={iconSize} img='Images/symbols/tarotMystic_03.png' />
    </Box>
  );
};
