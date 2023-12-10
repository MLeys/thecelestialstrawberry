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
  const navigate = useNavigate();

  const greeting = aboutInfo.find(item => item.part === 'greeting')?.text;
  const introduction = aboutInfo.find(item => item.part === 'introduction')?.text;
  const body1 = aboutInfo.find(item => item.part === 'body1')?.text;
  const body2 = aboutInfo.find(item => item.part === 'body2')?.text;
  const signature = aboutInfo.find(item => item.part === 'signature')?.text;

  return (
    <Grid container my={4}  >
      <Grid xs={10} md={4} minHeight={'50dvh'} bgcolor={'blueviolet'} >
        Profile pic
      </Grid>
      <Grid xs={10} md={8} p={2} pt={1}>
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
        <Typography display={{xs: 'block', sm: 'flex'}} variant='body1' pb={1}>
          {signature}
        </Typography>

        <Link  onClick={() => navigate('/')}>
          <Typography  fontWeight={700}>
            Back to Home
          </Typography>`
        </Link>

      </Grid>
    </Grid>
  )
}