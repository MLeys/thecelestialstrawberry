import * as React from 'react';
import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const StyledCardActionArea = styled(CardActionArea)({
  position: 'relative',
  '&:hover': {
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    '& .more-info-button': {
      display: 'flex',
      opacity: 1,
    },
  },
  '& .more-info-button': {
    transition: 'opacity 0.9s ease, transform 1.9s ease',
    position: 'absolute', 
    top: '50%', 
    left: '50%', 
    transform: 'translate(-50%, -50%)', 
    display: 'block',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '33px',
    textAlign: 'center',
    opacity: 0,
  }
});

export default function ServiceCard({index, service, onClick }) {
  const { title, image, calendly, summary, cardHoverWord } = service;


  return ( 
    <Card elevation={6} sx={{ maxWidth: 400, position: 'relative' }}> 
      <StyledCardActionArea  onClick={() => onClick(service)}>
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
            {summary}
          </Typography>
        </CardContent>
        <Box className="more-info-button">
          <Typography variant='h3'>{cardHoverWord}</Typography>
        </Box>
      </StyledCardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={calendly} target='_blank'>
          Book Now!
        </Button>
      </CardActions>
    </Card>
   );
}
