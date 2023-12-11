import React from 'react';
import Box from '@mui/material/Box';
import { rootPath } from '../../../public/assets/rootPath';



function ImageIcon({ src, size = 24 }) {
  const imageLocation = `${rootPath}/symbols/${src}`;
  console.log(imageLocation, "Icon Image Location");

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
