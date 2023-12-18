import React, { useState, useRef } from 'react';

import servicesInfo from '../assets/servicesInformation';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import ServiceDetails from '../components/ServiceDetails/ServiceDetails';
import ServiceCard from '../components/ServiceCard/ServiceCard';

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(servicesInfo[0]); 
  const serviceDetailsRef = useRef(null);

  function handleServiceClick(service) {
    setActiveService(service);
    const element = serviceDetailsRef.current;
  
    if (element) {
      const offset = 100; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
      
  return (
    <>
      <Grid
        id='services'
        component={'section'}
        container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexGrow: 1,
          flexWrap: 'wrap',
          gap: 3,
          paddingY: 9,
          paddingX: 2,
          backgroundImage: 'url(https://imgur.com/Y60JE8H.png)',
          backgroundPosition: 'center',
        }}
      >
        {servicesInfo.map((service, index) => (
          <Grid key={crypto.randomUUID()} xs={10} sm={5} md={3} display={'flex'} justifyContent={'center'}>
            <ServiceCard  index={index} service={service}  onClick={() => handleServiceClick(service)} />
          </Grid>
        ))}

      </Grid>
      <Grid ref={serviceDetailsRef} display={'flex'} justifyContent={'center'} mb={5} xs={4}>
        <ServiceDetails service={activeService} />
      </Grid>
    </>

  );
};