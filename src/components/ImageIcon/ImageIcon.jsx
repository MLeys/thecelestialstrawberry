import React from 'react';
import Box from '@mui/material/Box';
import { selectedIcon } from './ImageIcon'; 


function ImageIcon({ src, size = 24 }) {
  return (
    <Box
      component="img"
      src={require(`../../../assets/${src}`).default}
      sx={{
        width: size, 
        height: size, 
        objectFit: 'cover', 
      }}
    />
  );
}

export default ImageIcon;
