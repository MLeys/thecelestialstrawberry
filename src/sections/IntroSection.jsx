import React from "react";
import theme from "../theme";

import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const backgrounds = [
  'https://imgur.com/georPnJ.png',
  'https://imgur.com/r2xMkjr.png',
  'https://imgur.com/Y60JE8H.png',
  'https://imgur.com/RBVZgs1.png',
  'https://imgur.com/xrN5Txk.png',
  'https://i.imgur.com/RBVZgs1.png',
  '',
  '',
  '',
]

export default function IntroSection() {
  return (
    <Box
      id="intro-section"
      component={'section'}
      sx={{
        p: 5,
        minHeight: '50dvh',
        // backgroundImage: `url(${backgrounds[2]})`, // Use template literals to insert the URL
        backgroundPosition: 'center',
        // width: '100%',
        backgroundColor: theme.palette.hero.light,
        backgroundSize: '100% cover',
        backgroundRepeat: 'no-repeat',
        alignContent: 'center',
        verticalAlign: 'middle',
      }} 
    >


      <Typography variant="h1"  sx={{ display: 'flex', justifyContent: 'center'}}>-</Typography>
      <Typography variant='body1' color={'primary.dark'} sx={{ px: {xs: 2, }}}>
        Astrology serves as a cosmic language, translating the celestial patterns into <b>meaningful life guidance</b>. 
 
        <br/><br/>
        
        <b>Hellenistic Astrology</b> and <b>Tarot readings</b> stand as gateways 
        to <u>self-understanding</u> and <u>healing</u>.

      </Typography>
      <Typography variant="h1"  sx={{ display: 'flex', justifyContent: 'center'}}>-</Typography>
      {/*
      As a conduit to this ancient knowledge, 
      
      It's believed to reveal our soul's blueprint for this life, aiding in actualizing potential and overcoming challenges. 
      It's a tool for empowerment, offering insights that inform choices and help sculpt the future. 
              providing a reflective mirror for personal evolution and clarity in life's 
        complex decisions.
      
      */}
    </Box>
  );
}

