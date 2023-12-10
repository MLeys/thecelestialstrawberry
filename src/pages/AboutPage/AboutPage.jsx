import * as React from 'react';
import { useNavigate } from "react-router-dom";

import theme from '../../theme';
import { aboutInfo } from '../../assets/aboutInfo';

import Link from '@mui/material/Link'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Paper from '@mui/material/Paper';

export default function AboutPage() {
  const [greeting, introduction, body1, body2] = aboutInfo;
  const navigate = useNavigate();

  console.log(aboutInfo)
  return (
    <Grid mt={20} container spacing={0} height={'100%'} >
    <Grid xs={4} minHeight={'50dvh'} >
      {/* <ProfilePic name={name} avatar={avatar} title={title}/> */}
    </Grid>
    <Grid xs={8} p={2} pt={1}>
      <Typography display={{xs: 'block', sm: 'none'}} variant='h6' align='center' fontWeight={700}>
        {greeting.text}
      </Typography>
      <Typography display={{xs: 'block', sm: 'none'}} variant='subtitle1' align='center' fontWeight={700} pb={1}>
        {introduction.text}
      </Typography>
      {/* <Typography component={'div'} display={{xs: 'block', sm: 'none'}} variant='body1' justifyContent={'center'}>
        {}
      </Typography>
      <Typography component={'div'} display={{xs: 'none', sm: 'block', md: 'none'}} variant='h6' justifyContent={'center'}>
        {aboutText()}
      </Typography>
      <Typography component={'div'} display={{xs: 'none', md: 'block'}} variant='h5' justifyContent={'center'}>
        {aboutText()}
      </Typography> */}
      <Link  onClick={() => navigate('/')}>
        <Typography  fontWeight={700}>
          Back to Home
        </Typography>`
      </Link>

    </Grid>
  </Grid>
  )
}