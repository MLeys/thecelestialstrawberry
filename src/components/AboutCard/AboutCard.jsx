import * as React from 'react';
import { useNavigate, useLocation } from "react-router-dom";

import { aboutInfo } from '../../assets/aboutInfo';
import theme from '../../theme';

import Link from '@mui/material/Link'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Paper from '@mui/material/Paper';
import { rootPath } from '../../../public/assets/rootPath';

const avatar = `${rootPath}/avatarLaura.jpg`;
const name = "Laura Yeomans";
const title = "Hellenistic Astrologer";


function ProfilePic({name, avatar, title}) {

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
  const navigate = useNavigate();

  const greeting = aboutInfo.find(item => item.part === 'greeting')?.text;
  const introduction = aboutInfo.find(item => item.part === 'introduction')?.text;
  const body1 = aboutInfo.find(item => item.part === 'body1')?.text;

  return (
    <Paper elevation={1} sx={{ marginX: 4, marginY: 15 }}> 
      <Grid container my={4} py={2} display={'flex'} justifyContent={'center'} >
        <Grid xs={8} sm={4} minHeight={'50dvh'} >
          <ProfilePic name={name} avatar={avatar} title={title}/>
        </Grid>
        <Grid xs={10} sm={8} md={8} p={2} pt={1}>
          <Typography display={{xs: 'block', sm: 'flex'}} variant='h6' pb={2} >
            {greeting}
          </Typography>
          <Typography display={{xs: 'block', sm: 'flex'}} variant='body1' pb={1}>
            {introduction}
          </Typography>
          <Typography display={{xs: 'none', sm: 'flex'}} variant='body1' pb={1}>
            {body1}
          </Typography>
          <Link onClick={() => navigate('about')}>
            <Typography  fontWeight={700}>
              Learn More . . .
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Paper>
  );
}

