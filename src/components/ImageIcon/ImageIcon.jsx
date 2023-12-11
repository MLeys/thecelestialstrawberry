import React from 'react';
import Box from '@mui/material/Box';



function ImageIcon({ src, size = 24 }) {
  return (
    <Box
      component="img"
      src={`../../../assets/${src}`}
      sx={{
        width: size, 
        height: size, 
        objectFit: 'cover', 
      }}
    />
  );
}

export default ImageIcon;
