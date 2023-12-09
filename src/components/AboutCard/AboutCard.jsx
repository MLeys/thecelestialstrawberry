import * as React from 'react';
import theme from '../../theme';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const avatar = "/Images/avatarMike.jpg";
const avatarSize = 100;
const name = "Laura Yeomens";
const aspectRatio = 50;

function ProfilePic({name, avatar, size}) {
  return (
    <Box
      id="profileImage"
      sx={{
        alt: {name},
        
        
        width: '100%',
        paddingTop: `${aspectRatio}%`, // This creates the aspect ratio
        position: 'relative',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${avatar})`,
        backgroundPosition: 'center',
      }}
    />
  )
  // return (
  //   <Avatar
  //     alt={name}
  //     variant='rounded'
      
  //     src={avatar}
  //     sx={{ width: size, height: size }}
  //   />      
  // )
};

export default function AboutCard() {

return (
  <Paper elevation={1} sx={{ margin: 4, padding: 0 }}> 

    <Grid container spacing={2} height={'100%'} >
      <Grid xs={4}  bgcolor={'blue'} minHeight={'50dvh'}>
        <Grid xs={12} alignSelf={'center'} bgcolor={'red'} >
          <ProfilePic name={name} avatar={avatar}/>
        </Grid>

        <Grid xs={12} >
          <Typography variant="h5" align='center' fontWeight={800}>
            {name}
          </Typography>
        </Grid>
      </Grid>
      <Grid xs={4}>
        <Typography variant="body1" >
          text area one
        </Typography>
        
        <Typography variant="body1" >
          text area two
        </Typography>
      </Grid>
    </Grid>
  </Paper>
   );
}

