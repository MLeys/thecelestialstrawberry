import * as React from 'react';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { styled } from '@mui/material/styles';

const avatar = "/Images/avatarMike.jpg";
const avatarSize = "100";
const name = "Laura Yeomens";

export default function AboutCard() {


  return ( 
    <>
    <Card elevation={6} sx={{ maxWidth: 400, position: 'relative' }}> 
    <Avatar
      alt={name}
      src={avatar}
      sx={{ width: {avatarSize}, height: {avatarSize} }}
    />      
    </Card>
    </>
   );
}

