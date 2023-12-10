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
import AboutCard from '../../components/AboutCard/AboutCard';


function LandingPage() {

  return (  
    <Box >

      <FloatingActionBar />
      <HeroSection />
      <IntroSection />
      <AboutCard />
      <ServicesSection id='services'/>
      {/* <ProductsSection /> */}
      

    </Box>
  );
}

export default LandingPage;