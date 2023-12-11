import React from "react";
import { rootPath } from "../assets/rootPath";

import Box from '@mui/material/Box';

const heroImage = `${rootPath}/backgrounds/tcs_background_13.png`;

export default function HeroSection() {
  const aspectRatio = 56.25; // padding-top hack to maintain aspect ratio of 16:9
  console.log(heroImage, "Hero Image Location");

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