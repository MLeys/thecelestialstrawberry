import React from "react";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


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
          backgroundColor: 'common.black',
          opacity: opacity, 
          zIndex: 1,
        }}
      />
    )
  }
  
  const backgroundImage =
    'https://i.imgur.com/JIgcpzR.png';
  

  return (  
    <Container
      sx={{
        position: 'relative',
        minHeight: '80vh',
      }} 
    >
      <FadeBackground opacity='0.5' />
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
          margin: 0,
          backgroundImage: `url(${backgroundImage})`,
          backgroundColor: '#4d2e00', 
          backgroundPosition: 'center',
        }}
      />
      

    </Container>
  );
};