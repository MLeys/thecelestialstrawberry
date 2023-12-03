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
import IntroSection from "../../sections/IntroSection";


function LandingPage() {
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  return (  
    <Box
      sx={{
        width: `calc(100dvw - ${scrollbarWidth}px)`, // Adjusted for scrollbar width
        mx: 0,
        px: 0,
        mt: 4,
        zIndex: 0,
        backgroundImage: `url("https://i.imgur.com/9ILrB9k.png")`, // Corrected syntax
        backgroundSize: '99dvw',
        backgroundRepeat: 'repeat', // Optional: Prevent repeating the image
        backgroundPosition: 'top', // Optional: Center the image
        opacity: 0.8,
        height: '150dvh'
      }}
    >
      <IntroSection />


    </Box>
  );
}

export default LandingPage;