import React from "react";
import theme from "../../theme";

import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import TopMenu from "../../components/TopMenu/TopMenu";
import HeroSection from "../../sections/HeroSection";
import IntroSection from "../../sections/IntroSection";

function LandingPage() {
  return (  
    <Box sx={{ width: '100dvw', minHeight: '100dvh'}}>
      <TopMenu />
      <HeroSection />

      <Grid container xs={12}>
        <Grid container xs={12}>
          <LandingPage />
        </Grid>
        <Grid container xs={12}>
          <IntroSection />
        </Grid>
        
        <Grid container xs={12}>
          <h6> next section</h6>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LandingPage;