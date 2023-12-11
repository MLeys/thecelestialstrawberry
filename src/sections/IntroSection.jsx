import React from "react";

import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Paper from '@mui/material/Paper';

import ImageIcon from "../components/ImageIcon/ImageIcon";

const symbolSize = 150;

export default function IntroSection() {

  return (
    <Paper elevation={3} sx={{ p: 5, backgroundColor: 'inherit' }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid xs={12} sx={{ display: 'flex', justifyContent: 'center', m: 'auto'}}>
          <ImageIcon src="Images/symbols/zodiacWheel_02.png" size={symbolSize} />
        </Grid>
        <Grid xs={12} md={8}>
          <Typography variant='body1' fontSize={'1.25rem'} color={'primary.dark'} sx={{ px: {xs: 2, }}}>
            Astrology serves as a cosmic language, translating the celestial patterns 
            into <b>meaningful life guidance</b>. 
            <br/><br/>
            <b>Hellenistic Astrology</b> and <b>Tarot readings</b> stand as gateways 
            to <u>self-understanding</u> and <u>healing</u>.
          </Typography>
        </Grid>
        <Grid xs={12} sx={{ display: 'flex', justifyContent: 'center', m: 'auto'}}>
          <ImageIcon src="Images/symbols/cosmoStar_03.png" size={symbolSize} />
        </Grid>
      </Grid>
    </Paper>
  );
};