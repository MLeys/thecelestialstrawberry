import React from 'react';
import theme from '../../theme';

import servicesInfo from '../../assets/servicesInformation';

import ServicesSection from '../../components/ServicesSection/ServicesSection';
import ServiceDetails from '../../components/ServiceDetails/ServiceDetails';


export default function ServicesPage() {


  return (
    <div style={{ backgroundColor: theme.palette.primary.main }}>
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