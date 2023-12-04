import * as React from 'react';
import theme from '../theme';
import practicesInfo from '../assets/servicesInformation';

import Box from '@mui/material/Box';

import ServiceCard from '../components/ServiceCard/ServiceCard';

export default function ServicesSection() {

  const services = [
    { title: 'Tarot Reading', description: 'Description 1', image: 'https://i.imgur.com/MwRSncW.png', calendly: 'https://calendly.com/mleys/service-1' }, 
    { title: 'Birth Card Reading', description: 'Description 2', image: 'https://i.imgur.com/gRh80fX.png', calendly: 'https://calendly.com/mleys/service-2' },
    { title: 'Third Thing', description: 'Description 2', image: 'https://i.imgur.com/an9PuYi.png', calendly: 'https://calendly.com/mleys/service-2' },

  ];
const hello = [...practicesInfo]
  

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
    <Box
      id='services-section'
      component={'section'}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'no-wrap',
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
      {services.map((service, index) => (
        <ServiceCard
          key={`serviceCard-${index}`}
          index={index}
          title={service.title}
          description={service.description}
          image={service.image}
          calendly={service.calendly}
        />
      ))}
    </Box>
  );
};