import React, { useState } from 'react';
import theme from "../../theme";

import Box from '@mui/material/Box';

import HeroSection from "../../sections/HeroSection";
import IntroSection from "../../sections/IntroSection";
import ProductsSection from "../../sections/ServicesSection";


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