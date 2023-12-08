import React, { useState, useEffect } from 'react';
import theme from "../../theme";

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

import FloatingActionBar from '../../components/FloatingActionBar/FloatingActionBar';
import HeroSection from "../../sections/HeroSection";
import IntroSection from "../../sections/IntroSection";
import ProductsSection from "../../sections/ServicesSection";


function LandingPage() {
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  

  return (  
    <Box id="landing-page" component={'div'} height={'100%'} width={'100%'} sx={{ my: { xs: 6, sm: 8, md: 10 } }}>
      
      <FloatingActionBar />
      <HeroSection />
      <IntroSection />
      <ProductsSection />
    </Box>
  );
}

export default LandingPage;