import React from "react";
import theme from "../theme";

import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function IntroSection() {
  return (
    <Container
      sx={{
        backgroundColor: theme.palette.primary.dark,
        minHeight: '80vh',
        alignContent: 'center',
        verticalAlign: 'middle',
        py: 5
      }} 
    >
      <Typography variant='h6' color={'secondary.contrastText'}>
        Astrology serves as a cosmic language, translating the celestial patterns into meaningful 
        life guidance. It's believed to reveal our soul's blueprint for this life, aiding in 
        actualizing potential and overcoming challenges. It's a tool for empowerment, offering 
        insights that inform choices and help sculpt the future. As a conduit to this ancient 
        knowledge, Hellenistic Astrology and Tarot readings stand as gateways to self-understanding 
        and healing, providing a reflective mirror for personal evolution and clarity in life's 
        complex decisions.
      </Typography>

    </Container>
  );
}

