import React from 'react';
import theme from '../../theme';

import Box from '@mui/material/Box';

import { FacebookIcon, InstagramIcon, TikTokIcon } from '../../assets/icons';
import FloatingActionButton from '../FloatingActionButton/FloatingActionButton';

export default function FloatingActionBar() {
  const handleIconClick = (url) => {
    window.open(url, '_blank');
  };

  const iconSize = 32;
  const transitionTime = '0.3s'; 
  const scale = '1.5';


  const facebookLogo = 'Images/logos/facebook.png';
  const instragramLogo ='Images/logos/instagram.png';
  const tiktokLogo = 'Images/logos/tiktok.png';



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
        onClick={() => handleIconClick('https://www.facebook.com/username')}
      
      />
      <FloatingActionButton 
        img={instragramLogo} time={transitionTime} scale={scale} size={iconSize}
        onClick={() => handleIconClick('https://www.tiktok.com/@thecelestialstrawberry')}
      />
      <FloatingActionButton 
      img={tiktokLogo}  time={transitionTime} scale={scale} size={iconSize}
      onClick={() => handleIconClick('https://www.instagram.com/thecelestialstrawberry')}
      />
    </Box>
  );
};
