import React from 'react';
import theme from '../../theme';

import servicesInfo from '../../assets/servicesInformation';

import ServicesSection from '../../sections/ServicesSection';
import ServiceDetails from '../../components/ServiceDetails/ServiceDetails';

export default function ServicesPage() {


  return (
    <div style={{ backgroundColor: theme.palette.primary.main, padding: 10, marginTop: 15}}>
      {servicesInfo.map((service) => {
        return (
          <ServiceDetails
            key={service.id}
            service={service}
          />
        );
      })}
    </div>
  );
};