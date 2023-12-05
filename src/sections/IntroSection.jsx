import React from "react";
import theme from "../theme";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Paper from '@mui/material/Paper';


function SectionHeader({text }) {
  return (
    <Typography variant="h1" sx={{ display: 'flex', justifyContent: 'center', m: 'auto'}}>
    {text}
    </Typography>
  )
};

function AstrologyIcon({ image }) {
  return (
    <img src={image} />
    // <Box
    //   sx={{
    //     width: 200, // Set the width as needed
    //     height: 200, // Set the height as needed
    //     // backgroundImage: 'dist/Images/symbols/zodiacWheel_02 Background Removed.png',
    //     backgroundImage: `url(${image})`,
    //     backgroundSize: 'cover', // This ensures the image covers the whole box
    //     backgroundPosition: 'center', // This centers the image in the box
    //   }}
    // />
  );
}

export default function IntroSection() {
  return (
    <Paper elevation={3} sx={{ p: 5, backgroundColor: 'inherit' }}>
      <Grid container spacing={2} justifyContent="center">
        
        <Grid item xs={12}>
          <SectionHeader text="-" />
        </Grid>

        <Grid item xs={12}>
        <AstrologyIcon image={'../dist/Images/symbols/zodiacWheel_02_Background_Removed.png'} />        </Grid>

        <Grid item xs={12} md={8}>
          <Typography variant='body1' fontSize={'1.25rem'} color={'primary.dark'} sx={{ px: {xs: 2, }}}>
            Astrology serves as a cosmic language, translating the celestial patterns 
            into <b>meaningful life guidance</b>. 
            <br/><br/>
            <b>Hellenistic Astrology</b> and <b>Tarot readings</b> stand as gateways 
            to <u>self-understanding</u> and <u>healing</u>.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <AstrologyIcon name="moon" /> {/* Example icon component */}
        </Grid>

        <Grid item xs={12}>
          <SectionHeader text="-" />
        </Grid>

      </Grid>
    </Paper>
  );
};



// export default function IntroSection() {
//   return (
//     <Box
//       id="intro-section"
//       component={'section'}
//       sx={{
//         p: 5,
//         display: 'flex',
//         flexDirection: 'column',
//         alignContent: 'center',
//         verticalAlign: 'middle',
//         justifyContent: 'center',
//       }} 
//     >


//       <Typography id={'hash'} variant="h1"  sx={{ display: 'flex', justifyContent: 'center', m: 'auto'}}>-</Typography>
//       <Typography variant='body1' fontSize={'1.25rem'} color={'primary.dark'} sx={{ px: {xs: 2, }}}>
//         Astrology serves as a cosmic language, translating the celestial patterns 
//         into <b>meaningful life guidance</b>. 
//         <br/><br/>
//         <b>Hellenistic Astrology</b> and <b>Tarot readings</b> stand as gateways 
//         to <u>self-understanding</u> and <u>healing</u>.
//       </Typography>
//       <Typography variant="h1"  sx={{ display: 'flex', justifyContent: 'center', m: 'auto'}}>-</Typography>
//     </Box>
//   );
// };


//       {/*
//       As a conduit to this ancient knowledge, 
      
//       It's believed to reveal our soul's blueprint for this life, aiding in actualizing potential and overcoming challenges. 
//       It's a tool for empowerment, offering insights that inform choices and help sculpt the future. 
//               providing a reflective mirror for personal evolution and clarity in life's 
//         complex decisions.
      
//       */}

