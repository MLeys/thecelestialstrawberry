import React, { useState, useEffect, useRef } from 'react';


import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import useMediaQuery from '@mui/material/useMediaQuery';

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
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    '& .more-info-button': {
      opacity: 1,
      transform: 'translate(-50%, -50%) scale(1)',
    },
  },
  '& .more-info-button': {
    transition: 'opacity 0.5s ease, transform 3s ease',
    position: 'absolute', 
    top: '50%', 
    left: '50%', 
    transform: 'translate(-50%, -50%) scale(0)',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '33px',
    textAlign: 'center',
    opacity: 0,
    display: 'flex', // Always flex, but opacity controls visibility
    justifyContent: 'center', // Center content inside the box
    alignItems: 'center'
  }
}));

export default function ServiceCard({ service, onClick }) {
  const { title, image, calendly, summary, cardHoverWord } = service;
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [cardRef]);

  return (
    <Card elevation={6} sx={{ maxWidth: 400, position: 'relative' }}>
      <StyledCardActionArea ref={cardRef} onClick={() => onClick(service)}>
        <CardMedia
          component="img"
          sx={{ height: 'auto', width: '100%', objectFit: 'cover' }}
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
        <Box className="more-info-button" sx={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0)' }}>
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