import React from "react";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const heroImage = [
  'https://imgur.com/lo5nT3S.png',
  'https://imgur.com/8jpwN9M.png',
  'https://imgur.com/jnxducr.png',
  'https://imgur.com/uex9Nez.png',
  'https://imgur.com/77F5TCF.png',
  'https://imgur.com/georPnJ.png',
  'https://imgur.com/448Bu3s.png',
]

export default function HeroSection() {
  function FadeBackground({opacity} ) {
    return (
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,

          opacity: opacity, 
          zIndex: 92,
        }}
      />
    )
  }
  
  const backgroundImage =
    'https://i.imgur.com/JIgcpzR.png';
  

  return (  
    <>

      <Box
        sx={{
          mb: 5,
          width: '100%',
          height: '70dvh',
          minHeight: '100%',
          position: 'relative',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${heroImage[5]})`,
          backgroundColor: '#4d2e00', 
          backgroundPosition: 'center',
        }}
      />
      

    </>
  );
};