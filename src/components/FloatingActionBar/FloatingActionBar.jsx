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
      position: 'fixed', // Fixed position for the entire box
      bottom: '35%', // Vertically in the middle
      right: theme.spacing(4), // 16px from the right edge
      transform: 'translateY(50%)', // Adjust vertical position
      display: 'flex', // Use flexbox
      flexDirection: 'column', // Align children vertically
      gap: theme.spacing(5), // Increase gap between buttons
      zIndex: 1201 // Higher than most other elements
    }}>
      
      <FloatingActionButton time={transitionTime} scale={scale} size={iconSize} />
      <FloatingActionButton time={transitionTime} scale={scale} size={iconSize}  img='Images/symbols/naturalHealing_02e.png' />
      <FloatingActionButton time={transitionTime} scale={scale} size={iconSize} img='Images/symbols/tarotMystic_03.png' />
    </Box>
  );
};
