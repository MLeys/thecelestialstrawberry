import React from 'react';
import theme from '../../theme';

import Grid from "@mui/material/Unstable_Grid2/Grid2";

export default function BookButton({ text='Book Now!', fontSize='1rem', width='100%', height='100%', margin='5', href='/', onClick}) {
  return (
    <Grid>
      <a
        href={href}
        target='_blank'
      >
        <button
          style={{ 
            width: width, 
            height: height, 
            margin: margin,
            fontSize: fontSize,
            fontWeight: 'bold',
            borderRadius: 10,
            boxShadow: '0px 5px 20px 0px rgba(0,0,0,0.75)',
            border: 'none',

            backgroundColor: theme.palette.secondary.dark,
            color: theme.palette.primary.contrastText,
          }} 
          onMouseOver={(e) => e.target.style.backgroundColor = theme.palette.secondary.main}
          onMouseOut={(e) => e.target.style.backgroundColor = theme.palette.secondary.dark}
          onClick={() => onClick}
        >
        {text}
        </button>
      </a>

    </Grid>



  );
}