import React from 'react';
import theme from '../../theme';

import Box from '@mui/material/Box';

import FloatingActionButton from '../FloatingActionButton/FloatingActionButton';

const iconSize = 32;
const transitionTime = '0.3s'; 
const scale = '1.5';

const facebookLogo = './Images/logos/facebook.png';
const instragramLogo ='./Images/logos/instagram.png';
const tiktokLogo = './Images/logos/tiktok.png';

const facebookLink = 'https://www.facebook.com/thecelestialstrawberry';
const instagramLink = 'https://www.instagram.com/thecelestialstrawberry';
const tiktokLink = 'https://www.tiktok.com/@thecelestialstrawberry';

export default function FloatingActionBar() {
  const handleIconClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <Box sx={{
      position: 'fixed', 
      bottom: '35%', 
      right: theme.spacing(1), 
      transform: 'translateY(50%)', 
      display: 'flex',
      flexDirection: 'column',
      m: 0,
      p:0,
      gap: theme.spacing(1), 
      zIndex: 1201 
    }}>
      <FloatingActionButton 
        img={facebookLogo} time={transitionTime} scale={scale} size={iconSize}
        onClick={() => handleIconClick(facebookLink)}
      />
      <FloatingActionButton 
        img={instragramLogo} time={transitionTime} scale={scale} size={iconSize}
        onClick={() => handleIconClick(instagramLink)}
      />
      <FloatingActionButton 
        img={tiktokLogo}  time={transitionTime} scale={scale} size={iconSize}
        onClick={() => handleIconClick(tiktokLink)}
      />
    </Box>
  );
};
