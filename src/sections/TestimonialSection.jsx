import React from "react";

import { testimonials } from "../assets/testimonials";

import Grid from "@mui/material/Unstable_Grid2/Grid2";
import TestimonialCard from "../components/TestimonialCard/TestimonialCard";

export default function TestimonialSection() {
  return (
    <>
      <Grid
        id='testimonials'
        component={'section'}
        container
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        gap={10}
        marginY={10}
        
      >
        {testimonials.map((testimonial, index) => (
          <Grid key={crypto.randomUUID()} >
            <TestimonialCard  index={index} testimonial={testimonial}  onClick={() => handleTestimonialClick(testimonial)} />
          </Grid>
        ))}

      </Grid>
      
    </>
  )
} 