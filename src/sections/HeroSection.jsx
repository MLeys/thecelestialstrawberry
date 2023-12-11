import React from "react";

import Box from '@mui/material/Box';

const heroImage = 'assets/Images/backgrounds/heroBackground.png'

export default function HeroSection() {
  const aspectRatio = 56.25; // padding-top hack to maintain aspect ratio of 16:9

  return (
    <Box
      id="hero-section"
      component={'section'}
      sx={{
        width: '100%',
        paddingTop: `${aspectRatio}%`, 
        position: 'relative',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${heroImage})`,
        backgroundPosition: 'center',
      }}
    />
  );
};