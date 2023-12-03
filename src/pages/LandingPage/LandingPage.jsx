import React from "react";
import theme from "../../theme";
import { styled } from '@mui/material/styles';


import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Box from '@mui/material/Box';

import HeroSection from "../../sections/HeroSection";
import IntroSection from "../../sections/IntroSection";

const calendar = 'https://calendly.com/mleys';

const backgrounds = [
  'https://imgur.com/georPnJ.png',
  'https://imgur.com/r2xMkjr.png',
  'https://imgur.com/Y60JE8H.png',
  'https://imgur.com/RBVZgs1.png',
  'https://imgur.com/xrN5Txk.png',
  '',
  '',
  '',
  '',
]

const mugs = [
  'https://imgur.com/Ne3BnBC.png',
  'https://imgur.com/LCJuYd6.png',
  'https://imgur.com/0nEeIL1.png',
  'https://imgur.com/cQL0UlU.png',
  'https://imgur.com/J9shfpC.png',
  'https://imgur.com/RQPeTMN.png',
  'https://imgur.com/u6wvZHc.png',
  'https://imgur.com/6Z7rwiK.png',
  'https://imgur.com/VvDnXMz.png',
  'https://imgur.com/n0TKKDk.png',
  '',
]


function LandingPage() {
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

  return (  
    <Box
      
      sx={{
        id: 'bg',
        mt: 4,
        width: `calc(100dvw - ${scrollbarWidth}px)`, // Adjusted for scrollbar width
        minHeight: '100%',
        overflowX: 'hidden',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute', // Absolute position to overlay on top of the parent Box
          top: 0,
          left: 0,
          width: '100%', // Full width of the parent Box
          minHeight: '100%', // Minimum height to cover the content
          zIndex: -1, // Places the overlay behind the main content
          // backgroundImage: 'url("https://i.imgur.com/9ILrB9k.png")',
          backgroundImage: `url(${backgrounds[4]})`, // Use template literals to insert the URL
          // backgroundImage: `url(${images[10]})`,
          backgroundSize: '100% auto', // Maintain full width, adjust height automatically
          backgroundRepeat: 'repeat-y', // Repeat background image vertically
          // Apply a darkening effect using a pseudo-element
          '&::before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)', // Dim the background with a semi-transparent overlay
            // zIndex: 'modal', // Ensure the overlay is behind all other content
          },
        }}
      />
      <Box 
        sx={{
          id: 'main-content',
          position: 'relative',
          zIndex: 1,
        }} 
      >
        <HeroSection />
        <IntroSection />
      </Box>
      
    </Box>
  );
}

export default LandingPage;