import React from 'react';

import Box from '@mui/material/Box';
import FloatingActionBar from '../../components/FloatingActionBar/FloatingActionBar';
import HeroSection from "../../sections/HeroSection";
import IntroSection from "../../sections/IntroSection";
import ServicesSection from '../../sections/ServicesSection';
import AboutCard from '../../components/AboutCard/AboutCard';
import TestimonialSection from '../../sections/TestimonialSection';

function LandingPage() {

  return (  
    <Box sx={{ id: 'landing-page'}}>
      <FloatingActionBar />
      <HeroSection />
      <IntroSection />
      <AboutCard />
      <ServicesSection />
      <TestimonialSection />
    </Box>
  );
}

export default LandingPage;