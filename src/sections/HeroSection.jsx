import React from "react";

import Box from '@mui/material/Box';

const heroImage = [
  'https://imgur.com/lo5nT3S.png',
  'https://imgur.com/8jpwN9M.png',
  'https://imgur.com/jnxducr.png',
  'https://imgur.com/uex9Nez.png',
  'https://imgur.com/77F5TCF.png',
  'https://imgur.com/georPnJ.png',
  'https://imgur.com/448Bu3s.png',
]

export default function HeroSection() {
  const aspectRatio = 56.25; // padding-top hack to keep image whole dynamically

  return (
    <Box
      id="hero-section"
      component={'section'}
      sx={{
        mb: 5,
        width: '100%',
        paddingTop: `${aspectRatio}%`, // This creates the aspect ratio
        position: 'relative',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${heroImage[5]})`,
        backgroundColor: '#4d2e00', 
        backgroundPosition: 'center',
      }}
    />
  );
};