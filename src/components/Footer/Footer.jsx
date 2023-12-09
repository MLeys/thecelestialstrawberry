import React from "react";
import theme from "../../theme";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function Copyright() {
  return (
    <Typography variant="body2">
      {'Copyright © '}
      <Link color="inherit" href="https://www.leys.dev/">
        Michael Leys 
      </Link>
      { ` 2023.`}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box 
      component="footer" 
      backgroundColor={theme.palette.hero.main} 
      color={theme.palette.hero.contrastText} 
      sx={{
        py: 0.5, // Reduced vertical padding
        px: 2,
        mt: 'auto',
      }}
      >
      <Container maxWidth="sm">
        <Typography variant="body1" >
          The Celestial Strawberry
        </Typography>
        <Copyright />
      </Container>
    </Box>
  )
};