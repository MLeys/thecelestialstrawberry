import React from 'react';
import Fab from '@mui/material/Fab';

import ImageIcon from '../ImageIcon/ImageIcon';

export default function FloatingActionButton({ icon, time='0.5', scale='1.25', size=100, img='Images/symbols/cosmoStar_03.png', onClick }) {
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
    <Fab aria-label="custom-fab-icon"  sx={transitionStyle} onClick={() => onClick()}>
      {icon ? icon : <ImageIcon src={img} size={size} />}
    </Fab>
  );
};
