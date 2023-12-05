import * as React from 'react';
import theme from '../../theme';
import { useNavigate } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';



export default function ServiceCard({title, description, image, calendly }) {
  return ( 
    <Card elevation={6} sx={{ maxWidth: 400, position: 'relative' }}> {/* Adjust maxWidth to suit your layout */}
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{
            height: 'auto', 
            width: '100%', 
            objectFit: 'cover', 
          }}
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component={'div'}>
            {title}
          </Typography>
          <Typography variant='body2' color={'heroPurple.dark'}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={calendly} target='_blank'>
          Book Now!
        </Button>
      </CardActions>
    </Card>
   );
}
