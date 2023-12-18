import React from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function TestimonialCard({ testimonial}) {
  return (
    <Card sx={{width: '100%', paddingY: 3}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {testimonial.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {testimonial.testimonial}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
};
