import { useState } from 'react'
import * as React from 'react';

import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

import LandingPage from './pages/LandingPage/LandingPage';
import TopMenu from './components/TopMenu/TopMenu';
import HeroSection from './sections/HeroSection';


function App() {

  return (
    <Box
      sx={{
        width: '100dvw',
        minHeight: '100dvh'
      }}
    >
      <TopMenu />
      
      <HeroSection />
      <Grid container xs={12}>
        <Grid container xs={12}>
          <LandingPage />
        </Grid>
        <Grid container bgcolor={'black'}>
          <h6> next section</h6>
        </Grid>
      </Grid>
    </Box>
  )
}

export default App
