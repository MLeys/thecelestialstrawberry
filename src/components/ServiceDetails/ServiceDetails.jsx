import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Paper from '@mui/material/Paper';

export default function ServiceDetails({ service }) {
  return (
    <Paper elevation={6} sx={{ margin: 4, padding: 3, backgroundColor: 'background.paper' }}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Typography variant="h4" color="primary.main" gutterBottom>
            {service.title}
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Typography variant="body1" >
            {service.summary}
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Typography variant="h6" color="secondary.main">
            Benefits
          </Typography>
          <Typography variant="body2" >
            {/* {service.benefits} */}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};
