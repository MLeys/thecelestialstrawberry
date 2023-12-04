import * as React from 'react';
import theme from '../../theme';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function ServiceCard({title, description, image}) {
  return ( 
    <Card sx={{maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component={'img'}
          height={140}
          image='url("https://i.imgur.com/MwRSncW.png")'
          alt={`${title}`}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component={'div'}>
            {title}
          </Typography>
          <Typography variant='body2' color={heroPurple.dark}>
            Tarot readings are what they are and it they were not, they woould be something different
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Book Now!
        </Button>
      </CardActions>
    </Card>
   );
}
