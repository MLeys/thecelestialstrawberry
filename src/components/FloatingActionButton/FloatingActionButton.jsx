import React from 'react';
import Fab from '@mui/material/Fab';

import ImageIcon from '../ImageIcon/ImageIcon';

export default function FloatingActionButton({ time='0.3', scale='1.25', size=100, img='Images/symbols/cosmoStar_03.png' }) {
  const transitionStyle = {
    backgroundColor: 'transparent',
    boxShadow: 'none', 
    transition: `transform ${time} ease-in-out`,
    '&:hover': {
      transform: `scale(${scale})`,
      backgroundColor: 'transparent',
      boxShadow: 'none', 
    },
    width: size, 
    height: size,
  };

  return (
    <Fab aria-label="custom-fab-icon"  sx={transitionStyle}>
      <ImageIcon src={img} size={size} />
    </Fab>
  );
};
