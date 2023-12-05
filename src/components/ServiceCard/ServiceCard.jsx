import * as React from 'react';
import theme from '../../theme';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { styled } from '@mui/material/styles';

const StyledCardActionArea = styled(CardActionArea)(({ theme }) => ({
  position: 'relative',
  '&:hover': {
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.2)', // Adjust the color and opacity for the dimming effect
    },
    '& .more-info-button': {
      display: 'flex',
    },
  },
}));


export default function ServiceCard({index, service }) {
  const title = service.title;
  const image = service.image;
  const calendly = service.calendly;
  const symbol = service.symbol;
  const summary = service.summary;
  const overview = service.overview;
  const purpose = service.purpose;
  const benefits = service.benefits;
  
  return ( 
    <Card elevation={6} sx={{ maxWidth: 400, position: 'relative' }}> 
      <StyledCardActionArea>
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
        <Box
          className="more-info-button"
          sx={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            display: 'none', 
            backgroundColor: 'primary.main', // Style similar to a Button
            color: 'white',
            padding: '8px 16px',
            borderRadius: '4px',
            textAlign: 'center',
            // Add any other styling to mimic a button
          }}
        >
          Learn More
        </Box>
        {/* <Button
          className="more-info-button"
          size="medium"
          variant="contained"
          color="primary"
          sx={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            display: 'none', 
          }}
        >
          Learn More
        </Button> */}
      </StyledCardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={calendly} target='_blank'>
          Book Now!
        </Button>
      </CardActions>
    </Card>
   );
}
