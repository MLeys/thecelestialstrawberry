import * as React from 'react';
import { useNavigate } from "react-router-dom";
import { aboutInfo } from '../../assets/aboutInfo';

import { astrologyInfo } from '../../assets/servicesInformation';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import ServiceDetails from '../../components/ServiceDetails/ServiceDetails';

export default function AboutPage() {
  const navigate = useNavigate();

  const greeting = aboutInfo.find(item => item.part === 'greeting')?.text;
  const introduction = aboutInfo.find(item => item.part === 'introduction')?.text;
  const body1 = aboutInfo.find(item => item.part === 'body1')?.text;
  const body2 = aboutInfo.find(item => item.part === 'body2')?.text;
  const signature = aboutInfo.find(item => item.part === 'signature')?.text;


  return (
    <Grid container my={{xs: 6, md: 8}} display={'flex'} justifyContent={'center'} >
      <Grid xs={10} sm={6} md={4}>
        <img src='/Images/avatarLaura.jpg' style={{  width:'100%' }}/>
      </Grid>
      <Grid xs={10} sm={8} md={8} p={2} pt={1}>
        <Typography display={{xs: 'block', sm: 'flex'}} variant='h6' pb={2} >
          {greeting}
        </Typography>
        <Typography display={{xs: 'block', sm: 'flex'}} variant='body1' pb={1}>
          {introduction}
        </Typography>
        <Typography display={{xs: 'block', sm: 'flex'}} variant='body1' pb={1}>
          {body1}
        </Typography>
        <Typography display={{xs: 'block', sm: 'flex'}} variant='body1' pb={1}>
          {body2}
        </Typography>
        <Typography display={{xs: 'block', sm: 'flex'}} variant='subtitle2' pb={1}>
          {signature}
        </Typography>
        <Button variant='contained' color='secondary' onClick={() => navigate('/')}>
          Back to Home
        </Button>
      </Grid>
      <Grid xs={12} p={2} pt={1}>
        <ServiceDetails service={astrologyInfo} />
      </Grid>
    </Grid>
  )
}