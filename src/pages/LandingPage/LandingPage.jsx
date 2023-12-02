import React from "react";
import theme from "../../theme";
import { styled } from '@mui/material/styles';

// Define the keyframes for the spinning animation
const spin = '@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }';

// Create a styled component for the strawberry with the spinning animation
const SpinningStrawberry = styled('img')({
  animation: `${spin} 2s infinite linear`,
});

import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import HeroSection from "../../sections/HeroSection";
import IntroSection from "../../sections/IntroSection";
import { Toolbar } from "@mui/material";


function LandingPage() {
  return (  
    <Box
      sx={{
        m: 0,
        p: 0,
        zIndex: 0,
        backgroundImage: `url("https://i.imgur.com/9ILrB9k.png")`, // Corrected syntax
        backgroundSize: '100dvw auto',
        backgroundRepeat: 'repeat', // Optional: Prevent repeating the image
        backgroundPosition: 'top', // Optional: Center the image
        opacity: 0.8,
        height: '150dvh'
      }}
    >
     <Toolbar />
      {/* <HeroSection /> */}
      {/* <SpinningStrawberry src="public/Images/tcs_logo_06.png" alt="Spinning Strawberry" /> */}
      <IntroSection />


    </Box>
  );
}

export default LandingPage;