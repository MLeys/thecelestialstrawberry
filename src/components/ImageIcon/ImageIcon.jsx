import React from 'react';
import Box from '@mui/material/Box';

function ImageIcon({ src, size = 24 }) {
  return (
    <Box
      component="img"
      src={src}
      sx={{
        width: size, // Icon width
        height: size, // Icon height
        objectFit: 'cover', // Keeps the image aspect ratio
      }}
    />
  );
}

export default ImageIcon;
