import React from 'react';
import theme from '../../theme';

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom'; // Import Zoom for animation

import ImageIcon from '../ImageIcon/ImageIcon';

export default function FloatingActionBar() {
  

  return (  

    <Zoom in={true} timeout={300}>
      <Fab color="primary" aria-label="navigate" sx={{
        position: 'fixed', // Fixed position
        bottom: '50%', // Vertically in the middle
        right: theme.spacing(2), // 16px from the right edge
        transform: 'translateY(50%)' // Adjust vertical position
      }}>
        <ImageIcon src={'Images/symbols/cosmoStar_03.png'}  size={100}/> 
      </Fab>
    </Zoom>
  );
};
