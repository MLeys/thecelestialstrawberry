import React from 'react';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

import ImageIcon from '../ImageIcon/ImageIcon';

export default function FloatingActionButton({ time='0.3', scale='1.25', size=100, img='Images/symbols/cosmoStar_03.png' }) {
  const transitionStyle = {
    transition: `transform ${time}s ease-in-out`,
    '&:hover': {
      transform: `scale(${scale})`,
      
    }
  };

  return (
    <Zoom in={true} timeout={300}>
      <Fab aria-label="custom-icon" sx={transitionStyle}>
        <ImageIcon src={img} size={size} />
      </Fab>
    </Zoom>
  );
};
