import * as React from 'react';
import theme from '../../theme';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Paper from '@mui/material/Paper';
import { NavLink, } from 'react-router-dom';

const avatar = "/Images/avatarLaura.jpg";
const name = "Laura Yeomens";
const title = "Hellenistic Astrologer";
const aboutText = () => {  
  return (
    <>
      <p>
        Howdy, cosmic wanderers!
      </p>
      <p>
        I'm Laura, your astrologer maven, tarot lover, and candle conjurer. With a heart full 
        of magic and a spirit that sparkles like the stars, I'm here to help you navigate the 
        celestial dance and discover the magic within you.
      </p>
    </>
  )
};


function ProfilePic({name, avatar, title}) {
  const aspectRatio = 50;
  return (
    <Box
      id="profileImage"
      sx={{
        alt: {name},
        p: 0,
        m: 0,
        height: '100%',
        position: 'relative',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${avatar})`,
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        borderRadius: '10px'
      }}
    >
      <Typography 
        display={{xs: 'none', sm: 'block'}}
        variant='h6' 
        color={theme.palette.primary.contrastText} 
        fontWeight={800}
        bgcolor='rgba(0, 0, 0, 0.5)'
        borderRadius= '33px'
        px={2}
        py={1}
      >
        {name}
        <Typography variant='body1' display={'flex'} justifyContent='center'>
        {title}
        </Typography>
      </Typography>
    </Box>
      
  )
};

export default function AboutCard() {

return (
  <Paper elevation={1} sx={{ marginX: 4, marginY: 15 }}> 

    <Grid container spacing={0} height={'100%'} >
      <Grid xs={4} minHeight={'50dvh'} >
        <ProfilePic name={name} avatar={avatar} title={title}/>
      </Grid>
      <Grid xs={8} p={2} pt={1}>
        <Typography display={{xs: 'block', sm: 'none'}} variant='h6' align='center' fontWeight={700}>
          {name}
        </Typography>
        <Typography display={{xs: 'block', sm: 'none'}} variant='body2' align='center' fontWeight={700} pb={1}>
          {title}
        </Typography>
        <Typography display={{xs: 'block', sm: 'none'}} variant='body1' justifyContent={'center'}>
          {aboutText()}
        </Typography>
        <Typography display={{xs: 'none', sm: 'block', md: 'none'}} variant='h6' justifyContent={'center'}>
          {aboutText()}
        </Typography>
        <Typography display={{xs: 'none', md: 'block'}} variant='h5' justifyContent={'center'}>
          {aboutText()}
        </Typography>
        <Typography component={NavLink} variant="body1" fontWeight={700}>
          Learn more. . .
        </Typography>
      </Grid>
    </Grid>
  </Paper>
   );
}

