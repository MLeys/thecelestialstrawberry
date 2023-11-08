import React from 'react';

import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'


const LandingSectionLayout = styled('section')(({ theme }) => ({
  color: 'white',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  zIndex: 0,
  minHeight: 500,
  maxHeight: 1264,
}));

const Background = styled(Box)({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  zIndex: -2,
});

const backgroundImage =
  'https://i.imgur.com/JIgcpzR.png';

const sxBackground = {
  margin: 0,
  backgroundImage: `url(${backgroundImage})`,
  backgroundColor: '#4d2e00', 
  backgroundPosition: 'center',
}

export default function HeroSection() {

  return ( 
    <LandingSectionLayout>
      <Container 
        sx={{
          mt: 3,
          mb: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
       
        {/* Inserts box to dim background image */}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: 'common.black',
            opacity: .5,
            zIndex: -1,
          }}
        />
        <Background sx={sxBackground} />
        {/* <KeyboardDoubleArrowDownIcon
          fontSize='large'
          alt="arrow down"
          sx={{ position: 'absolute', bottom: 32 }}
        /> */}

      </Container>
    </LandingSectionLayout>

   );
};