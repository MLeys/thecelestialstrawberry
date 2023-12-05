import React from 'react';
import theme from '../theme';
import servicesInfo from '../assets/servicesInformation';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import ServiceCard from '../components/ServiceCard/ServiceCard';

export default function ServicesSection() {
  

  const backgrounds = [
    'https://imgur.com/georPnJ.png',
    'https://imgur.com/r2xMkjr.png',
    'https://imgur.com/Y60JE8H.png',
    'https://imgur.com/RBVZgs1.png',
    'https://imgur.com/xrN5Txk.png',
    'https://imgur.com/XRSxlCz.png'
  ];

  const aspectRatio = 56.25; // padding-top hack

      
  return (
    <Grid
      id='services-section'
      component={'section'}
      container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'no-wrap',
        flexGrow: 1,
        maxHeight: '100%',
        maxWidth: '100%', 
        gap: 2,
        margin: '0 auto',
        padding: 2, 
        position: 'relative',
        backgroundSize: 'cover',
        backgroundImage: `url(${backgrounds[2]})`,
        backgroundPosition: 'center',
      }}
    >
      {servicesInfo.map((service, index) => (
        <Grid key={crypto.randomUUID()} xs={11} sm={5} md={3}>
          <ServiceCard
            index={index}
            title={service.title}
            description={service.description}
            image={service.image}
            calendly={service.calendly}
          />
        </Grid>
      ))}
    </Grid>
  );
};