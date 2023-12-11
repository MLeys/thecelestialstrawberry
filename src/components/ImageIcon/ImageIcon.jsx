import React from 'react';
import Box from '@mui/material/Box';
import { rootPath } from '../../../public/assets/rootPath';



function ImageIcon({ src, size = 24 }) {
  const imageLocation = `${rootPath}${src}`;

  return (
    <Box
      component="img"
      src={imageLocation}
      sx={{
        width: size, 
        height: size, 
        objectFit: 'cover', 
      }}
    />
  );
}

export default ImageIcon;
