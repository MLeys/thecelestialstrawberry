import React from 'react';
import theme from '../../theme';
import servicesInfo from '../../assets/servicesInformation';

import BookButton from '../../components/BookButton/BookButton';

import ServicesSection from '../../sections/ServicesSection';
import ServiceDetails from '../../components/ServiceDetails/ServiceDetails';


export default function ServicesPage() {


  return (
    <div style={{ backgroundColor: theme.palette.secondary.contrastText, padding: 10, marginTop: 15}}>
      {servicesInfo.map((service) => {
        return (
          <>
            <ServiceDetails
              key={service.id}
              service={service}
            >
              {/* <BookButton width={'100px'}  height={'40px'}  style={{ width: '100px', height: '40px', marginTop: 10}} onClick={() => console.log('clicked')}>Book Now!</button> */}
              <BookButton margin={10} height='40px' href={service.calendly} text={`Book Your ${service.title} Today!`}/>
            </ServiceDetails>

          </>

        );
      })}
    </div>
  );
};