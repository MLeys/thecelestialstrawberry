import React, { useState } from 'react';
import theme from "../../theme";

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

import FloatingActionBar from '../../components/FloatingActionBar/FloatingActionBar';
import HeroSection from "../../sections/HeroSection";
import IntroSection from "../../sections/IntroSection";
import ProductsSection from "../../sections/ServicesSection";
import ServicesSection from '../../sections/ServicesSection';
import Footer from '../../components/Footer/Footer';



function LandingPage() {
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

  return (  
    <Box sx={{ mt: { xs: 5.5, sm: 8, md: 10 } }}>
      
      <FloatingActionBar />
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      {/* <ProductsSection /> */}
      

    </Box>
  );
}

export default LandingPage;