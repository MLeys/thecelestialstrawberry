import React from "react";
import theme from "../../theme";

import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import HeroSection from "../../sections/HeroSection";
import IntroSection from "../../sections/IntroSection";


function LandingPage() {
  return (  
    <Box
      sx={{
        m: 0,
        p: 0,
        // zIndex: -1000,
        // backgroundImage: `url("https://i.imgur.com/gq3EMyS.png")`, // Corrected syntax
        // backgroundSize: '100dvw auto',
        // backgroundRepeat: 'repeat', // Optional: Prevent repeating the image
        // backgroundPosition: 'top', // Optional: Center the image
        // opacity: 0.8

      }}
    >
      <HeroSection />

      <IntroSection />


    </Box>
  );
}

export default LandingPage;