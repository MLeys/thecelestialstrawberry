import * as React from 'react';

import Box from '@mui/material/Box';

import ServiceCard from '../components/ServiceCard/ServiceCard';

export default function ServicesSection() {

  const services = [
    { title: 'Service 1', description: 'Description 1' }, 
    { title: 'Service 2', description: 'Description 2' }
  ];

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2, p: 5 }}>
            {services.map((service, index) => (
              <ServiceCard index={index} title={service.title} description={service.description}/>

            ))}
        </Box>
    );
};