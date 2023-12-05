import React, { useState } from 'react';
import theme from "../../theme";
import { styled } from '@mui/material/styles';


import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Box from '@mui/material/Box';

import HeroSection from "../../sections/HeroSection";
import IntroSection from "../../sections/IntroSection";
import ProductsSection from "../../sections/ServicesSection";

const calendar = 'https://calendly.com/mleys';
const bgColorCode = '#000d1b'


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
    <Box id="landing-page" component={'div'} height={'100%'} width={'100%'} sx={{ my: { xs: 6, sm: 8, md: 10 } }}>
      <HeroSection />
      <IntroSection />
      <ProductsSection />
    </Box>
  );
}

export default LandingPage;

// Dim background 
      {/* <Box
        sx={{
          position: 'absolute', 
          // top: 0,
          // left: 0,
          width: '100%',
          minHeight: '100%', 
          zIndex: -1, /
          // backgroundImage: 'url("https://i.imgur.com/9ILrB9k.png")',
          backgroundImage: `url(${backgrounds[4]})`, 
          backgroundSize: '100% auto', 
          backgroundRepeat: 'repeat-y',
          // Apply a darkening effect using a pseudo-element
          '&::before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)', 
            // zIndex: 'modal', 
          },
        }}
      /> */}