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
        justifyContent={'center'}
        gap={10}
        marginY={10}
      >
        {testimonials.map((testimonial) => (
          <Grid key={crypto.randomUUID()} >
            <TestimonialCard testimonial={testimonial}  />
          </Grid>
        ))}

      </Grid>
      
    </>
  )
} 