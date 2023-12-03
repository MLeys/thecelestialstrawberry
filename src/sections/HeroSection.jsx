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
          minHeight: '50dvh',
          position: 'relative',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${backgroundImage})`,
          backgroundColor: '#4d2e00', 
          backgroundPosition: 'center',
        }}
      />
      

    </>
  );
};